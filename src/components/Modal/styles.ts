import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';

export const OverLay = styled(Dialog.Overlay)`
    position: fixed;
    width: 100vw;
    height: 100vh;
    inset: 0;
    background: rgba(0,0,0,0.75);
`;

export const Content = styled(Dialog.Content)`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    min-width: 32rem;
    background: ${(props) => props.theme["gray-800"]}
    border-radius: 6px;
    line-height: 0;
    padding: 2.5rem 3rem;

    form{
        margin-top: 2rem;

        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    input{
        background: ${(props) => props.theme["gray-900"]}
        border-radius: 6px;
        border: 0;
        color: ${(props) => props.theme["gray-300"]};
        padding: 1rem;

        &::placeholder{
            color: ${(props) => props.theme["gray-500"]}
        }
    }

    button[type="submit"]{
        height: 58px;
        
        background: ${(props) => props.theme["green-500"]};
        border: 0;
        border-radius: 6px;
        color: ${(props) => props.theme.white};
        cursor: pointer;
        font-weight: bold;
        margin-top: 1.5rem;
        padding: 0 1.25rem;

        &:hover{
            background: ${(props) => props.theme["green-700"]};
            transition: backgorund-color 0.2s;
        }
    }

`

export const CloseButton = styled(Dialog.Close)`
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    
    background: transparent;
    border: 0;
    cursor: pointer;
    color: ${(props) => props.theme["gray-500"]}
`;