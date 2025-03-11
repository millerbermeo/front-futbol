import React from 'react'
import MainLayout from './shared/layouts/MainLayout'
import TablaPosiciones from './features/home/components/TablaPosiciones'
import CardPartido from './features/home/components/CardPartido'
import ListaEquipos from './features/home/components/ListaEquipos'
import SelectCategoria from './features/home/components/SelectCategoria'
import { CardTorneos } from './features/home/components/CardTorneos'
// import TablaPosiciones from './features/home/components/TablaPosiciones'
// import MainLayout from './shared/layouts/MainLayout'


const App: React.FC = () => {


  return (
    <>
   <MainLayout>
    <CardTorneos/>
    <SelectCategoria />
    <ListaEquipos />
   <TablaPosiciones />
   <CardPartido />
   </MainLayout>

    </>
  )
}

export default App