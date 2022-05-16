import { useDataContext } from "../../../provider/dataProvider"
import { Container } from "./style"
interface table {
    item: Array<object>;
    A: string;
    B: string;
    C: string;
    D: string;
    E: string;
}

export function Table() {
    const { table } = useDataContext()

    return(
        <Container>
            <table>
                {table?.map((item: table, index: number) => {
                    if(index === 0) {
                    return (
                        <tr key={item.A}>
                            <th>{item.A}</th>
                            <th>{item.B}</th>
                            <th>{item.C}</th>
                            <th>{item.D}</th>
                        </tr>
                        )
                    } else {
                        return (
                            <tr key={item.A}>
                                <td>{item.A}</td>
                                <td>{item.B}</td>
                                <td>{item.C}</td>
                                <td>{item.D}</td>
                            </tr>
                        )
                    }
                })}
            </table>
        </Container>
    )
}