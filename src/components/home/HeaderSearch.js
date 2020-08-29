import React, { useState } from 'react'
import HeaderSearchItem from './HeaderSearchItem'

export default function HeaderSearch () {
  // eslint-disable-next-line no-unused-vars
  const [searchItem, setSearchItem] = useState('')
  const handleSearchChange = (evt) => {
    console.log(evt)
    evt.persist()
    setSearchItem(() => evt.target.value)
  }

  const searchResult = [
    'introduction to Javascript scope and closure',
    'Message passing in Erlang'
  ]
  return (
    <div className='relative'>
      <div className='border border-grey2 bg-grey flex items-center relative'>
        <svg
          className='absolute ml-1' width='20' height='20' viewBox='0 0 24 24' fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M11 19a8 8 0 100-16 8 8 0 000 16z' stroke='#B4B6BB' strokeWidth='2' strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path d='M21 21l-4.35-4.35' stroke='#B4B6BB' />
        </svg>
        <input
          className='bg-grey outline-none focus:border-fg focus:bg-grey py-2 pl-8
              placeholder-grey4 text-xs text-white w-64 focus:placeholder-fg'
          type='text' placeholder='Search Videos Channels or Users'
          value={searchItem}
          onChange={handleSearchChange}
        />
      </div>
      {
        searchItem ? (<div className='absolute mt-4 border border-grey3  bg-fg1 text-grey flex flex-col flex-no-wrap w-full'>
          {
            searchResult.map((item, idx) => (
              idx === searchResult[searchResult.length - 1] ? <HeaderSearchItem key={idx} resultItem={item} lastItem /> : <HeaderSearchItem key={idx} resultItem={item} />
            ))
          }
        </div>)
          : null
      }
    </div>
  )
}
