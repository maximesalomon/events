import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

export const ALL_EVENTS_QUERY = gql`
  query allEvents {
    events {
      id
      name
    }
  }
`;

export default function EventList() {
  const { data } = useQuery(ALL_EVENTS_QUERY);
  return (
    <section>
      <ul>
        {data !== undefined
          ? data.events.map(event => (
              <li key={event.id}>
                <div>
                  <p>{event.name}</p>
                </div>
              </li>
            ))
          : null}
      </ul>
    </section>
  );
}
