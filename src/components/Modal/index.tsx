import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, OverLay, TransActionType, TransActionTypeButton } from './styles';
import { X } from 'phosphor-react';
import { ArrowCircleDown, ArrowCircleUp } from 'phosphor-react';

export function Modal(){
    return(
        <Dialog.Portal>
            <OverLay/>
            <Content>
                <Dialog.Title>Nova Transção</Dialog.Title>
                <CloseButton asChild>
                    <X size={24}/>
                </CloseButton>
                <form action="">
                    <input type="text" placeholder="Descrição" required/>
                    <input type="number" placeholder="Preço" required/>
                    <input type="text" placeholder="Categoria" required/> 
                    <TransActionType>
                        <TransActionTypeButton variant="income" value="income">
                            Entrada
                            <ArrowCircleUp size={24}/>
                        </TransActionTypeButton>

                        <TransActionTypeButton variant="outcome" value="outcome">
                            Saída
                            <ArrowCircleDown size={24}/>
                        </TransActionTypeButton>
                    </TransActionType>
                    <button type="submit">
                        Cadastrar
                    </button>
                </form>
            </Content>
        </Dialog.Portal>
    )
}