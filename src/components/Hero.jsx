
const Hero = () => {
  return (
    <div className="bg-black/20 h-full text-white relative z-50">
      <div className="h-full flex justify-center items-center p-4">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-4 lg:pr-36">
            <h1 className="font-bold text-5xl">The Earth</h1>
            <p>
              With us you can explore the unknown in air and space, innovates
              for the benefit of humanity, and inspires the world through
              discovery
            </p>
            <div>
              <button
                className="
                      m-5
                      flex gap-4
                      bg-white
                      p-4
                      rounded-md
                      text-black
                      font-bold
                      text-2xl
                        w-1/2
                        hover:bg-yellow-500
                        duration-200
                      "
              >
                Watch Live
              </button>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Hero
