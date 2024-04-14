import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Random = () => {

 const{gif,loading,fetchData} = useGif();

  return (
 <div className="w-1/2 h-[450px] bg-green-500 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
        <h1 className='text-3xl uppercase underline font-bold'>A Random GIF</h1>
        {
        loading?(<Spinner/>) : (<img src={gif} className="h-[280px] w-[450px]"/>)
        }
        <button onClick={() => fetchData()}
        className='w-10/12 bg-white text-xl py-2 rounded-lg font-bold'>
            Generate
        </button>
 </div>
  );
};

export default Random;
