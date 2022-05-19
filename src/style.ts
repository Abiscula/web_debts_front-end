import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const Global = createGlobalStyle`
    body {
        background-color: var(--background);
        font-family: 'Poppins', sans-serif;
        font-weight: var(--font-normal);
    }
`

export const Container = styled.main`
    display: flex;
    margin: 0 auto;
    flex-direction: row-reverse;
    justify-content: space-around;
    margin-top: 2.5rem;
    width: 80vw;
`