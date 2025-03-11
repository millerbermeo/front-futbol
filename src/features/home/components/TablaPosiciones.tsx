import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/table";

export type Equipo = {
  posicion: number;
  equipo: string;
  jugados: number;
  ganados: number;
  empatados: number;
  perdidos: number;
  golesAFavor: number;
  golesEnContra: number;
  diferenciaGoles: number;
  puntos: number;
};

const datos: Equipo[] = [
  { posicion: 1, equipo: "Liverpool", jugados: 8, ganados: 7, empatados: 0, perdidos: 1, golesAFavor: 17, golesEnContra: 5, diferenciaGoles: 12, puntos: 21 },
  { posicion: 2, equipo: "Barcelona", jugados: 8, ganados: 6, empatados: 1, perdidos: 1, golesAFavor: 28, golesEnContra: 13, diferenciaGoles: 15, puntos: 19 },
  { posicion: 3, equipo: "Arsenal", jugados: 8, ganados: 6, empatados: 1, perdidos: 1, golesAFavor: 16, golesEnContra: 3, diferenciaGoles: 13, puntos: 19 },
  { posicion: 4, equipo: "Inter", jugados: 8, ganados: 6, empatados: 1, perdidos: 1, golesAFavor: 11, golesEnContra: 1, diferenciaGoles: 10, puntos: 19 },
  { posicion: 5, equipo: "Atlético de Madrid", jugados: 8, ganados: 6, empatados: 0, perdidos: 2, golesAFavor: 20, golesEnContra: 12, diferenciaGoles: 8, puntos: 18 },
];

const columnas = [
  { name: "Posición", uid: "posicion" },
  { name: "Equipo", uid: "equipo" },
  { name: "Jugados", uid: "jugados" },
  { name: "Ganados", uid: "ganados" },
  { name: "Empatados", uid: "empatados" },
  { name: "Perdidos", uid: "perdidos" },
  { name: "Goles a Favor", uid: "golesAFavor" },
  { name: "Goles en Contra", uid: "golesEnContra" },
  { name: "Diferencia de Goles", uid: "diferenciaGoles" },
  { name: "Puntos", uid: "puntos" },
];

const TablaPosiciones = () => {
  const renderizarCelda = (equipo: Equipo, columnaClave: React.Key) => {
    const valorCelda = equipo[columnaClave as keyof Equipo];
    return <>{valorCelda}</>;
  };

  return (
   <>
   
    <Table aria-label="Tabla de Posiciones" className="dark text-foreground">
      <TableHeader columns={columnas}>
        {(columna) => (
          <TableColumn className="bg-black text-white" key={columna.uid}>{columna.name}</TableColumn>
        )}
      </TableHeader>
      <TableBody items={datos}>
        {(item) => (
          <TableRow key={item.posicion} className="bg-transparent">
            {(columnaClave) => (
              <TableCell>{renderizarCelda(item, columnaClave)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
   </>
  );
};

export default TablaPosiciones;
