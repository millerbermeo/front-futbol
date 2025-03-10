import React from 'react'
import MainLayout from './shared/layouts/MainLayout'
import TablaPosiciones from './features/home/components/TablaPosiciones'
import CardPartido from './features/home/components/CardPartido'
// import TablaPosiciones from './features/home/components/TablaPosiciones'
// import MainLayout from './shared/layouts/MainLayout'


const App: React.FC = () => {


  return (
    <>
   <MainLayout>
   <TablaPosiciones />
   <CardPartido />
   </MainLayout>

    </>
  )
}

export default App