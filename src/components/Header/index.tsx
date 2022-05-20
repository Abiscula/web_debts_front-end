import { useState } from "react";
import { Container, InputSpan } from "./style";
import axios from "axios";
import { useDataContext } from "../../provider/dataProvider";

export function Header() {

    const [uploadFile, setUploadFile] = useState<File | null>()
    const [selectedMonth, setSelectedMonth] = useState<string>('')
    const { setTable } = useDataContext()
    const months = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    async function sendFile() {
        console.log(selectedMonth)
        if (uploadFile && selectedMonth) {
            try{
                const resp = await axios.request({
                    method: 'post',
                    baseURL: 'http://localhost:3333/table',
                    headers: { 'Content-Type': 'multipart/form-data' },
                    data: { 
                        table: uploadFile,
                        month: selectedMonth
                    }
                })
                setTable(resp.data)
            } catch(error) {
                console.log(error)
            }
        }
    }

    return (
        <Container>
            <div>
                <h1>Web&<span>debts</span></h1>
            </div>
            <div>
                <InputSpan uploadFile={uploadFile}>
                    <label htmlFor="upload">{uploadFile ? uploadFile.name : 'Select CSV'}</label>
                    <input
                        type="file"
                        id="upload"
                        accept=".xlsx"
                        onChange={(e) => setUploadFile(e.target.files && e.target.files[0])}
                    />
                </InputSpan>

                <select onChange={(e) => setSelectedMonth(e.target.value)}>
                    {months.map((month: string) => (
                        <option>{month}</option>
                    ))}
                </select>
                <button onClick={sendFile} disabled={uploadFile === null}> Import table</button>
            </div>
        </Container>
    )
}