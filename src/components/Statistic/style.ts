import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
    gap: 4rem;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 14rem;
        height: 14rem;
        border-radius: 10rem;

        background-color: rgba(50, 67, 83, 0.14);
        box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.473);
        color: var(--header-background);
        
        p {
            font-size: 1.2rem;
        }

        span {
            font-weight: var(--font-bold);
            font-size: 1.6rem;
            margin-bottom: 1rem;
        }

        select {
            width: 9rem;
            border-radius: 10px;
            border: none;
            margin-bottom: 1rem;
        }

    }
`