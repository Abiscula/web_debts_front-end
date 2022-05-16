import { useDataContext } from "../../../provider/dataProvider"

export function Table() {

    const { table } = useDataContext()

    return(
        <div>
            <h1>Table</h1>
            <table>
                {table.map((item: Array<string> | any, index: number) => {
                    if(index === 0) {
                    return (
                        <tr>
                            <th>{item.A}</th>
                            <th>{item.B}</th>
                            <th>{item.C}</th>
                            <th>{item.D}</th>
                        </tr>
                        )
                    } else {
                        return (
                            <tr>
                                <td>{item.A}</td>
                                <td>{item.B}</td>
                                <td>{item.C}</td>
                                <td>{item.D}</td>
                            </tr>
                        )
                    }
                })}
            </table>
        </div>
    )
}