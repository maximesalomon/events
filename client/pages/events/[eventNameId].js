import { useRouter } from "next/router";
import { useQuery } from "@apollo/react-hooks";
import Navbar from "../../components/Navbar";
import gql from "graphql-tag";

const Event = () => {
  const router = useRouter();
  const EVENT_BY_ID = gql`
    query Event {
      event(id: "d0e32dbd-15b6-423c-a4b1-0a8d25814f3c") {
        name
      }
    }
  `;
  const { loading, error, data, refetch } = useQuery(EVENT_BY_ID);
  return (
    <>
      <Navbar />
      <p className="pt-32">{loading == true ? <p>Loading ...</p> : "Title"}</p>
    </>
  );
};

export default Event;
