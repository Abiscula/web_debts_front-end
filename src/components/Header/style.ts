import styled from "styled-components";
import '../../theme.css'

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100vw;
    height: 220px;
    background-color: var(--header-background);
    box-shadow: 0px 0px 9px 5px rgba(41,41,41,.5);

    h1 {
        color: var(--header-white);
    }

    button {
        width: 8rem;
        padding: 10px;
        border-radius: 5px;
        border: none;
        margin-left: 2rem;
        background-color: var(--header-white);
        color: var(--header-background);
        font-size: 1.05rem;
        font-weight: bold;
        cursor: pointer;
    }

    button:disabled {
        opacity: 0.5;
    }
`

export const InputSpan: any = styled.span`

    input[type="file"] { 
        display: none; 
    }

    label {
        color: var(${(props: any) => !props.uploadFile ? '--header-white' : '--header-background'});
        background-color: var(${(props: any) => props.uploadFile ? '--header-white' : '--header-background'});
        opacity: ${(props: any) => props.uploadFile ? '0.5' : '1'};
        border: 1px solid #cecece;
        padding: 10px;
        border-radius: 5px;
        font-size: 1.05rem;
        cursor: pointer;
    }

`