import React, { useState } from 'react'
import Modal from './Component/Modal'
import { motion } from 'framer-motion'

const nextVariants = {
  hidden: {
    x: '-100vw'
  },
  visible: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 120
    }
  }
}

const App = () => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      {openModal ? (
        ' '
      ) : (
        <div className=' w-full absolute text-center '>
          <div className='flex items-center justify-center flex-col border-gray-900 rounded-lg  h-[10rem] w-[full] '>
            <motion.div
              variants={nextVariants}
              initial='hidden'
              animate='visible'
              className='border-gray-900 rounded-lg shadow-lg h-[50rem] w-[30rem] bg-slate-200 m-4'
            >
              <h1 className='py-4 font-bold'>
                Hey, Click on the button to open the modal
              </h1>
              <button
                className='px-4 py-2 my-4 bg-blue-500 rounded shadow outline-none hover:bg-green-400'
                onClick={() => {
                  setOpenModal(true)
                }}
              >
                Open
              </button>
            </motion.div>
          </div>
        </div>
      )}
      {openModal ? (
        <Modal
          className='absolute '
          closeModal={setOpenModal}
          title='Are you sure you want to continue?'
        />
      ) : (
        ' '
      )}
    </>
  )
}

export default App
