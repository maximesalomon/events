import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed flex items-center justify-between flex-wrap px-6 py-4 bg-gray-900 w-full">
      <div className="flex items-center ml-4 flex-shrink-0 text-white mr-6">
        <Link href={"/"}>
          <a>
            <img
              className="mt-1"
              width="120"
              src="https://d1yyfrhejvllsj.cloudfront.net/b2c-web/images/logo-shotgun@3x.png"
            />
          </a>
        </Link>
      </div>
      <div className="w-full ml-16 block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a className="block lg:inline-block text-white hover:text-white mr-4">
            <button className="flex bg-transparent hover:bg-purple-700 text-white font-semibold hover:text-white py-2 px-6 border border-pink-600 hover:border-transparent rounded">
              <p>Paris</p>
            </button>
          </a>
          <input
            placeholder="Explorer 🔍"
            className="block ml-4 px-2 py-2 lg:inline-block text-white hover:text-gray-900 mr-4 w-64"
          />
        </div>
        <div>
          <a className="inline-block text-sm px-4 leading-none text-white border-white hover:border-transparent hover:text-pink-600">
            Organisateurs
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
