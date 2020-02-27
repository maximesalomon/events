import { useRouter } from "next/router";
import { useQuery } from "@apollo/react-hooks";
import { withApollo } from "../../lib/apollo";
import Navbar from "../../components/Navbar";
import Event from "../../components/Event";
import gql from "graphql-tag";

const EventContainer = () => {
  const router = useRouter();
  const event_id = router.query.eventNameId.slice(-36)
  const EVENT_BY_ID = gql`
    query Event($id: String) {
      event(id: $id) {
        name
        date
        location
        description
        poster
      }
    }
  `;
  const { loading, error, data, refetch } = useQuery(EVENT_BY_ID, {
    variables: { "id": event_id }
  });
  if (loading) return <><Navbar /><p className="pt-32">Loading</p></>;
  if (error) return <>{console.log(error)}<Navbar /><p className="pt-32">ERROR</p></>;
  if (!data) return <><Navbar /><p className="pt-32">No data found</p></>;
  return (
    <>
      <Navbar />
      <Event event={data.event} />
    </>
  );
};

export default withApollo({ ssr: true })(EventContainer);
