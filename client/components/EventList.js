import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

export const ALL_EVENTS_QUERY = gql`
  query allEvents {
    events {
      id
      name
      date
      location
    }
  }
`;

export default function EventList() {
  const { data } = useQuery(ALL_EVENTS_QUERY);
  return (
    <>
      {data !== undefined
        ? data.events.map(event => (
            <div key={event.id}>
              <h2>{event.name}</h2>
              <p>{event.date}</p>
              <p>{event.location}</p>
            </div>
          ))
        : null}
    </>
  );
}
