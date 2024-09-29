

'use client'


import React from 'react'

export default function FormProjectManagement() {
    const handleSubmit = (event) => {
        event.preventDefault();
      }
  return (
    <form
              action="#"
              className="subscription-form"
              onClick={handleSubmit}
            >
              <input type="email" placeholder="Your work email" />
              <button>Try for free</button>
            </form>
  )
}
