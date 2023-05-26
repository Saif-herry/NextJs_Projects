import React, { useMemo, useState } from 'react'
import '../App.css'
import { motion } from 'framer-motion'
import { FcCheckmark } from 'react-icons/fc'

const Modal = ({
  closeModal,
  title,
  discription,
  x,
  cancel,
  icons,
  button1,
  button2,
  isDeleteShow,
  isContinueShow,
  deleteitem,
  continueitem,
  deleteSuccess,
  openmodal,
  setOpenmodal,
  HtmlFunction,
  setAutoClose,
  InputFieldFunction
}) => {
  const containerVariants = useMemo(() => {
    const containerVariants = x
      ? {
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
      : {
          hidden: {
            y: '-100vw'
          },
          visible: {
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 120
            }
          }
        }
    return containerVariants
  }, [x])

  return (
    <div className='absolute inset-0 top-0 bottom-0 left-0 right-0 flex items-center justify-center min-h-screen bg-slate-200 bg-opacity-30 backdrop-blur-sm'>
      <div className='relative flex items-center justify-center w-full h-full '>
        <div
          onClick={() => {
            // console.log('parreant element ')
            closeModal(false)
          }}
          className='absolute w-full h-full '
        ></div>

        {/* model card */}

        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
          className={
            openmodal === 2 || openmodal === 3
              ? 'box'
              : 'flex-col block p-4 mb-5 border-gray-900 rounded-lg shadow-lg h-[17rem] w-[22rem] md:w-[42rem] md:h-[23rem] lg:w-[40rem]  bg-slate-50 absolute'
          }
        >
          {openmodal === 1 ? (
            <>
              <div className='flex justify-end '>
                <button
                  className='h-[25px] w-[25px] rounded shadow outline-none hover:bg-red-700 hover:text-white'
                  onClick={() => {
                    closeModal(false)
                    cancel()
                  }}
                >
                  X
                </button>
              </div>
              <div className='block text-center title'>
                <h2 className='lg:mx-48 md:mx-64 mx-32 text-[70px]'>{icons}</h2>

                <h1 className='text-lg font-bold'>{title}</h1>
                <div>
                  <HtmlFunction />
                </div>
                <div>
                  <InputFieldFunction />
                </div>
              </div>

              <div className='body'>
                <p className='sm:text-sm md:text-base'>{discription}</p>
              </div>
              <div className='footer'>
                <button
                  // disabled={!deleteitem}
                  onClick={() => {
                    // isDeleteShow(false)
                    deleteSuccess()
                    console.log('Item successfully deleted!!')
                    // setOpenmodal(2)
                  }}
                  className={
                    'px-2 py-2 mx-2 my-4 text-white bg-red-700 rounded shadow outline-none hover:bg-red-600 '
                  }
                >
                  {button1}
                </button>
                <button
                  disabled={!continueitem}
                  onClick={() => {
                    setOpenmodal(3)
                    isContinueShow(false)
                    console.log('Now you can continue!!')
                  }}
                  className='px-2 py-2 text-white bg-blue-700 rounded outline-none hover:bg-blue-600'
                >
                  {button2}
                </button>
              </div>
            </>
          ) : openmodal === 2 ? (
            <div>
              <div className='flex justify-end px-2 py-1'>
                <button
                  className='h-[25px] w-[25px] rounded shadow outline-none hover:bg-red-700 hover:text-white'
                  onClick={() => {
                    closeModal(false)
                  }}
                >
                  X
                </button>
              </div>
              <div className='block text-center title'>
                <h2 className='lg:mx-48 md:mx-64 mx-32 text-[70px] mb-2'>
                  <FcCheckmark />
                </h2>
                <h1 className='text-4xl font-bold'>Deleted !</h1>
              </div>
              <div className='body'>
                <p className='m-3 text-lg '>Your file has been deleted!</p>
              </div>
              <div className='footer'>
                {/* <button
                onClick={() => {
                  cancel()
                  closeModal(false)
                }}
                className='px-2 py-2 mx-2 my-4 text-white bg-red-700 rounded shadow outline-none hover:bg-red-600'
              >
                OK
              </button> */}
                <button
                  onClick={() => {
                    closeModal(false)
                    setOpenmodal(1)
                  }}
                  className='px-2 py-2 text-lg text-white bg-blue-700 rounded outline-none hover:bg-blue-600 h-[3rem] w-[4rem]'
                >
                  OK
                </button>
              </div>
            </div>
          ) : openmodal === 3 ? (
            <div>
              <div className='flex justify-end px-2 py-1 '>
                <button
                  className='h-[25px] w-[25px]  rounded shadow outline-none hover:bg-red-700 hover:text-white'
                  onClick={() => {
                    closeModal(false)
                  }}
                >
                  X
                </button>
              </div>
              <div className='block text-center title'>
                <h2 className='lg:mx-48 md:mx-64 mx-32 text-[70px] mb-2'>
                  <FcCheckmark />
                </h2>
                <h1 className='text-4xl font-bold'>Continue !</h1>
              </div>
              <div className='body'>
                <p className='m-3 text-lg '>Now You can continue!</p>
              </div>
              <div className='footer'>
                <button
                  onClick={() => {
                    closeModal(false)
                    setOpenmodal(1)
                  }}
                  className='px-2 py-2 text-lg text-white bg-blue-700 rounded outline-none hover:bg-blue-600 h-[3rem] w-[4rem]'
                >
                  OK
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className='flex justify-end px-2 py-1 '>
                <button
                  className='h-[25px] w-[25px]  rounded shadow outline-none hover:bg-red-700 hover:text-white'
                  onClick={() => {
                    closeModal(false)
                  }}
                >
                  X
                </button>
              </div>
              <div className='block text-center title'>
                <h2 className='lg:mx-48 md:mx-64 mx-32 text-[70px] mb-2'>
                  <FcCheckmark />
                </h2>
                <h1 className='text-4xl font-bold'> !</h1>
              </div>
              <div className='body'>
                <p className='m-3 text-lg '>can!</p>
              </div>
              <div className='footer'>
                <button
                  onClick={() => {
                    closeModal(false)
                    setOpenmodal(1)
                  }}
                  className='px-2 py-2 text-lg text-white bg-blue-700 rounded outline-none hover:bg-blue-600 h-[3rem] w-[4rem]'
                >
                  OK
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default Modal
