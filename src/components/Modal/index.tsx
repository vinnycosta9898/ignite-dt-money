import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, OverLay } from './styles';
import { X } from 'phosphor-react';

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
                    <button type="submit">
                        Cadastrar
                    </button>
                </form>
            </Content>
        </Dialog.Portal>
    )
}