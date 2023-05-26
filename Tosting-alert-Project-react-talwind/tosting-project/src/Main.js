import React, { useState } from 'react'
import Modal from './Component/Modal'
import { FcQuestions } from 'react-icons/fc'

const Main = () => {
  const [openModal, setOpenModal] = useState(false)
  const [deleteitem, setDeleteitem] = useState(false)
  const [continueitem, setContinueitem] = useState(true)

  const [openmodal, setOpenmodal] = useState(1)

  // DELETE FUNCTION
  const deleteSuccess = () => {
    setTimeout(() => {
      setDeleteitem(true)
      setOpenmodal(2)
      console.log('Item deleted after sec')
    }, 700)
  }

  // HTML FUNCTION
  const HtmlFunction = () => {
    return (
      <>
        <div className='bg-gray-100 border-2 border-red-100 rounded'>
          <h1 className='text-lg font-bold text-slate-500'>
            HTML <span className='text-lg underline '>example</span>{' '}
          </h1>
          <p>
            You can use <span className='font-bold'>bold text,</span>{' '}
            <a className='font-bold underline ' href='https://tailwindcss.com/'>
              links
            </a>{' '}
            and other HTML tags
          </p>
        </div>
      </>
    )
  }

  // INPUT FIELD FUNCTION
  const InputFieldFunction = () => {
    const [inputField, setInputField] = useState('')

    const handleChange = e => {
      setInputField(e.target.value)
    }

    return (
      <>
        <div className='p-2 mt-2 border-2'>
          <label>
            Type Anything
            <input
              className='mx-2 text-center bg-gray-100 border-2 rounded'
              value={inputField}
              onChange={handleChange}
            />
          </label>
          {/* <p>Input value: {inputField}</p> */}
          {console.log(inputField)}
        </div>
      </>
    )
  }

  return (
    <div className=' grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-4 bg-blue-400 bg-opacity-30 w-[full] min-h-screen   flex items-start text-center'>
      <div className='  flex-col w-[30rem] h-[10rem] rounded shadow-lg bg-slate-400 mx-auto p-4 '>
        <div className='py-3 text-center'>
          <button
            className='px-3 py-2 text-xl text-white transition bg-red-400 rounded hover:scale-95'
            onClick={() => {
              setOpenModal(true)
            }}
          >
            Open Modal
          </button>
        </div>
        <p className='text-lg'>Hey, Click on the button to open the modal</p>
      </div>
      {openModal && (
        <Modal
          closeModal={setOpenModal}
          title='Are you sure you want to continue?'
          discription='The next page is awesome! you should move forward, you will enjoy
          it.'
          icons={<FcQuestions />}
          x={false}
          cancel={() => alert('Are you sure, you want to go back?')}
          deleteitem={deleteitem}
          isDeleteShow={setDeleteitem}
          continueitem={continueitem}
          isContinueShow={setContinueitem}
          button1='Delete it !'
          button2='Continue'
          deleteSuccess={deleteSuccess}
          openmodal={openmodal}
          setOpenmodal={setOpenmodal}
          HtmlFunction={HtmlFunction}
          InputFieldFunction={InputFieldFunction}
        />
      )}
    </div>
  )
}

export default Main
