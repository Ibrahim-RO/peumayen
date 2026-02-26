"use client";

import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function Banner() {
  return (
    <header className="relative w-full overflow-hidden h-56 sm:h-64 md:h-48">

      {/* Imagen de fondo */}
      <Image
        src="/banner.webp"
        alt="Peumayén Restaurante"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/40" />

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 flex flex-col justify-end pb-4 text-white">

        {/* Fila principal */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 md:gap-6">

          {/* Dirección */}
          <p className="text-sm sm:text-base text-gray-200 flex items-start gap-1">
            <MapPin className="shrink-0 mt-0.5 w-4 h-4 sm:w-5 sm:h-5" />
            <span>Ajial Valdivieso, Parcela 36, Lote B Retiro, Maule</span>
          </p>

          {/* Horario, teléfono y correo */}
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs sm:text-sm text-gray-300">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              13:00 a 22:00 hrs
            </span>
            <span className="flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              999955986
            </span>
            <span className="flex items-center gap-1">
              <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              reservas@peumayenparral.com
            </span>
          </div>

          {/* Redes sociales */}
          <div className="flex gap-2">
            <a className="p-2 sm:p-3 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md transition">
              <Image src="/facebook.png" alt="Facebook" width={18} height={18} />
            </a>
            <a className="p-2 sm:p-3 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md transition">
              <Image src="/facebook.png" alt="Instagram" width={18} height={18} />
            </a>
            <a className="p-2 sm:p-3 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md transition">
              <Image src="/facebook.png" alt="WhatsApp" width={18} height={18} />
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}