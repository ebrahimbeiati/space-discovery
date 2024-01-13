
const About = () => {
  return (
    <div className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About NASA
            </p>
          </div>
          <div>
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              For more than 50 years, NASA has been breaking barriers to achieve
              the seemingly impossible. At its 20 centers and facilities across
              the country – and the only National Laboratory in space – NASA
              studies Earth, including its climate, our Sun, and our solar
              system and beyond. We conduct research, testing, and development
              to advance aeronautics, including electric propulsion and
              supersonic flight. We develop and fund space technologies that
              will enable future exploration and benefit life on Earth.
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4"></div>
      </div>
    </div>
  );
}
export default About;
      
