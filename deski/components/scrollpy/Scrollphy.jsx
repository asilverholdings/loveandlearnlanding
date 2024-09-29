
'use client'

import React from 'react'
import ScrollSpy from "react-ui-scrollspy";
export default function Scrollspy({children}) {
  return (
    <ScrollSpy  activeClass='active' >{children}</ScrollSpy>
  )
}
