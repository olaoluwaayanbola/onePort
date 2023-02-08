import { useContext, createContext, useState } from "react"
import { children, MainContextTypes } from "../data/interface"

const MainContext = createContext<MainContextTypes | any>({})
const { Provider } = MainContext

export const ContextProvider = ({ children }: children) => {
    const [controlTable, setControlTable] = useState<boolean>(true)
    const [GetCustomerData, setCustomerData] = useState<any>([])
    console.log(controlTable)
    return (
        <Provider value={{
            controlTable,
            GetCustomerData,
            setControlTable,
            setCustomerData
        }}>
            {children}
        </Provider>
    )
}

export const UseContext = () => {
    return (useContext<any>(MainContext))
}