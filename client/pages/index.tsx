import { withApollo } from "../lib/apollo";
import EventList from "../components/EventList";

const IndexPage = () => {
  return (
    <>
      <EventList />
    </>
  );
};

export default withApollo({ ssr: true })(IndexPage);
