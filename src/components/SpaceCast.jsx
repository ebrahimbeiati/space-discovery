import SpaceCast1 from '/images/SpaceCast1.png'
const SpaceCast = () => {
  return (
    <div className="bg-black text-white pb-12 relative z-50">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          <div>
            <img
              src={SpaceCast1}
              alt=""
              className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
            />
          </div>
          <div className="space-y-3 xl:pr-36 p-4 border-r-2  border-b-2  border-r-sky-800 border-b-sky-800">
            <p>Space Voice</p>
            <h1 className="text-5xl font-bold">Space Cast</h1>
            <p> You can enjoy the voice of the universe with us.</p>
                      <a href="https://www.nasa.gov/podcasts/" rel='noreferrer' target='_blank'>
              <button className="text-white border-2 gap-4 border-white rounded-md px-3 py-1 items-center flex justify-center hover:bg-blue-500 mt-4">
                Listen
              </button>
            </a>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpaceCast
