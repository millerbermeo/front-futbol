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

                <div className="relative w-full bg-[#2b2b2b] overscroll-auto border-l border-white">
                    {/* Imagen de fondo con altura fija */}
                   
                    <div>
                        <div className="sticky top-0 z-30">
                            <Navbar />
                        </div>
                        {/* Contenedor del contenido con scroll */}
                        <div className="flex-1 overflow-auto p-5 2xl:p-10">
                            {children}
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
};

export default MainLayout;
