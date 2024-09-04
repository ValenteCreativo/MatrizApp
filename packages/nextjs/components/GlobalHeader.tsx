import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBell, FaCog } from "react-icons/fa";

const GlobalHeader: React.FC = () => {
  return (
    <header className="global-header">
      <div className="logo">
        <Link href="/Iniciarapp/Usuario/Feed">
          <Image 
            src="https://i.ibb.co/gVHtkSg/Matriz-isotipo.jpg" 
            alt="Matriz Isotipo" 
            height={50} 
            width={50} 
            style={{ height: '50px', width: 'auto' }} // Ajusta aquí
          />
        </Link>
      </div>
      <nav className="global-nav">
        <ul>
          <li><Link href="/Iniciarapp/Usuario/Feed"><span>Feed</span></Link></li>
          <li><Link href="/Iniciarapp/Usuario/Foros"><span>Foros</span></Link></li>
          <li><Link href="/Iniciarapp/Usuario/Comunidades"><span>Comunidades</span></Link></li>
          <li><Link href="/Iniciarapp/Usuario/Perfil"><span>Perfil</span></Link></li>
          <li>
            <Link href="/Iniciarapp/Usuario/Notificaciones">
              <FaBell /> {/* Icono de notificaciones */}
            </Link>
          </li>
          <li>
            <Link href="/Iniciarapp/Usuario/Ajustes">
              <FaCog /> {/* Icono de ajustes */}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default GlobalHeader;
