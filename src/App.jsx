import bg from '../public/images/bg.png'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div>
      <div className='h-[700px] relative'>

        <img src={bg} alt=""
          className=" object-cover fixed right-0 h-[700px] w-full z-[-1]"
          style={{ filter: 'brightness(0.5)' }}

        />
        <Navbar/>
        
      </div>
    </div>
  )
}

export default App
