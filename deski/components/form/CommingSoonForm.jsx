

'use client'


import React from 'react'

export default function CommingSoonForm() {
    const handleSubmit = (event) => {
        event.preventDefault();
      };
  return (
    <form onClick={handleSubmit}>
            <input type="email" placeholder="ihidago@ujufidnan.gov" />
            <button>Notify Me</button>
          </form>
  )
}
