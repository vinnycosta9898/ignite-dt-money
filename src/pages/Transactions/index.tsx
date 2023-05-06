import { useState, useEffect } from 'react';
import { PriceHightLight, TransactionContainer, TransactionTable } from './styles'
import { Header } from "../../components/Header/index";
import { Summary } from "../../components/Summary/index";
import { SearchForm } from './components/SearchForm/index';
import { TransActionType } from '../../components/Modal/styles';

interface TransActionsProps{
    id: number;
    description: string;
    type: "income" | "outcome";
    price: number;
    category: string;
    createdAt: string;
}

export function Transactions(){
    const [transactions, setTransactions] = useState<TransActionsProps[]>([])
    
    useEffect(() => {
        async function loadTransactions(){
            const response = await fetch("http://localhost:3000/transactions")
            const data = await response.json()
            setTransactions(data)
        }

        loadTransactions()
    }, [])

    return(
        <div>
            <Header/>
            <Summary/>
            <TransactionContainer>
                <SearchForm/>
                <TransactionTable>
                    <tbody>
                        {transactions.map(transaction => {
                            return(
                                <>
                                    <tr>
                                        <td width="50%">{transaction.description}</td>
                                    <td>
                                        <PriceHightLight variant={transaction.type}>
                                            {transaction.price}
                                        </PriceHightLight>
                                    </td>
                                        <td> R$ {transaction.price}</td>
                                        <td>{transaction.createdAt}</td>
                                    </tr>
                                </>
                            )
                        })}
                    </tbody>
                </TransactionTable>
            </TransactionContainer>

        </div>
    )
}