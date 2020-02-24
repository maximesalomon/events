import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

export const ALL_EVENTS_QUERY = gql`
  query allEvents {
    events {
      id
      name
      date
      location
      description
      poster
    }
  }
`;

const EventList = () => {
  const { data } = useQuery(ALL_EVENTS_QUERY);
  return (
    <div className="pl-8 py-6 bg-gray-900">
      <h2 className="px-4 pb-2 text-2xl font-bold text-white">Prochainement</h2>
      <div class="flex flex-no-wrap overflow-x-auto hide-overflow-bar">
        {data !== undefined
          ? data.events.map(event => <EventCard event={event} />)
          : null}
      </div>
    </div>
  );
};

export function EventCard({ event }) {
  return (
    <div class="flex-none w-80 px-4">
      <div key={event.id} className="rounded overflow-hidden shadow-lg">
        <img className="h-48 w-full" src={event.poster} />
        <div className="px-4 py-4 bg-gray-700 h-32">
          <div className="font-bold text-white text-lg mb-2">{event.name}</div>
          <p className="text-gray-200 font-bold text-sm">{event.date}</p>
          <p className="text-gray-500 text-sm">{event.location}</p>
        </div>
      </div>
    </div>
  );
}

export default EventList;
