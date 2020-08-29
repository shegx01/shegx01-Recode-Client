import React from 'react'
import FormData from './FormData'
export default function SingleUpload () {
  return (
    <div className='mt-8'>
      <div className='flex items-center content-center '>
        <form>
          <FormData />
          <button
            className='mt-4  bg-success px-2 py-1 capitalize hover:text-grey hover:bg-success1 focus:outline-none'
          >submit
          </button>
        </form>
      </div>
    </div>
  )
}
