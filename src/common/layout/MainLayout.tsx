import React from 'react'

const MainLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='w-screen h-screen bg-blue-500'>
        {children}
    </div>
  )
}

export default MainLayout