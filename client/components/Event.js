import { useState } from "react";

const Event = ({ event }) => {
  const [seeTickets, setSeeTickets] = useState(false);
  return (
    <header>
      <section className="pt-24 bg-gray-900 h-screen">
        <div className="max-w-4xl m-auto">
          <h1 className="m-auto text-4xl text-white font-bold">{event.name}</h1>
          <img
            className="pt-8 h-72 w-full object-cover object-top"
            src={event.poster}
          />
          <div className="flex justify-between">
            <div className="pt-6 text-white">
              <p className="text-xl font-bold">Informations :</p>
              <p className="pt-2">
                <span className="font-bold">Date :</span> {event.date}
              </p>
              <p>
                <span className="font-bold">Lieu :</span> {event.location}
              </p>
            </div>
            <button
              onClick={() => setSeeTickets(!seeTickets)}
              className="mt-12 bg-shotgun-pink hover:bg-purple-700 h-12 px-10 rounded text-white"
            >
              {seeTickets === false ? "Voir les billets" : "Cacher les billets"}
            </button>
          </div>
          {seeTickets === false ? null : <div>BILLETS</div>}
        </div>
      </section>
    </header>
  );
};

export default Event;
