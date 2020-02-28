const Tickets = () => {
  return (
    <>
      <div className="h-64">
        <p className="text-xl font-bold text-white">Billets</p>
        <div className="flex justify-between mt-4">
          <div className="bg-white w-3/5 rounded flex justify-between">
            <p className="text-lg font-bold pl-8 py-6">Normal</p>
            <div className="text-base py-6 pr-12 flex">
              <button className="rounded-full h-8 w-8 flex items-center justify-center bg-shotgun-pink hover:bg-purple-700 text-white">
                -
              </button>
              <div className="px-4 pt-1 text-lg font-bold">1</div>
              <button className="rounded-full h-8 w-8 flex items-center justify-center bg-shotgun-pink hover:bg-purple-700 text-white">
                +
              </button>
            </div>
          </div>
          <div className="bg-white w-2/6 rounded">2</div>
        </div>
      </div>
    </>
  );
};

export default Tickets;
