import React, { useState } from 'react'
import Modal from './Component/Modal'

const Main = () => {
    const [openModal, setOpenModal] = useState(false)
  return (
    <div className='bg-blue-400 bg-opacity-30 w-[full] h-[45rem] flex items-start text-center'>
      <div className='  flex-col w-[30rem] h-[10rem] rounded shadow-lg bg-slate-400 mx-auto p-4 '>
        <div className='text-center py-3'>
          <button className='bg-red-400 text-white px-3 py-2 rounded hover:scale-95 transition text-xl'  onClick={() => {
              setOpenModal(true)
            }}>
            Open Modal
          </button>
        </div>
        <p className='text-lg'>
        Hey, Click on the button to open the modal
          
</p>
      </div>
      {openModal && <Modal closeModal={setOpenModal}/>}
    </div>
  )
}

export default Main
