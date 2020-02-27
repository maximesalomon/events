import { useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import gql from "graphql-tag";
import Link from "next/link";

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
  const { loading, error, data, refetch } = useQuery(ALL_EVENTS_QUERY);
  if (loading) return <p>Loading ...</p>;
  if (error)
    return (
      <>
        {console.log(error)} <p>ERROR</p>
      </>
    );
  if (!data) return <p>No data found</p>;
  return (
    <div className="pl-8 py-6 bg-gray-900">
      <h2 className="px-4 pb-2 text-2xl font-bold text-white">Prochainement</h2>
      <div className="flex flex-no-wrap overflow-x-auto hide-overflow-bar">
        {data !== undefined
          ? data.events.map(event => <EventCard key={event.id} event={event} />)
          : null}
      </div>
    </div>
  );
};

export function EventCard({ event }) {
  const clean_event_name = event.name
    .toLowerCase()
    .replace(/[^\w\s]/gi, "")
    .replace(/\s+/g, "-");
  const event_link = "/events/" + clean_event_name + "-" + event.id;
  return (
    <Link as={event_link} href="/events/[eventNameId]">
      <a>
        <div className="flex-none w-80 px-4">
          <div className="rounded overflow-hidden shadow-lg">
            <img className="h-48 w-full" src={event.poster} />
            <div className="px-4 py-4 bg-gray-700 h-32">
              <div className="font-bold text-white text-lg mb-2">
                {event.name}
              </div>
              <p className="text-gray-200 font-bold text-sm">{event.date}</p>
              <p className="text-gray-500 text-sm">{event.location}</p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default EventList;
