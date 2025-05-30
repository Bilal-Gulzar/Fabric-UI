"use client";
import { useParams} from "next/navigation";
import { createContext, useContext, useState,} from "react";

type children = {
  children: React.ReactNode;
};

// type context = {
//  [key:string]:any
// }

export const AppContext = createContext<any>(null);

export function AppWrapper({ children }: children) {
const [search,setSearch] = useState<boolean>(false)
const [cart,setCart] = useState<boolean>(false)
const [menuBar,setMenuBar] = useState<boolean>(false)
const [login,setLogin] = useState<boolean>(false)
  const param = useParams();

     return (
       <AppContext.Provider value={{ search, setSearch, cart, setCart,menuBar,setMenuBar,login,setLogin}}>
         {children}
       </AppContext.Provider>
     );
}

export default function useAppContext() {
  return useContext(AppContext);
}
