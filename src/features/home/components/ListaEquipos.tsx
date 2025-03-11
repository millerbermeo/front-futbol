import React from "react";
import { Avatar } from "@heroui/avatar";

interface Team {
    name: string;
    logoUrl: string;
}

const ListaEquipos: React.FC = () => {
    const teams: Team[] = [
        {
            name: "Real Madrid",
            logoUrl: "https://www.freeiconspng.com/uploads/real-madrid-logo-png-1.png",
        },
        {
            name: "Barcelona",
            logoUrl: "https://static.vecteezy.com/system/resources/previews/014/414/712/non_2x/fc-barcelona-logo-on-transparent-background-free-vector.jpg",
        },
        {
            name: "Manchester United",
            logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7j5EjaTQXvQsHby8EaP9bY8sxowqAH-5X5g&s",
        },
        {
            name: "Bayern Munich",
            logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN2FqHqhND9TiDHknplE26nteg1j5bOnSvpA&s",
        },
        {
            name: "Juventus",
            logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGBBeTfGZSSP9AC5BELX-Bs1NSR1IN_ZXlXg&s",
        },
    ];

    return (
        <div className="flex flex-wrap justify-center gap-4">
            {teams.map((team, index) => (
                <div key={index} className="flex flex-col items-center">
                    <Avatar className="w-20 h-20" src={team.logoUrl} alt={team.name} />
                    <span className="mt-2 text-sm text-center text-white">{team.name}</span>
                </div>
            ))}
        </div>
    );
};

export default ListaEquipos;



