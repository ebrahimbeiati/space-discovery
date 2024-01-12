import bg from '../public/images/bg.png'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/Services'

const App = () => {
  return (
    <div>
      <div className='h-[700px] relative'>

        <img src={bg} alt=""
          className=" object-cover fixed right-0 h-[700px] w-full z-[-1]"
          style={{ filter: 'brightness(0.5)' }}

        />
        <Navbar />
        <Hero />
        
        
      </div>
      <Services />
      <SpaceCast/>
    </div>
  )
}

export default App
