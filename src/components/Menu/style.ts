import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    background-color: var(--header-background);
    align-self: center;
    height: 80px;
    width: 40vw;
    border-radius: 0 0 80px 80px;
    border-top: 0.4rem solid var(--color-salmon);
    box-shadow: 0px 5px 9px 0px rgba(41,41,41,.5);
    margin-bottom: 3rem;
    
    nav {
        display: flex;
        margin: auto;
        align-items: center;
        gap: 4.2rem;
        .link {
            color: var(--header-white);
            text-decoration: none;
            width: 50px;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: auto;
            gap: 2px;
            text-align: center;
  
        }
        .link:hover {
            color: var(--color-salmon);
            transform: scale(1.1);
        }
    }
`