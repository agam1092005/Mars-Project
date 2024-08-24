import Meteors from '@/components/magicui/meteors';
import dynamic from 'next/dynamic';

const Mars = dynamic(() => import('../components/mars'), { ssr: false });


const Home: React.FC = () => {
  return (
    <div className='w-full h-full bg-black overflow-hidden p-0 m-0 flex flex-col items-center justify-center'>
      <Meteors number={20} />
      <div id="main-row" className='w-100 h-100 flex lg:flex-row lg:w-100 lg:h-100 lg:w-full lg:h-full flex-col justify-center align-center items-center pl-20 pr-20 pt-20 pb-20 lg:pb-0 lg:pt-0'>
      <h1 className='text-white text-6xl md:text-8xl lg:text-8xl font-aileron'>PROJECT</h1>      
      <Mars /> 
      <h1 className='text-white text-6xl md:text-8xl lg:text-8xl font-aileron lg:pl-20'>MARS</h1>      
      </div>
      <h5 className='text-white text-4xl md:text-6xl lg:text-6xl font-aileron'>The Sun Touches Everything</h5> 
    </div>
  );
};

export default Home;
