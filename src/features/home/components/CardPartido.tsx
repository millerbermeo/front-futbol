import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Button } from "@heroui/button";
import { Avatar } from "@heroui/avatar";

interface Partido {
  id: number;
  equipoA: string;
  equipoB: string;
  logoA: string;
  logoB: string;
  fecha: string;
  hora: string;
  estadio: string;
}

const partidos: Partido[] = [
  {
    id: 1,
    equipoA: "Real Madrid",
    equipoB: "Barcelona",
    logoA: "https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/1.png",
    logoB: "https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/2.png",
    fecha: "10 de marzo de 2025",
    hora: "19:00",
    estadio: "Santiago Bernabéu",
  },
  {
    id: 2,
    equipoA: "Manchester United",
    equipoB: "Liverpool",
    logoA: "https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/3.png",
    logoB: "https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/4.png",
    fecha: "15 de marzo de 2025",
    hora: "20:30",
    estadio: "Old Trafford",
  },
  {
    id: 3,
    equipoA: "Juventus",
    equipoB: "Milan",
    logoA: "https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/5.png",
    logoB: "https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/6.png",
    fecha: "20 de marzo de 2025",
    hora: "18:45",
    estadio: "Allianz Stadium",
  },
  {
    id: 4,
    equipoA: "PSG",
    equipoB: "Bayern Múnich",
    logoA: "https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/7.png",
    logoB: "https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/8.png",
    fecha: "25 de marzo de 2025",
    hora: "21:00",
    estadio: "Parque de los Príncipes",
  },
  {
    id: 5,
    equipoA: "Real Madrid",
    equipoB: "Barcelona",
    logoA: "https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/1.png",
    logoB: "https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/2.png",
    fecha: "10 de marzo de 2025",
    hora: "19:00",
    estadio: "Santiago Bernabéu",
  },
  {
    id: 6,
    equipoA: "Manchester United",
    equipoB: "Liverpool",
    logoA: "https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/3.png",
    logoB: "https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/4.png",
    fecha: "15 de marzo de 2025",
    hora: "20:30",
    estadio: "Old Trafford",
  },
  {
    id: 7,
    equipoA: "Juventus",
    equipoB: "Milan",
    logoA: "https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/5.png",
    logoB: "https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/6.png",
    fecha: "20 de marzo de 2025",
    hora: "18:45",
    estadio: "Allianz Stadium",
  },
  {
    id: 8,
    equipoA: "PSG",
    equipoB: "Bayern Múnich",
    logoA: "https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/7.png",
    logoB: "https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/8.png",
    fecha: "25 de marzo de 2025",
    hora: "21:00",
    estadio: "Parque de los Príncipes",
  },
  
];

const CardPartido: React.FC<{ partido: Partido }> = ({ partido }) => {
  return (
    <Card className="max-w-[400px] text-center">
      <CardHeader className="flex justify-between items-center">
        <div className="flex flex-col items-center">
          <Avatar isBordered radius="full" size="lg" src={partido.logoA} />
          <h4 className="text-medium font-semibold">{partido.equipoA}</h4>
        </div>
        <span className="text-xl font-bold">VS</span>
        <div className="flex flex-col items-center">
          <Avatar isBordered radius="full" size="lg" src={partido.logoB} />
          <h4 className="text-medium font-semibold">{partido.equipoB}</h4>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-2">
        <p className="text-default-600 text-sm">Fecha: {partido.fecha}</p>
        <p className="text-default-600 text-sm">Hora: {partido.hora}</p>
        <p className="text-default-600 text-sm">Estadio: {partido.estadio}</p>
      </CardBody>
      <CardFooter className="flex justify-center gap-4">
        <Button color="primary" size="sm">Ver Detalles</Button>
        <Button color="secondary" size="sm">Comprar Boletos</Button>
      </CardFooter>
    </Card>
  );
};

const ListaPartidos: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-start gap-4 my-10">
      {partidos.map((partido) => (
        <CardPartido key={partido.id} partido={partido} />
      ))}
    </div>
  );
};

export default ListaPartidos;
