import moon1 from '/images/moon1.png'
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
              <a
                href="https://www.youtube.com/watch?v=jPTD2gnZFUw"
                rel="noreferrer"
                target="_blank"
              >
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
              </a>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <img
        src={moon1}
        alt=""
        className="absolute right-0 bottom-0   w-full brightness-50 z-10"
      />
      <div className="absolute right-0 bottom-0 w-full z-30 bg-gradient-to-b from-transparent from-10% to-black to-90% h-[20px] sm:h-[50px] md:[60px]"></div>
    </div>
  );
}

export default Hero
