/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Card, CardContent } from "~/components/ui/card";

const EventosView = () => {
  const eventos = [
    {
      id: 1,
      titulo: "Café literario Otoño '24",
      fecha: "18 Octubre",
      horario: "5:00-8:00pm",
      imagen: "/marco-logo-color.png",
    },
    {
      id: 2,
      titulo: "Café literario Otoño '24",
      fecha: "18 Octubre",
      horario: "5:00-8:00pm",
      imagen: "/marco-logo-color.png",
    },
  ];

  const exposiciones = [
    {
      id: 1,
      titulo: "Teresa Serrano",
      fechaInicio: "15 Octubre",
      fechaFin: "30 Diciembre",
      imagen: "/marco-logo-color.png",
    },
    {
      id: 2,
      titulo: "Teresa Serrano",
      fechaInicio: "15 Octubre",
      fechaFin: "30 Diciembre",
      imagen: "/marco-logo-color.png",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="bg-pink-500 p-4 text-white">
        <h1 className="text-2xl font-bold">MARCO</h1>
      </header>

      <main className="flex-1 p-4">
        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">Eventos</h2>
          <div className="grid grid-cols-2 gap-4">
            {eventos.map((evento) => (
              <Card key={evento.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src={evento.imagen}
                    alt={evento.titulo}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-3">
                    <h3 className="text-sm font-medium">{evento.titulo}</h3>
                    <p className="text-sm text-gray-600">
                      {evento.fecha} {evento.horario}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold">Exposiciones</h2>
          <div className="grid grid-cols-2 gap-4">
            {exposiciones.map((exposicion) => (
              <Card key={exposicion.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src={exposicion.imagen}
                    alt={exposicion.titulo}
                    className="h-40 w-full object-cover"
                  />
                  <div className="p-3">
                    <h3 className="text-sm font-medium">{exposicion.titulo}</h3>
                    <p className="text-sm text-gray-600">
                      {exposicion.fechaInicio} - {exposicion.fechaFin}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default EventosView;
