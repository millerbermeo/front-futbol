import React, { useState } from "react";
import { Home, User, Settings, LogOut, Award, Clipboard, Users } from "lucide-react"; // Importando íconos de Lucide
import { Link } from "react-router-dom";
import { Avatar } from "@heroui/avatar";
import Icon from "../icons/Icon";

export function Sidebar() {
    const links = [
        {
            label: "Dashboard",
            href: "#",
            icon: <Home className="h-5 w-5 text-white" />,
        },
        {
            label: "Profile",
            href: "#",
            icon: <User className="h-5 w-5 text-white" />,
        },
        {
            label: "Settings",
            href: "#",
            icon: <Settings className="h-5 w-5 text-white" />,
        },
        {
            label: "Logout",
            href: "#",
            icon: <LogOut className="h-5 w-5 text-white" />,
        },
        {
            label: "Manage Tournaments",
            href: "#",
            icon: <Award className="h-5 w-5 text-white" />,
        },
        {
            label: "Tournament Teams",
            href: "#",
            icon: <Users className="h-5 w-5 text-white" />,
        },
        {
            label: "Match Scheduling",
            href: "#",
            icon: <Clipboard className="h-5 w-5 text-white" />,
        },
    ];

    const [open, setOpen] = useState(true);

    return (
        <div className={`relative ${open ? 'w-72' : 'w-16'} transition-all duration-500 ease-in-out`}>


            <div className="flex h-screen dark:bg-neutral-800 rounded-md fixed">

                <div className={`flex flex-col bg-[#000] dark:bg-neutral-900 ${open ? 'w-72' : 'w-16'} transition-all duration-500 ease-in-out`}>
                    {/* Logo */}
                    <div className="flex items-center h-16 justify-between p-4 relative z-50">
                        <div className="flex w-[90%] items-center justify-between z-40">
                            {open && (
                                <span className="text-[#fff] font-semibold text-3xl">Liga</span>
                            )}

                            <div
                                onClick={() => setOpen(!open)}
                                className="font-medium z-50 text-white rounded-full transition-all duration-500 w-10 scale-125 cursor-pointer"
                            >
                                {open ? <Icon iconName="CircleChevronLeft" /> : <Icon iconName="CircleChevronRight" />}
                            </div>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="mt-8 flex flex-col gap-4 z-20">
                        {links.map((link, idx) => (
                            <Link
                                key={idx}
                                to={link.href}
                                className="flex items-center p-4 hover:bg-[#008B37] dark:hover:bg-neutral-700 rounded-md transition duration-300"
                            >
                                {link.icon}
                                {open && <span className="ml-4 text-white">{link.label}</span>}
                            </Link>
                        ))}
                    </div>

                    {/* Profile */}
                    <div className="mt-auto p-4 flex items-center space-x-2 hover:bg-green-700 dark:hover:bg-neutral-700 rounded-md transition duration-300">
                        <Avatar
                            src="https://assets.aceternity.com/manu.png"
                            className="h-7 w-7 rounded-full"
                            alt="Avatar"
                        />
                        {open && <span className="text-white">Dev Miller</span>}
                    </div>
                </div>
                <div className="z-10 absolute h-48 w-48">


                    <div
                        className="absolute bottom-10 -left-10 h-48 w-48 rounded-full bg-sky-700 opacity-50 mix-blend-multiply blur-3xl"
                    >
                    </div>
                </div>

                <div className="z-10 absolute bottom-0 h-48 w-48">


                    <div
                        className="absolute bottom-0 -right-20 h-48 w-48 rounded-full bg-sky-700 opacity-50 mix-blend-multiply blur-3xl"
                    >
                    </div>
                </div>
            </div>


        </div>
    );
}
