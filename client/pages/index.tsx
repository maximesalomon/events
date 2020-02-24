import { withApollo } from "../lib/apollo";
import Navbar from "../components/Navbar";
import EventList from "../components/EventList";

const IndexPage = () => {
  return (
    <>
      <Navbar />
      <EventList />
    </>
  );
};

export default withApollo({ ssr: true })(IndexPage);
