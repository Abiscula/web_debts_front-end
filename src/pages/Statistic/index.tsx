import { ReactNode, useMemo, useState } from "react";
import { CircleWavyQuestion, Coins, TrendDown } from "phosphor-react";

import { useDataContext } from "../../provider/dataProvider";
import { Container } from "./style";

interface tableValues {
    VALUE: number;
    TYPE: string;
}

export function Statistic() {
    const { table } = useDataContext()
    const [spent, setSpent] = useState<number>()
    const [types, setTypes] = useState<Array<string>>()
    const [spentTypes, setSpentTypes] = useState<number>(0)


    useMemo(() => {
        let totalSpent: number = 0
        let totalTypes: Array<string> = ['']

        table.forEach((value: tableValues) => {
            totalSpent = totalSpent + value['VALUE']
            totalTypes.push(value['TYPE'])
        })

        setSpent(totalSpent)
        const uniqueTypes = new Set(totalTypes)
        setTypes(Array.from(uniqueTypes))

    }, [table])

    function handleTypes(e: ReactNode) {
        let spentByType: number = 0
        table.filter((value: tableValues) => value['TYPE'] === e).map((value: tableValues) => (
            spentByType = spentByType + value['VALUE']
        ))
        setSpentTypes(spentByType)
    }

    return (
        <Container>
            <div>  
                <Coins size={32} color="#fa8072" />
                <p>Total expense</p>
                <span>R$: {spent?.toFixed(2)}</span>
                <TrendDown size={32} color="#bb3535" />
            </div>

            <div>  
                <CircleWavyQuestion size={32} color="#fa8072" />
                <p>Expense type</p>
                <select onChange={(e) => handleTypes(e.target.value)}>
                    {types?.map(type => (
                        <option>{type}</option>
                    ))}
                </select>
                <span>R$: {spentTypes?.toFixed(2)}</span>
            </div>
        </Container>
    )
}