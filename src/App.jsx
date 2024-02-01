import { useState } from 'react'

// import { useState } from 'react'


function App() {
  const [color, setColor] = useState('olive')

  
  return (
   <div className="w-full h-screen duration-200 bg-black" style={{background:color}}>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
        <button onClick={()=>setColor("red")} className ="outline-none px-4 py-1 rounded-full text-black shadow-lg text-black" style={{background:"red"}}>Red</button>
        <button  onClick={()=>setColor("blue")}className ="outline-none px-4 py-1 rounded-full text-black shadow-lg text-black" style={{background:"blue"}}>Blue</button>
        <button onClick={()=>setColor("green")}className ="outline-none px-4 py-1 rounded-full text-black shadow-lg text-black" style={{background:"green"}}>Green</button>
        <button onClick={()=>setColor("olive")}className ="outline-none px-4 py-1 rounded-full text-black shadow-lg text-black" style={{background:"olive"}}>To come back to default</button>
      </div>
    </div>
   </div>
  )
}
export default App




//first eetara
// let change =(color)=>{
//   setColor(color)
// }
// return (
//  <div className="w-full h-screen duration-200 bg-black" style={{background:color}}>
//   <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
//     <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
//       <button onClick={()=>change("red")} className ="outline-none px-4 py-1 rounded-full text-white shadow-lg text-black">Red</button>
//       <button  onClick={()=>change("blue")}className ="outline-none px-4 py-1 rounded-full text-white shadow-lg text-black">Blue</button>
//       <button onClick={()=>change("green")}className ="outline-none px-4 py-1 rounded-full text-white shadow-lg text-black">Green</button>
//     </div>
//   </div>
//  </div>
// )
// }
// export default App