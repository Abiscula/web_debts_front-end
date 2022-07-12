import { useDataContext } from "../../provider/dataProvider"
import { Container } from "./style"

interface tableValues {
    DEBITS: string;
    "PLACE OF PURCHASE": string;
    TYPE: string;
    VALUE: number;
    STATS: string;

}

export function Table() {
    const { table } = useDataContext()
    const columns = ['DEBITS', 'PLACE OF PURCHASE', 'TYPE', 'VALUE', 'STATS']

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
                
                {table?.map((item: tableValues, index: number) => {                    
                    return (
                        <tr key={index}>
                            <td>{item['DEBITS']}</td>
                            <td>{item['PLACE OF PURCHASE']}</td>
                            <td>{item['TYPE']}</td>
                            <td>R$: {item['VALUE'].toFixed(2)}</td>
                            <td>{item['STATS']}</td>
                        </tr>
                    )
                })}
            </table>
        </Container>
    )
}