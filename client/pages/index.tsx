import { withApollo } from "../lib/apollo";
import EventList from "../components/EventList";

const IndexPage = () => {
  return (
    <>
      <h1>Events</h1>
      <EventList />
    </>
  );
};

export default withApollo({ ssr: true })(IndexPage);
