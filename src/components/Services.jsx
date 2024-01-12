import { FaReact } from "react-icons/fa";
import { FaShuttleSpace, FaSpaceAwesome } from "react-icons/fa6";
import wave from '/public/images/wave.gif'
const ServiceData = [
  {
    title: "Space Discovery",
    description:
      "With us you can explore the unknown in air and space, innovates for the benefit of humanity, and inspires the world through discovery",
        icon: <FaReact 
        className="text-7xl "/>,
    id: 1,
    aosDelay: "300",
  },
  {
      title: "ISS",
      content: "500-1700km",
    description:
      "It is a habitable artificial satellite orbiting earth and serves as a space environment research.",
    icon: <FaShuttleSpace className="text-7xl" />,
    aosDelay: "500",
  },
  {
    title: "GPS",
    content: "300-1600km",
      icon: <FaSpaceAwesome
          className='text-7xl' />,
      description:
          "It is a GPS satellite with a range of 300 to 1600 kilometers.It is used for navigation in space.",
       id: 3,
    aosDelay: "700",
  },
];
const Services = () => {
  return (
    <div className="bg-black text-white relative z-50">
      <div className="container">
        <div className="min-h-[400px]">
         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
                      {ServiceData.map((data, index) => (
                          <div
                              key={index}
                              className="flex flex-col min-h-[180px] justify-center items-center bg-sky-900/60 backdrop-blur-sm text-center text-2xl px-3 w-full lg:w-[300px] mx-auto gap-4 p-8 rounded-xl">
                              {data.icon}
                              <h1>{data.title}</h1>
                              <p>{data.content}</p>
                              <p className="text-sm">{data.description}</p>
                             
                            </div>   
                      ))}
                  </div>
                  <img src={wave} alt=""
                  className="h-[200px] w-full object-cover mix-blend-screen -translate-y-24 relative z-[0]"/>
        </div>
      </div>
    </div>
  );
};

export default Services;
