import { useRouter } from "next/router";
import Link from "next/link";

const Hero = () => {
  return (
    <header>
      <section className="bg-gray-900 h-400px text-center">
        <h1 className="pt-48 text-4xl text-white font-bold">
          Marvellous Island Festival 2020
        </h1>
        <p className="text-gray-400 font-base">
          Une programmation au summum de l'éclectisme et de la qualité !
        </p>
        <Link
          as={
            "/events/marvellous-island-festival-2020-d0e32dbd-15b6-423c-a4b1-0a8d25814f3c"
          }
          href="/events/[eventNameId]"
        >
          <a>
            <button className="mt-6 text-white bg-shotgun-pink hover:bg-purple-700 py-3 px-10 rounded">
              Découvrir
            </button>
          </a>
        </Link>
      </section>
    </header>
  );
};

export default Hero;
