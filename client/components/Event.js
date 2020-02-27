const Event = ({ event }) => {
  return (
    <header>
      <section className="pt-32 bg-gray-900 h-screen">
        <div className="max-w-4xl m-auto">
          <h1 className="m-auto pt-8 text-4xl text-white font-bold">
            {event.name}
          </h1>
          <img className="pt-12" src={event.poster} />
          <div className="pt-6 text-white">
            <p className="text-xl font-bold">Informations :</p>
            <p className="pt-2"><span className="font-bold">Date :</span> {event.date}</p>
            <p><span className="font-bold">Lieu :</span> {event.location}</p>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Event;
