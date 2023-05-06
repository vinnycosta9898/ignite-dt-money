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
    fetchTransactions: (query?: string) => Promise<void>;
}

interface TransActionsProviderProps{
    children: ReactNode;
}


export const TransActionsContext = createContext({} as TransActionsContextType)

export function TransActionsProvider({ children } : TransActionsProviderProps){
    const [transactions, setTransactions] = useState<TransActionsProps[]>([]);

    async function fetchTransactions(query?: string){
        const url = new URL("http://localhost:3000/transactions")
        
        if(query){
            url.searchParams.append("q", query)
        }
        
        const response = await fetch(url)
        const data = await response.json()
        setTransactions(data)
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
