import { withApollo } from "../lib/apollo";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import EventList from "../components/EventList";

const IndexPage = () => {
  return (
    <div className="bg-gray-900 h-screen">
      <Navbar />
      <Hero />
      <EventList />
    </div>
  );
};

export default withApollo({ ssr: true })(IndexPage);
