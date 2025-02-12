import React from 'react'
import './index.css'
import { useState } from 'react'

function App() {
  const [textAreaInput, setTextAreaInput] = useState('');
  const [notes, setNotes] = useState([]);
  console.log(notes)
  const [colorInput, setColorInput] = useState('');



  function addNote(e) {
    e.preventDefault();
    const obj = { id: Date.now(), note: textAreaInput, color: colorInput }
    setNotes([...notes, obj])
  }

  return (
    <>
      <div >
        <h1>Note-Pad</h1>
        <div className='flex'>

          <form onSubmit={addNote} className='border-2 p-3 h-[700px] w-[800px]'>
            <textarea name="" id="" placeholder='Add Your Notes' value={textAreaInput} onChange={(e) => setTextAreaInput(e.target.value)} className='border-2' required  ></textarea>
            <input type="color" name="" id="" value={colorInput} onChange={(e) => setColorInput(e.target.value)} required />
            <div>
              <button type='submit' className='border-2 px-3'>Add</button>
            </div>
          </form>


          <div className='bg-gray-400 h-[700px] w-[800px]'>
            {
              notes.map((item, index) => {
                return <h1 key={index} style={{ backgroundColor: item.color }} className='h-[80px] w-[200px] pl-3 pt-2 capitalize font-bold'> {item.note}</h1>
              })
            }


          </div>
        </div>

      </div>
    </>
  )
}

export default App