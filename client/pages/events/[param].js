import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";

const Events = () => {
  const router = useRouter();
  const { param } = router.query;

  return (
    <>
      <Navbar />
      <p className="pt-32">Event name: {param}</p>
    </>
  );
};

export default Events;
