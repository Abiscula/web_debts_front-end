import { ReactNode, useMemo, useState } from "react";
import { CircleWavyQuestion, Coins, TrendDown } from "phosphor-react";

import { useDataContext } from "../../provider/dataProvider";
import { Container } from "./style";

interface tableValues {
    VALOR: number;
    TIPO: string;
}

export function Statistic() {
    const { table } = useDataContext()
    const [spent, setSpent] = useState<number>()
    const [types, setTypes] = useState<Array<string>>()
    const [spentTypes, setSpentTypes] = useState<number>()


    useMemo(() => {
        let totalSpent: number = 0
        let totalTypes: Array<string> = ['']

        table.forEach((value: tableValues) => {
            totalSpent = totalSpent + value['VALOR']
            totalTypes.push(value['TIPO'])
        })

        setSpent(totalSpent)
        const uniqueTypes = new Set(totalTypes)
        setTypes(Array.from(uniqueTypes))

    }, [table])

    function handleTypes(e: ReactNode) {
        let spentByType: number = 0
        table.filter((value: tableValues) => value['TIPO'] === e).map((value: tableValues) => (
            spentByType = spentByType + value['VALOR']
        ))
        setSpentTypes(spentByType)
    }

    return (
        <Container>
            <div>  
                <Coins size={32} color="#fa8072" />
                <p>Total gasto</p>
                <span>R$: {spent?.toFixed(2)}</span>
                <TrendDown size={32} color="#bb3535" />
            </div>

            <div>  
                <CircleWavyQuestion size={32} color="#fa8072" />
                <p>Tipo de gasto</p>
                <select onChange={(e) => handleTypes(e?.target.value)}>
                    {types?.map(type => (
                        <option>{type}</option>
                    ))}
                </select>
                <span>R$: {spentTypes?.toFixed(2)}</span>
            </div>
        </Container>
    )
}