import { TrendUp, ChartPieSlice, MicrosoftExcelLogo } from "phosphor-react";
import { Link } from "react-router-dom";
import { useDataContext } from "../../provider/dataProvider";
import { Container } from "./style";

export function Menu() {

    const { table } = useDataContext()

    return (
        <Container>
            <nav>
                <Link to="/" className="link"><MicrosoftExcelLogo size={32} />Table</Link>
                <Link to={table.length === 0 ? '' : "/statistic"} className="link"><TrendUp size={32} />Statistic</Link>
                <Link to={table.length === 0 ? '' : "/graph"} className="link"><ChartPieSlice size={32} />Charts</Link>
            </nav>
        </Container>
    )
}