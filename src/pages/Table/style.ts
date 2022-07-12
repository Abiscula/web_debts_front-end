import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

    table {
        border-spacing: 0 0.5rem ;  /* cell spacing */
        border-collapse: separate;

        th { //t-head 
            padding: 1rem;
            text-transform: uppercase;
            font-weight: var(--font-bold);
            color: var(--header-background);
            letter-spacing: 2px;
            text-align: start;
        }

        td { //column
            padding: 1rem;
            background-color: var(--color-salmon-rows);

            &:hover {
                background-color: var(--color-salmon);
            }

            &:first-child {
                border-start-start-radius: 10px;
                border-end-start-radius: 10px;
                width: 30%;
            }

            &:nth-child(2) {
                width: 20%;
            }

            &:nth-child(3) {
                width: 20%;
            }

            &:nth-child(4) {
                width: 20%;
            }

            &:last-child {
                border-end-end-radius: 10px;
                border-start-end-radius: 10px;
                width: 10%;
            }
        }

        
    }
    
`