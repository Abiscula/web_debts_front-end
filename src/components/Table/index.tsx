import { useDataContext } from "../../provider/dataProvider"
import { Container } from "./style"
// interface table {
//     item: Array<object>;
//     CONTAS: string;
//     B: string;
//     C: string;
//     D: string;
//     E: string;
// }

export function Table() {
    const { table } = useDataContext()
    const columns = ['CONTAS', 'LOCAL DE COMPRA', 'TIPO', 'VALOR', 'STATUS']

    return(
        <Container>
            <table>
                { table.length !== 0 ?
                    <tr>
                        <th>{columns[0]}</th>
                        <th>{columns[1]}</th>
                        <th>{columns[2]}</th>
                        <th>{columns[3]}</th>
                        <th>{columns[4]}</th>
                    </tr> 
                : ''}
                
                {table?.map((item: any, index: number) => {                    
                    return (
                        <tr key={index}>
                            <td>{item['CONTAS']}</td>
                            <td>{item['LOCAL DE COMPRA']}</td>
                            <td>{item['TIPO']}</td>
                            <td>{item['VALOR']}</td>
                            <td>{item['STATUS']}</td>
                        </tr>
                    )
                })}
            </table>
        </Container>
    )
}