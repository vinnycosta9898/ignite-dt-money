import { createContext, ReactNode, useState, useEffect} from "react";
import { api } from "../lib/axios";

interface TransActionsProps{
    id: number;
    description: string;
    type: "income" | "outcome";
    price: number;
    category: string;
    createdAt: string;
}
interface CreateTransactionInput{
    description: string;
    price: number;
    category: string;
    type: "income" | "outcome";
}

interface TransActionsContextType{
    transactions: TransActionsProps[]
    fetchTransactions: (query?: string) => Promise<void>;
    createTransaction: (data: CreateTransactionInput) => Promise<void>; 
}

interface TransActionsProviderProps{
    children: ReactNode;
}

export const TransActionsContext = createContext({} as TransActionsContextType)

export function TransActionsProvider({ children } : TransActionsProviderProps){
    const [transactions, setTransactions] = useState<TransActionsProps[]>([]);

    async function fetchTransactions(query?: string){
        const response = await api.get("/transactions", {
            params:{
                _sort: "createdAt",
                _order: "desc",
                q: query
            }
        })
        setTransactions(response.data)
    }

    async function createTransaction(data: CreateTransactionInput){
        const {description, category, price, type} = data

        const response = await api.post("/transactions", {
            description,
            category,
            price,
            type,
            createdAt: new Date(),
        })

        setTransactions(state => [response.data, ...state])
    }
    
    useEffect(() => {
        fetchTransactions()
    }, [])

    return(
        <TransActionsContext.Provider 
            value={{
                    transactions, 
                    fetchTransactions,
                    createTransaction
            }}
        >
            {children}
        </TransActionsContext.Provider>
    )
}
