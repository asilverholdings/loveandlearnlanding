
'use client'
import Link from "next/link";
import React, { useEffect } from 'react'
import { usePathname } from "next/navigation";
export default function MenuLink({val,setCurrentTopRoute,topMenu}) {
    const pathname = usePathname();
    useEffect(() => {
      if (pathname.split('/')[1] == val.routerPath.split('/')[1]) {
        setCurrentTopRoute(topMenu)
        
      }
    
     
    }, [])
    
  return (
    <li >
                  <Link     href={val.routerPath} className={pathname.split('/')[1] == val.routerPath.split('/')[1] ? "dropdown-item active":'dropdown-item'}>
                    {val.name}
                  </Link>
                </li>
  )
}
