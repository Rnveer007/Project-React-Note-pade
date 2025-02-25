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
    const obj = {
      id: Date.now(), note: textAreaInput,
      color: colorInput, date: new Date().toLocaleString()
    };
    setNotes([...notes, obj]);
    setTextAreaInput('');
    setColorInput('')
  }
  function dltNote(id) {
    setNotes(notes.filter((div) => div.id !== id))
  }
  return (
    <>
      <div className=' h-screen' >

        <div className='flex'>
          <form onSubmit={addNote} className=' p-3 h-screen w-[840px] ' style={{ backgroundColor: "#DAD2FF" }}>
            <textarea name="" id="" placeholder='Add Your Notes' value={textAreaInput} onChange={(e) => setTextAreaInput(e.target.value)} className='border-2 border-green-800 h-[300px] w-[700px] p-4 capitalize font-bold' required> </textarea> <br />
            <input type="color" name="" id="" value={colorInput} onChange={(e) => setColorInput(e.target.value)} required className='cursor-pointer' />
            <div>
              <button type='submit' className='rounded-full mt-4 bg-amber-400  py-1 px-7 cursor-pointer'>Add</button>
            </div>
          </form>

          <div className='bg-gray-400 h-screen w-[840px]'>
            <div className='flex items-center justify-center gap-20'>
              <h1 className='text-center py-4 text-2xl'>Your Notes Are Here</h1>
              <h1 className='cursor-pointer text-2xl '>Undo</h1>
            </div>
            {
              notes.map((item) => {

                return <div className='h-[90px] w-[840px] pt-2 capitalize font-bold justify-between px-4' style={{ backgroundColor: item.color }}>
                  <div key={item.id}

                    className=' flex items-center justify-between px-4 mb-4'>
                    <h1 className='pl-5'> {item.note}</h1>
                    <span> <MdDeleteForever onClick={() => dltNote(item.id)}
                      className='items-center text-3xl cursor-pointer' />
                    </span>
                  </div>
                  <div>{item.date}</div>
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