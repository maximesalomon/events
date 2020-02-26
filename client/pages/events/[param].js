import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";

const Events = () => {
  const router = useRouter();
  const { param } = router.query;

  return (
    <>
      <Navbar />
      <p>Event name: {param}</p>
    </>
  );
};

export default Events;
