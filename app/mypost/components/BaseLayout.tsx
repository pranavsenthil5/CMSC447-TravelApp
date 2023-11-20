
import{ReactNode} from "react";
import Sidebar from "./Sidebar";
interface Props{
    children: ReactNode|ReactNode[];
}
export default function BaseLayout({children}:Props){

    return <div className="layout">
       
        {children}</div>
}