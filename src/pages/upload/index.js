import React, { useState } from 'react'
import DefaultLayout from '../../layout/DefaultLayout'
import SingleUpload from '../../components/upload/SingleUpload'
import ChannelUpload from '../../components/upload/ChannelUpload'
export default function UploadVideoPage () {
  const [channelUploadType, setChannelUploadType] = useState(false)
  const toggleUploadType = (_e) => setChannelUploadType(channelUploadType => !channelUploadType)
  return (
    <DefaultLayout>
      <div className='mt-8'>
        <div className='flex mx-4 items-center '>
          <div className='flex justify-between w-full'>
            <h2 className='text-fg1 capitalize font-bold'>{
              channelUploadType ? 'channels upload form' : 'Video upload form'
            }
            </h2>
            <button onClick={toggleUploadType} className='text-link underline focus:outline-none hover:text-white'>change to channels</button>
          </div>
        </div>
        <div className='mt-4 px-4 flex justify-center border-t border-grey1 pt-2'>
          {
            channelUploadType ? <ChannelUpload /> : <SingleUpload />
          }
        </div>
      </div>
    </DefaultLayout>
  )
}
