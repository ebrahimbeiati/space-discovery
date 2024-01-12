import satellite1 from '/images/satellite1.png'
const Satellite = () => {
  return (
    <div className="bg-black text-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          <div className="space-y-3 xl:pr-36 p-4 border-l-2  border-b-2  border-l-sky-800 border-b-sky-800">
            <p>Space pictures</p>
            <h1 className="text-5xl font-bold">Space photo</h1>
            <p>
              {" "}
              You can join the Nasa website to explore the beauty of the
              universe.
            </p>
            <button className="text-white border-2 gap-4 border-white rounded-md px-3 py-1 items-center flex justify-center hover:bg-blue-500 mt-4">
              Join
            </button>
          </div>
          <div>
            <img
              src={satellite1}
              alt=""
              className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
            />
          </div>
              </div>
          </div>
       
              
    </div>
  );
}

export default Satellite
