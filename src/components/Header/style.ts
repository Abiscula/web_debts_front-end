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
        font-weight: var(--font-normal);

        span {
            color: var(--color-salmon);
            font-weight: var(--font-bold);
        }
    }

    div:last-child {
        width: 38%;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    select {
        border: 1px solid #cecece;
        width: 7rem;
        padding: 0.44rem;
        border-radius: 5px;
        background-color: var(--header-background);
        color: var(--header-white);
        cursor: pointer;
        margin-left: 2rem;
        margin-right: 2rem;
    }

    button {
        width: 7.5rem;
        height: 2.6rem;
        border-radius: 5px;
        border: none;
        background-color: var(--color-salmon);
        color: var(--header-white);
        font-size: 1rem;
        font-weight: bold;
        cursor: pointer;

        &:hover {
            opacity: 0.8;
            color: var(--header-background);
        }

        &:disabled {
            opacity: 0.5;
        }
    }

    .btn-template {
        width: 6rem;
        min-width: 6rem;
        background-color: #808080;
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
        padding: 7.5px;
        border-radius: 5px;
        font-size: 1.05rem;
        cursor: pointer;
    }

`