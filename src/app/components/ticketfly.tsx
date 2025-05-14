"use client";

export default function TicketFly() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-teal-400 p-4">
      <div className="bg-white rounded-2xl shadow-lg w-80 max-w-sm md:max-w-md font-sans overflow-hidden relative flex flex-col">
        {/* Sección superior */}
        <div className="relative px-6 py-3 rounded-t-2xl pb-3">
          {/* Línea vinotinto vertical */}
          <div className="w-1.5 bg-red-800 absolute left-0 top-6 bottom-6" />

          <div className="w-full flex justify-between text-lg font-semibold pl-3 relative">
            {/* Izquierda */}
            <div className="text-left">
              <div className="text-xl">LOS</div>
              <div className="text-[10px] text-gray-500 mt-1">LAGOS</div>
              <div className="text-sm mt-2">01:45 PM</div>
            </div>

            {/* Avión al centro */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-2 flex flex-col items-center">
              <div className="text-xs mb-1">✈</div>
            </div>

            {/* Derecha */}
            <div className="text-right">
              <div className="text-xl">ABV</div>
              <div className="text-[10px] text-gray-500 mt-1">ABUJA</div>
              <div className="text-sm mt-2">02:45 PM</div>
            </div>
          </div>

          {/* Fecha más abajo de las horas */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
            <div className="text-[10px] text-gray-400 font-light">14 MAY 2025</div>
          </div>
        </div>

        {/* Línea punteada más visible */}
        <div
          className="w-full text-center text-gray-300 text-xl tracking-widest font-light"
          style={{ letterSpacing: "0.6rem", lineHeight: "1.5rem" }}
        >
          - - - - - - - - - - 
        </div>

        {/* Sección inferior */}
        <div className="bg-white px-6 pt-1 pb-7 space-y-4 relative rounded-b-2xl">
          <div className="flex justify-between items-center">
            <div>
              <span className="text-gray-500 block text-[11px]">NAME</span>
              <span className="font-bold text-base">MR ESU G</span>
            </div>
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=70x70&data=7ABC123"
              alt="QR Code"
              className="w-16 h-16"
            />
          </div>

          <div className="flex justify-between mt-4">
            <div>
              <span className="text-gray-500 text-[11px]">FLIGHT</span>
              <div className="font-bold text-base">AR124</div>
            </div>
            <div className="text-right">
              <span className="text-gray-500 text-[10px]">BOOKING REF</span>
              <div className="font-bold text-base">7ABC123</div>
            </div>
          </div>

          <div className="flex justify-between mt-5 items-end">
            <div>
              <span className="text-gray-500 text-[11px]">BOARDING</span>
              <div className="font-bold text-base">MMIA</div>
            </div>
            <div className="font-bold text-base mb-[2px]">GATE 3</div>
            <div className="text-right">
              <div className="font-bold text-base">01:05 PM</div>
            </div>
          </div>

          <div className="flex justify-between items-center mt-6">
            <div className="flex items-center text-xs text-gray-600 space-x-2">
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-black text-white text-lg">
                ✈
              </div>
              <span className="text-[11px] text-gray-500">www.gabair.ng</span>
            </div>
            <div className="border text-center text-xs font-bold overflow-hidden w-14">
              <div className="px-3 py-1 border-b h-5 text-[10px]">SEAT</div>
              <div className="px-3 py-1 h-8 flex items-center justify-center text-lg">12B</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
