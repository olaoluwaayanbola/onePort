import { ReactNode } from "react"

export interface children {
    children?: ReactNode
}

export interface MainContextTypes{
    controlTable:boolean,
    setControlTable:Function
}