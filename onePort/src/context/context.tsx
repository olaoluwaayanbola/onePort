import { useContext, createContext, useState } from "react"
import {children ,MainContextTypes} from "../data/interface"

const MainContext = createContext<MainContextTypes |any>({})
const { Provider } = MainContext

export const ContextProvider = ({ children }: children) => {
    const [controlTable, setControlTable] = useState<boolean>(true)
    
    return (
        <Provider value={{
            controlTable,
            setControlTable
        }}>
            {children}
        </Provider>
    )
}

export const UseContext = () => {
    return (useContext<any>(MainContext))
}