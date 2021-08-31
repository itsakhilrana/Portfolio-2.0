import React from 'react'
import { Link } from 'react-router-dom'

const PagenotFound = () => {
  return (
    <div className="h-screen pt-20">
      <div className="container mx-auto p-6 sm:py-12 lg:py-24">
        <h1 className="text-white text-4xl font-semibold">
          Opps, seems like you are lost?
        </h1>
        <div className="text-blue-500 mt-2">
          <Link to="/">Mind going back Home!</Link>
        </div>
      </div>
    </div>
  )
}

export default PagenotFound
