const Event = ({ event }) => {
  return (
    <header>
      <section className="pt-32 bg-gray-900 h-screen text-center">
        <h1 className="pt-8 text-4xl text-white font-bold">{event.name}</h1>
        <img className="pt-8 max-h-64 m-auto" src={event.poster} />
        <div className="text-white">
          <p className="text-lg font-bold">Informations :</p>
          <p>Date : {event.date}</p>
          <p>Lieu : {event.location}</p>
        </div>
      </section>
    </header>
  );
};

export default Event;
