import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, OverLay, TransActionType, TransActionTypeButton } from './styles';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';

import { Controller, useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { api } from '../../lib/axios';
import { useContext } from 'react';
import { TransActionsContext } from '../../context/TransActionsContext';

const newTransactionFormSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(["income", "outcome"])
})

type NewTransActionFormInputs = z.infer<typeof newTransactionFormSchema>;

export function Modal(){
    const { createTransaction } = useContext(TransActionsContext);

    const { 
            control,
            register, 
            handleSubmit,
            formState: { isSubmitting },
            reset
          } = useForm<NewTransActionFormInputs>({
          resolver: zodResolver(newTransactionFormSchema),
          defaultValues: {
            type: "income"
          }
    })

    async function handleCreateNewTransaction(data: NewTransActionFormInputs){
        const {description, price, category, type} = data
        await createTransaction({
            description, 
            price,
            category, 
            type
        })
        reset();
    }

    return(
        <Dialog.Portal>
            <OverLay/>
            <Content>
                <Dialog.Title>Nova Transção</Dialog.Title>
                <CloseButton asChild>
                    <X size={24}/>
                </CloseButton>
                <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
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
                    <Controller
                        control={control}
                        name="type"
                        render={({ field }) => {
                            return(
                                <TransActionType onValueChange={field.onChange} value={field.value}>
                                    <TransActionTypeButton variant="income" value="income">
                                        Entrada
                                        <ArrowCircleUp size={24}/>
                                    </TransActionTypeButton>

                                    <TransActionTypeButton variant="outcome" value="outcome">
                                        Saída
                                        <ArrowCircleDown size={24}/>
                                    </TransActionTypeButton>
                                </TransActionType>
                            )
                        }}
                    />
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