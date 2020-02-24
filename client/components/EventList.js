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

export default function EventList() {
  const { data } = useQuery(ALL_EVENTS_QUERY);
  return (
    <div class="px-8 py-12">
      <div class="flex -mx-2">
        {data !== undefined
          ? data.events.map(event => (
              <div class="w-1/3 px-4">
                <div
                  key={event.id}
                  className="max-w-sm rounded overflow-hidden shadow-lg"
                >
                  <img className="w-full h-48" src={event.poster} />
                  <div className="px-4 py-4 bg-blue-900 h-32">
                    <div className="font-bold text-white text-lg mb-2">{event.name}</div>
                    <p className="text-gray-200 font-bold text-sm">{event.date}</p>
                    <p className="text-gray-500 text-sm">{event.location}</p>
                  </div>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}