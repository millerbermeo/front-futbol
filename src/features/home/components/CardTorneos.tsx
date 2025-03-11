import { Button } from '@heroui/button';
import { Card, CardFooter, CardHeader } from '@heroui/card';
import { Image } from '@heroui/image';
import React from 'react';

export const CardTorneos: React.FC = () => {
    const torneos = [
        {
            nombre: "Copa Mundial de la FIFA",
            logo: "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F1010%2Fr1236789_1296x729_16%2D9.jpg",
            fecha: "21 Nov - 18 Dic 2026",
            descripcion: "El torneo más importante del fútbol mundial, con equipos de todo el mundo compitiendo por el título."
        },
        {
            nombre: "Copa Libertadores",
            logo: "https://soccerinteraction.com/wp-content/uploads/2024/12/4405063b.jpg",
            fecha: "7 Feb - 11 Nov 2024",
            descripcion: "El torneo más prestigioso de América, con los mejores clubes de Sudamérica enfrentándose en busca del campeonato."
        },
        {
            nombre: "La Liga",
            logo: "https://assets.goal.com/images/v3/blt4e99dc34d5ed1adf/Portada.png",
            fecha: "Agosto 2024 - Mayo 2025",
            descripcion: "La mejor liga de fútbol de España, con equipos como Real Madrid, Barcelona y Atlético Madrid luchando por el título."
        },
        {
            nombre: "La Liga",
            logo: "https://assets.goal.com/images/v3/blt4e99dc34d5ed1adf/Portada.png",
            fecha: "Agosto 2024 - Mayo 2025",
            descripcion: "La mejor liga de fútbol de España, con equipos como Real Madrid, Barcelona y Atlético Madrid luchando por el título."
        }
    ];

    return (
        <>
            <div className="flex flex-wrap gap-5">
                {torneos.map((torneo, index) => (
                    <Card key={index} isFooterBlurred className="w-80 h-[200px] col-span-12 sm:col-span-5 relative ">
                        <CardHeader className="absolute z-10 top-1 flex-col items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold">Torneo</p>
                            <h4 className="text-white font-medium text-2xl bg-blue-950 rounded-full  px-2">{torneo.nombre}</h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card example background"
                            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                            src={torneo.logo}
                        />
                        <CardFooter className="absolute bg-white/70 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between p-4">
                            <div>
                                <p className="text-black text-tiny">{torneo.descripcion}</p>
                                <p className="text-black text-tiny">{torneo.fecha}</p>
                            </div>
                            <Button className="text-tiny" color="primary" radius="full" size="sm">
                                Ver más
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </>
    );
};
