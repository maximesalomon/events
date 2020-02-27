import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";

const Events = () => {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <p className="pt-32">{router.query.eventNameId}</p>
    </>
  );
};

export default Events;
