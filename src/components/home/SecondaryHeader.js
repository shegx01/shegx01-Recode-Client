import React from 'react'
import Trending from './secondary header/Trending'

export default function SecondaryHeader () {
  return (
    <div
      className='bg-grey1 border-t border-grey2 pl-4
      h-12 flex items-center'
    >
      <Trending pillName='javascript' />
    </div>
  )
}
