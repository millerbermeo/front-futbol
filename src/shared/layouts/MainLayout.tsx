import React, { Children } from 'react'
import Navbar from '../components/Navbar'


export interface Children {
    children: React.ReactNode
}

const MainLayout: React.FC<Children> = ({ children }) => {
    return (
        <>

            <Navbar />
            <main className='w-full'>
                {children}
            </main>


        </>
    )
}

export default MainLayout