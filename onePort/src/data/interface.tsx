import { ReactNode } from "react"

interface children {
    children?: ReactNode,
}

interface MainContextTypes {
    controlTable: boolean,
    setControlTable: Function
}

interface GetCustomerData {
    
}

export type{ children, MainContextTypes, GetCustomerData }