import React, { useState } from 'react'

export default function FormData () {
  const [videoName, setVideoName] = useState('')
  const handleVideoNameChange = (evt) => {
    evt.persist()
    setVideoName(_videoname => evt.target.value)
  }
  return (
    <>
      <div className='flex'>
        <div className='flex flex-col'>
          <span className='text-grey4 capitalize text-xs pl-px'>video title</span>
          <input
            className='mt-1 p-1 capitalize bg-grey text-white placeholder-grey2
              focus:shadow-outline border border-grey3 focus:outline-none focus:text-fg focus:bg-grey1' type='text'
            placeholder="provide video's title" value={videoName} onChange={handleVideoNameChange}
          />
        </div>

        <div className='flex flex-col ml-8'>
          <span className='text-grey4 capitalize text-xs pl-px'>video url</span>
          <input
            className='mt-1 p-1 capitalize bg-grey text-white placeholder-grey2
              focus:shadow-outline border border-grey3 focus:outline-none focus:text-fg focus:bg-grey1' type='text'
            placeholder="provide video's url" value={videoName} onChange={handleVideoNameChange}
          />
        </div>

        <div className='flex flex-col ml-8'>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <span className='text-grey4 capitalize text-xs pl-px'>video tags</span>
          <input
            className='mt-1 p-1 capitalize bg-grey text-white placeholder-grey2
              focus:shadow-outline border border-grey3 focus:outline-none focus:text-fg focus:bg-grey1' type='text'
            placeholder="video's tags separated by comma" value={videoName} onChange={handleVideoNameChange}
          />
        </div>
      </div>
      <div className='flex mt-8'>
        <div className='flex flex-col'>
          <span className='text-grey4 capitalize text-xs pl-px'>videos thumbnail url</span>
          <input
            className='mt-1 p-1 capitalize bg-grey text-white placeholder-grey2
              focus:shadow-outline border border-grey3 focus:outline-none focus:text-fg focus:bg-grey1' type='text'
            placeholder='picture to display for the video' value={videoName} onChange={handleVideoNameChange}
          />
        </div>

        <div className='flex flex-col ml-8'>
          <span className='text-grey4 capitalize text-xs pl-px'>video source code url</span>
          <input
            className='mt-1 p-1 capitalize bg-grey text-white placeholder-grey2
              focus:shadow-outline border border-grey3 focus:outline-none focus:text-fg focus:bg-grey1' type='text'
            placeholder='url link to the source code' value={videoName} onChange={handleVideoNameChange}
          />
        </div>

        <div className='flex flex-col ml-8'>
          <span className='text-grey4 capitalize text-xs pl-px'>associate video with previous url</span>
          <input
            className='mt-1 p-1 capitalize bg-grey text-white placeholder-grey2
              focus:shadow-outline border border-grey3 focus:outline-none focus:text-fg focus:bg-grey1' type='text' placeholder='link video with previous channel' value={videoName} onChange={handleVideoNameChange}
          />
        </div>
      </div>
    </>
  )
}
