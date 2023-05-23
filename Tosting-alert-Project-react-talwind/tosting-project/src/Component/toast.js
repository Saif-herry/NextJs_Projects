
import './App.css';
import { toast } from 'react-toastify';

const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 3000));

function App() {
  const notify = () => toast.error("Error Notification !", {
    position: toast.POSITION.TOP_LEFT
  });
  
  // toast.promise(resolveAfter3Sec,
  //   {
  //     pending: 'Promise is pending',
  //     success: 'Promise resolved 👌',
  //     error: 'Promise rejected 🤯'
  //   })

  return (
    <>
    
      
    
    <div className=' flex items-center justify-center font-bold text-gray-500 text-center m-10 '>
    
      <button className='rounded bg-amber-300 py-2 my-48 px-4 shadow outline-none hover:bg-amber-400 active:bg-amber-500' onClick={notify } >Notify!</button>
      
      </div>

    </>
  );
}

export default App;
