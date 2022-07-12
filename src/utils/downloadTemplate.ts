import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

import { months } from './months';

export function createXLSX() {
    const wb = XLSX.utils.book_new() //cria o workbook
    wb.Props = { //define as propriedades
        Title: "Web-debts",
        Subject: "app-migration",
        Author: "creditas",
        CreatedDate: new Date()
    }

    months.shift() //removendo primeiro elemento (espaço vazio)
    wb.SheetNames.push(...months); //Cria o worksheet
    const ws_data = [['DEBITS', 'PLACE OF PURCHASE', 'TYPE', 'VALUE', 'STATS']]; //nome das colunas
    const ws = XLSX.utils.aoa_to_sheet(ws_data); //cria a página (sheet)
    const wscols = [ //determina a largura das colunas
        { wch: 20 },
        { wch: 20 },
        { wch: 20 },
        { wch: 20 },
        { wch: 20 },
        { wch: 20 }
    ];
    ws['!cols'] = wscols;

    months.forEach((month) => { //aplica tabela em cada página(sheet)
        wb.Sheets[month] = ws
    })

    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' }) //transforma excel em bin
    downLoadExcel(wbout)
}

function downLoadExcel(bin_file: BinaryType) {
    let buf = new ArrayBuffer(bin_file.length) //convert bin para arrayBuffer
    let view = new Uint8Array(buf)  //cria um uint8array
    for (let i = 0; i < bin_file.length; i++) view[i] = bin_file.charCodeAt(i) & 0xFF //convert to octet
    saveAs(new Blob([buf], { type: "application/octet-stream" }), 'web-debts.xlsx')
}