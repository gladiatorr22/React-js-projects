import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-[100%] h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl '>
          <button onClick={()=>setColor('#690005ff')} className='outline-none px-4 py-1 rounded-full text-amber-100 shadow-lg'
          style={{backgroundColor:'#690005ff'}}
          >red</button>

          <button onClick={()=>setColor('green')} className='outline-none px-4 py-1 rounded-full text-amber-100 shadow-lg'
          style={{backgroundColor:'green'}}
          >green</button>

          <button onClick={()=>setColor('#0d3b72ff')} className='outline-none px-4 py-1 rounded-full text-amber-100 shadow-lg'
          style={{backgroundColor:'#0d3b72ff'}}
          >blue</button>
        </div>
      </div>  

    </div>
  );
}

export default App;