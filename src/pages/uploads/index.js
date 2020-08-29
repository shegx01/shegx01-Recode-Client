import React from 'react'
import DefaultLayout from '../../layout/DefaultLayout'

export default function UploadsPage () {
  return (
    <DefaultLayout>
      <div className='mt-8'>
        <div>
          <span
            className='ml-4 capitalize text-fg1 font-bold text-base'
          >your uploaded data
          </span>
          <div className='mt-4 mx-2 font-bold flex justify-between'>
            {
              [...Array(4)].map((_, idx) => (
                <div key={idx}>upload</div>
              ))
            }
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}
