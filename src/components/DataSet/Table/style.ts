import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem auto;

    table {
        border-spacing: 0 0.5rem ;  /* cell spacing */
        border-collapse: separate;

        th { //t-head 
            padding: 0.8rem;
            text-transform: uppercase;
            font-weight: var(--font-bold);
            color: var(--header-background);
            letter-spacing: 2px;
        }

        td { //column
            padding: 0.8rem;
            background-color: var(--color-salmon-rows);

            &:hover {
                background-color: var(--color-salmon);
            }

            &:first-child {
                border-start-start-radius: 10px;
                border-end-start-radius: 10px
            }

            &:last-child {
                border-end-end-radius: 10px;
                border-start-end-radius: 10px
            }
        }

        
    }
    
`