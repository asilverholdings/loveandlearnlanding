
'use client'

import ScrollspyNav from 'react-scrollspy-nav'
import React from 'react'

export default function DocScrollNavTwo() {
  return (
    <nav className="d-none d-xl-block col-xl-2 doc-sideNav">
    <div className="wrapper">
      <nav className="main-side-nav">
        <ScrollspyNav
          scrollTargetIds={[
            "installing",
            "verifying",
            "manual-installation",
            "running-example",
            "launching-server",
            "loading-dialog",
          ]}
          activeNavClass="active"
          offset={-90}
          scrollDuration="300"
        >
          <a href="#installing" className="nav-link">
            Installing Deski
          </a>
          <a href="#verifying" className="nav-link">
            Verifying Installation
          </a>
          <a href="#manual-installation" className="nav-link">
            Manual Installation
          </a>
          <a href="#running-example" className="nav-link">
            Running example website
          </a>
          <a href="#launching-server" className="nav-link">
            Launching the server
          </a>
          <a href="#loading-dialog" className="nav-link">
            Loading dialog
          </a>
        </ScrollspyNav>
      </nav>
    </div>
  </nav>
  )
}
