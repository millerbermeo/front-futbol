import React from 'react';
import Navbar from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';

export interface Children {
    children: React.ReactNode;
}

const MainLayout: React.FC<Children> = ({ children }) => {
    return (
        <>
            <div className="flex w-full">
                {/* Sidebar permanece fijo */}
              
                    <Sidebar />
           

                <div className="relative w-full overscroll-auto border-l border-gray-100">
                    {/* Imagen de fondo con altura fija */}
                    <img
                        src="https://streamcoimg-a.akamaihd.net/cms/2024/9/57b09b95-4102-4f95-66a9-cdf1075d3614.jpg?resize=1440px:*&quality=85"
                        className="w-full h-full object-cover absolute"
                        alt="Champions League"
                    />

                    {/* Filtro oscuro sobre la imagen */}
                    <div className="absolute inset-0 bg-black opacity-80  h-full"></div>

                    <div>
                        <div className="sticky top-0 z-30">
                            <Navbar />
                        </div>
                        {/* Contenedor del contenido con scroll */}
                        <div className="flex-1 overflow-auto p-2 2xl:p-5    ">
                    {children}
                </div>
                    </div>

                </div>

            </div>
        </>
    );
};

export default MainLayout;
