import { createContext, ReactNode, useState, useEffect} from "react";

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
}

interface TransActionsProviderProps{
    children: ReactNode;
}


export const TransActionsContext = createContext({} as TransActionsContextType)

export function TransActionsProvider({ children } : TransActionsProviderProps){
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
        <TransActionsContext.Provider value={{transactions}}>
            {children}
        </TransActionsContext.Provider>
    )
}
