import { TrendUp, ChartPieSlice, MicrosoftExcelLogo } from "phosphor-react";
import { Link } from "react-router-dom";
import { Container } from "./style";

export function Menu() {
    return (
        <Container>
            <nav>
                <Link to="/" className="link"><MicrosoftExcelLogo size={32} />Table</Link>
                <Link to="/statistic" className="link"><TrendUp size={32} />Statistic</Link>
                <Link to="/graph" className="link"><ChartPieSlice size={32} />Charts</Link>
            </nav>
        </Container>
    )
}