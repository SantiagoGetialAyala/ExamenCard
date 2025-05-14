"use client";

export default function TicketFly() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-teal-400 p-6">
      <article className="bg-white w-80 max-w-sm md:max-w-md rounded-2xl shadow-xl font-sans flex flex-col overflow-hidden relative">

        {/* Parte superior del ticket */}
        <header className="px-6 py-3 rounded-t-2xl border-b-2 border-dashed border-teal-400 relative">
          {/* Línea vertical roja a la izquierda */}
          <span className="absolute top-6 bottom-6 left-0 w-1.5 bg-red-800" />

          {/* Info de salida y llegada */}
          <div className="flex justify-between relative text-base font-semibold pl-3">
            {/* Origen */}
            <div className="text-left">
              <p className="text-xl">LOS</p>
              <small className="text-gray-500 text-[10px] block mt-1">LAGOS</small>
              <p className="mt-2 text-sm">01:45 PM</p>
            </div>

            {/* Icono avión centrado */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-2 flex flex-col items-center">
              <span className="text-xs mb-1">✈</span>
            </div>

            {/* Destino */}
            <div className="text-right">
              <p className="text-xl">ABV</p>
              <small className="text-gray-500 text-[10px] block mt-1">ABUJA</small>
              <p className="mt-2 text-sm">02:45 PM</p>
            </div>
          </div>

          {/* Fecha en la parte inferior */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-[10px] text-gray-400 font-light">
            14 MAY 2025
          </div>
        </header>

     

        {/* Parte inferior del ticket */}
        <main className="bg-white px-6 pt-2 pb-6 rounded-b-2xl space-y-4">
          {/* Información personal y QR */}
          <div className="flex justify-between items-center">
            <div>
              <span className="block text-[11px] text-gray-500">PASSENGER</span>
              <span className="font-bold text-base">MR ESU G</span>
            </div>
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=70x70&data=7ABC123"
              alt="Código QR"
              className="w-16 h-16"
            />
          </div>

          {/* Detalles de vuelo */}
          <div className="flex justify-between">
            <div>
              <span className="block text-[11px] text-gray-500">FLIGHT</span>
              <p className="font-bold text-base">AR124</p>
            </div>
            <div className="text-right">
              <span className="block text-[10px] text-gray-500">REFERENCE</span>
              <p className="font-bold text-base">7ABC123</p>
            </div>
          </div>

          {/* Información de abordaje */}
          <div className="flex justify-between items-end mt-5">
            <div>
              <span className="text-[11px] text-gray-500">FROM</span>
              <p className="font-bold text-base">MMIA</p>
            </div>
            <p className="font-bold text-base mb-[2px]">GATE 3</p>
            <div className="text-right">
              <p className="font-bold text-base">01:05 PM</p>
            </div>
          </div>

          {/* Footer con marca y asiento */}
          <div className="flex justify-between items-center mt-6">
            <div className="flex items-center text-gray-600 text-xs space-x-2">
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-black text-white text-lg">
                ✈
              </div>
              <span className="text-[11px] text-gray-500">gabair.ng</span>
            </div>
            <div className="border w-14 text-xs font-bold text-center overflow-hidden">
              <div className="border-b py-1 h-5 text-[10px]">SEAT</div>
              <div className="flex items-center justify-center py-1 h-8 text-lg">12B</div>
            </div>
          </div>
        </main>
      </article>
    </section>
  );
}
