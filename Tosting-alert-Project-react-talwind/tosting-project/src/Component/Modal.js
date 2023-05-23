import React from 'react'

const Modal = ({ closeModal }) => {
  return (
    <div className='flex items-center justify-center w-[96rem] h-[45rem]  bg-black bg-opacity-30 backdrop-blur-sm  fixed inset-0  '>
      <div className='flex-col block p-4 mb-5 border-gray-900 rounded-lg shadow-lg h-[15rem] w-[30rem] bg-slate-50'>
        <div className=' titleCloseBtn'>
          <button
            className='flex flex-row-reverse px-2 bg-red-500 rounded shadow outline-none hover:bg-red-700'
            onClick={() => {
              closeModal(false)
            }}
          >
            X
          </button>
        </div>
        <div className='block mt-3 text-center title'>
          <h1>Are you sure you want to continue?</h1>
        </div>
        <div className='body'>
          <p>
            The next page is awesome! you should move forward, you will enjoy
            it.
          </p>
        </div>
        <div className='footer'>
          <button
            onClick={() => {
              closeModal(false)
            }}
            className='px-2 py-2 mx-2 my-4 bg-red-500 rounded shadow outline-none hover:bg-red-600'
          >
            Cancle
          </button>
          <button className='px-2 py-2 bg-green-500 rounded outline-none hover:bg-green-600'>
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
