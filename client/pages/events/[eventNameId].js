import { useRouter } from "next/router";
import { useQuery } from "@apollo/react-hooks";
import { withApollo } from "../../lib/apollo";
import Navbar from "../../components/Navbar";
import gql from "graphql-tag";

const Event = () => {
  const router = useRouter();
  const event_id = router.query.eventNameId.slice(-36)
  const EVENT_BY_ID = gql`
    query Event($id: String) {
      event(id: $id) {
        name
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
      <p className="pt-32">{loading == true ? null : data.event.name}</p>
    </>
  );
};

export default withApollo({ ssr: true })(Event);
