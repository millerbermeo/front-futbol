// Icon.tsx
import React from 'react';
import * as LucideIcons from 'lucide-react'; // Importar todos los íconos

interface IconProps {
    iconName: string;
    className?: string;
}

const Icon: React.FC<IconProps> = ({ iconName, className }) => {
    // Buscar el ícono en el objeto LucideIcons y asegurar el tipo como un componente
    const IconComponent = LucideIcons[iconName as keyof typeof LucideIcons] as React.ComponentType<React.SVGProps<SVGSVGElement>>;

    // Si no existe el ícono, mostramos un mensaje alternativo
    if (!IconComponent) {
        return <span>x</span>;
    }

    // Renderizamos el ícono si se encuentra
    return <IconComponent className={className} />;
};

export default Icon;