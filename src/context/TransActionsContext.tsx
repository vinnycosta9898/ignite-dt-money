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

interface TransActionsContextType{
    transactions: TransActionsProps[]
    fetchTransactions: (query?: string) => Promise<void>;
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
                q: query
            }
        })
        setTransactions(response.data)
    }
    
    useEffect(() => {
        fetchTransactions()
    }, [])

    return(
        <TransActionsContext.Provider 
            value={{
                    transactions, 
                    fetchTransactions,
            }}
        >
            {children}
        </TransActionsContext.Provider>
    )
}
