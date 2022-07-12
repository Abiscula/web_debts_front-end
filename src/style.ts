import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const Global = createGlobalStyle`
    body {
        background-color: var(--background);
        font-family: 'Poppins', sans-serif;
        font-weight: var(--font-normal);
        overflow-x: hidden;
    }
`

export const Container = styled.main`
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    justify-content: space-around;
    width: 80vw;
`