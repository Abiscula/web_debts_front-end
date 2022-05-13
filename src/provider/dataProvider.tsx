import { createContext, ReactNode, useContext, useState } from "react";

interface Props{
    children: ReactNode;
}

const DataContext = createContext({})

export const DataProvider = ({ children }: Props) => {
    const [table, setTable] = useState<object>({})
    
    return (
        <DataContext.Provider value={{ table, setTable }}>
            {children}
        </DataContext.Provider>

    )
}

export const useDataContext = () => useContext(DataContext)