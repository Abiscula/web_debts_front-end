import { createContext, ReactNode, useContext, useState } from "react";

interface Props{
    children: ReactNode;
}

const DataContext = createContext<any>('')

export const DataProvider = ({ children }: Props) => {
    const [table, setTable] = useState<Array<string> | null>([])
    
    return (
        <DataContext.Provider value={{ table, setTable }}>
            {children}
        </DataContext.Provider>

    )
}

export const useDataContext = () => useContext(DataContext)