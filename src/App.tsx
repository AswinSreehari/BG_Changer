import { useState } from 'react'
 import './App.css'

function App() {
 const [color, setColor] = useState('white')

 const changeColor = (color: string) => setColor(color)
 
  return (
   <div className='w-full h-screen duration-200 ' style={{backgroundColor: color}}>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
    <div className='fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
      <button onClick={() => changeColor('Blue')} className='outline-none px-4 py-1 rounded-full shadow-lg text-white'style={{backgroundColor: 'blue'}}> Blue</button>
      <button onClick={() => changeColor('Black')} className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor: 'black'}}>Black</button>
      <button onClick={() => changeColor('Red')} className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor: 'red'}}>Red</button>
      <button onClick={() => changeColor('Violet')} className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor: 'violet'}}>Violet</button>
      <button onClick={() => changeColor('Orange')} className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor: 'orange'}}>Orange</button>
      <button onClick={() => changeColor('Yellow')} className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor: 'yellow'}}>Yellow</button>
      <button onClick={() => changeColor('Pink')} className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor: 'pink'}}>Pink</button>
      <button onClick={() => changeColor('Green')} className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor: 'green'}}>Green</button>
      <button onClick={() => changeColor('cyan')} className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor: 'cyan'}}>Cyan</button>
      <button onClick={() => changeColor('Grey')} className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor: 'grey'}}>Grey</button>
    </div>
    </div>
   </div>
  )
}

export default App
