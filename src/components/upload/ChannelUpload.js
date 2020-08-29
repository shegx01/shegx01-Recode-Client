import React, { useState } from 'react'
import FormData from './FormData'

export default function ChannelUpload () {
  const [formCount, setFormCount] = useState(1)
  const handleFormCountUpdate = (_e) => setFormCount(formCount => formCount + 1)
  return (
    <div className='mt-8'>
      <div className='flex items-center content-center '>
        <form onSubmit={e => e.preventDefault()}>

          <div className='flex pb-4 border-b border-grey1 w-full'>
            <div className='flex flex-shrink-0 flex-col'>
              <span className='text-grey4 capitalize text-xs pl-px'>channel title</span>
              <input
                className='mt-1 p-1 capitalize bg-grey text-grey placeholder-grey2
              focus:shadow-outline border border-grey3 focus:outline-none focus:text-fg1 focus:bg-fg' type='text'
                placeholder="provide video's title"
              />
            </div>

            <div className='flex flex-shrink-0 flex-col ml-8'>
              <span className='text-grey4 capitalize text-xs pl-px'>channel tags</span>
              <input
                className='mt-1 p-1 capitalize bg-grey text-grey placeholder-grey2
              focus:shadow-outline border border-grey3 focus:outline-none focus:text-fg1 focus:bg-fg' type='text'
                placeholder="provide video's url"
              />
            </div>
          </div>
          {
            [...Array(formCount)].map((_, idx) => (
              <div key={idx} className='mt-6'>
                <h4 className='py-4 text-fg1 text-xxs tracking-wider uppercase font-bold'>video upload {idx + 1}</h4>
                <FormData />
              </div>
            ))
          }
          <div className='flex items-center mt-4'>
            <button
              className='bg-success px-2 py-1 capitalize hover:text-grey hover:bg-success1 focus:outline-none'
            >submit
            </button>
            <button
              onClick={handleFormCountUpdate}
              className='ml-auto font-bold text-xxs uppercase focus:outline-none
              focus:bg-grey-2 focus:text-fg flex items-center border border-grey3 px-1 text-fg1'
            >
              <span className='font-normal pr-1 text-lg'>
                +
              </span>new video form
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
