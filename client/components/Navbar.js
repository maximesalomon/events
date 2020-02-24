const Navbar = () => {
  return (
    <nav class="flex items-center justify-between flex-wrap p-6">
      <div class="flex items-center ml-4 flex-shrink-0 text-white mr-6">
        <img
          className="mt-1"
          width="120"
          src="https://d1yyfrhejvllsj.cloudfront.net/b2c-web/images/logo-shotgun@3x.png"
        />
      </div>
      <div class="w-full ml-16 block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-base lg:flex-grow">
          <a class="block lg:inline-block text-white hover:text-white mr-4">
            <button class="flex bg-transparent hover:bg-pink-500 text-white font-semibold hover:text-white py-2 px-6 border border-pink-500 hover:border-transparent rounded">
              <p>Paris</p>
            </button>
          </a>
          <input
            placeholder="Explorer 🔍"
            class="block ml-4 px-2 py-2 lg:inline-block text-white hover:text-gray-900 mr-4 w-64"
          />
        </div>
        <div>
          <a class="inline-block text-base px-4 mb-2 leading-none text-white border-white hover:border-transparent hover:text-pink-500">
            Organisateurs
          </a>
        </div>
        <div>
          <a class="inline-block leading-none">
            <img
              src="https://cdn.onlinewebfonts.com/svg/img_184513.png"
              width="32px"
            ></img>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
