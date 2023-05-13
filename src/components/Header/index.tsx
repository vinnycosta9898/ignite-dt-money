import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import logoImg from '../../assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { Modal } from '../Modal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transacão</NewTransactionButton>
          </Dialog.Trigger>
          <Modal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
