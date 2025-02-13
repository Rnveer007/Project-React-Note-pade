import React from 'react'
import './index.css'
import { useState } from 'react'
import { MdDeleteForever } from "react-icons/md";


function App() {
  const [textAreaInput, setTextAreaInput] = useState('');
  const [notes, setNotes] = useState([]);
  // console.log(notes)
  const [colorInput, setColorInput] = useState('');

  function addNote(e) {
    e.preventDefault();
    const obj = { id: Date.now(), note: textAreaInput, color: colorInput};
    setNotes([...notes, obj]);
    setTextAreaInput('');
    setColorInput('')
  }
  function dltNote(id) {
    setNotes(notes.filter((div) => div.id !== id))
  }
  return (
    <>
      <div className='bg-cyan-200 h-screen' >
        <h1 className='text-center py-3 font-bold underline text-3xl '> * NotePad *</h1>
        <div className='flex justify-center'>
          <form onSubmit={addNote} className='border-2 p-3 h-[700px] w-[800px]  bg-cyan-200'>
            <textarea name="" id="" placeholder='Add Your Notes' value={textAreaInput} onChange={(e) => setTextAreaInput(e.target.value)} className='border-2 border-green-800 h-[300px] w-[700px] p-4 capitalize font-bold' required> </textarea>
            <input type="color" name="" id="" value={colorInput} onChange={(e) => setColorInput(e.target.value)} required className='cursor-pointer' />
            <div>
              <button type='submit' className='border-2 px-3 mt-4 bg-black text-white py-1 px-7 cursor-pointer'>Add</button>
            </div>
          </form>

          <div className='bg-gray-400 h-[700px] w-[800px]'>
            {
              notes.map((item) => {
                return <div key={item.id} style={{ backgroundColor: item.color }} className='h-[80px] w-[800px] pt-2 capitalize font-bold  flex items-center justify-between px-4'> <h1 className='pl-5'> {item.note}</h1><span> <MdDeleteForever onClick={() => dltNote(item.id)} className='items-center text-3xl cursor-pointer' /></span>
                </div>
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App