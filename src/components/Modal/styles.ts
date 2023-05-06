import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';
import * as RadioGroup from '@radix-ui/react-radio-group'


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
        background: ${(props) => props.theme["gray-900"]};
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

        &:not(:disabled):hover{
            background: ${(props) => props.theme["green-700"]};
            transition: backgorund-color 0.2s;
        }

        &:disbaled{
            cursor: not-allowed;
            opacity: 0.7;
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
    color: ${(props) => props.theme["gray-500"]};
`;

export const TransActionType = styled(RadioGroup.Root)`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-top: 0.5rem;
`

interface TransActionTypeProps{
    variant: "income" | "outcome";
}

export const TransActionTypeButton = styled(RadioGroup.Item)<TransActionTypeProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    
    background: ${(props) => props.theme["gray-700"]};
    border: 0;
    border-radius: 6px;
    cursor: pointer;
    color: ${(props) => props.theme["gray-300"]};
    padding: 1rem;

    svg{
        color: ${props => props.variant === "income" ? props.theme["green-300"] : props.theme["red-300"]};
    }

    &[data-state="checked"]{
        background: ${props => props.variant === "income" ? props.theme["green-500"] : props.theme["red-500"]};
        color: ${(props) => props.theme.white};

        svg{
            color: ${(props) => props.theme.white}
        }
    }

    &[data-state="unchecked"]:hover{
        background: ${(props) => props.theme["gray-600"]};
        transition: background-color 0.2s;
    }


`