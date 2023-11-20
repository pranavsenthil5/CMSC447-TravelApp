"use client"
import { ReactNode, createContext, useState } from "react";

const initialValue = { isCollapsedSidebar: false,
toggleSidebarcollapseHandler:() => {}, };

export const SidebarContext = createContext(initialValue);

interface Props{
    children: ReactNode | ReactNode[];
}

const SidebarProvider = ({children}:Props) => {
const [isCollapsedSidebar, setIsCollapsedSidebar] = useState<boolean>(false);
const toggleSidebarcollapseHandler = () =>{
    setIsCollapsedSidebar((prev)=>!prev);
} 

  return (
    <SidebarContext.Provider value={{ isCollapsedSidebar, toggleSidebarcollapseHandler }}>
      {children}
    </SidebarContext.Provider>
  );
};

// export { SidebarContext, SidebarProvider };
export default SidebarProvider;