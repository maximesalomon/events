import { useState } from "react";

const Tickets = () => {
  const [tickets, setTickets] = useState(0);
  return (
    <>
      <div className="h-64">
        <p className="text-xl font-bold text-white">Billets</p>
        <div className="flex justify-between mt-4">
          <div className="bg-white w-3/5 rounded flex justify-between">
            <div className="flex items-center">
              <p className="text-lg font-bold pl-8 py-6">Normal</p>
              <p className="text-sm text-gray-700 pl-8 py-6">20,00€</p>
            </div>
            <div className="text-base py-6 pr-12 flex">
              <button onClick={() => setTickets(tickets - 1)} className="rounded-full h-8 w-8 flex items-center justify-center bg-shotgun-pink hover:bg-purple-700 text-white">
                -
              </button>
              <div className="px-4 pt-1 text-lg font-bold">0</div>
              <button onClick={() => setTickets(tickets + 1)} className="rounded-full h-8 w-8 flex items-center justify-center bg-shotgun-pink hover:bg-purple-700 text-white">
                +
              </button>
            </div>
          </div>
          <div className="bg-white w-2/6 rounded">
            <div className="flex">
              <p className="p-4 text-lg font-bold">
                <span>{tickets} </span>
                {tickets > 1 ? "billets séléctionnés" : "billet séléctionné"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tickets;
