import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, OverLay, TransActionType, TransActionTypeButton } from './styles';
import { X } from 'phosphor-react';
import { ArrowCircleDown, ArrowCircleUp } from 'phosphor-react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'

const newTransactionFormSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    // type: z.enum(["income", "outcome"])
})

type NewTransActionFormInputs = z.infer<typeof newTransactionFormSchema>;

export function Modal(){
    const { 
            register, 
            handleSubmit,
            formState: { isSubmitting }
          } = useForm<NewTransActionFormInputs>({
        resolver: zodResolver(newTransactionFormSchema)
    })

    async function createNewTransaction(data: NewTransActionFormInputs){
        await new Promise(resolve => setTimeout(resolve, 2000))
        console.log(data)
    }

    return(
        <Dialog.Portal>
            <OverLay/>
            <Content>
                <Dialog.Title>Nova Transção</Dialog.Title>
                <CloseButton asChild>
                    <X size={24}/>
                </CloseButton>
                <form onSubmit={handleSubmit(createNewTransaction)}>
                    <input 
                        type="text"
                        placeholder="Descrição"
                        required
                        {...register("description")}
                    />
                    <input 
                        type="number" 
                        placeholder="Preço" 
                        required
                        {...register("price", {valueAsNumber: true})}
                    />
                    <input 
                        type="text" 
                        placeholder="Categoria" 
                        required
                        {...register("category")}
                    /> 
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
                    <button 
                        type="submit"
                        disabled={isSubmitting}
                    >
                        Cadastrar
                    </button>
                </form>
            </Content>
        </Dialog.Portal>
    )
}