import React from 'react'
import RecodePill from './RecodePill'

export default function Trending () {
  const list = ['javascript', 'react hooks', 'kotlin anko library',
    'erlang message passing', 'recursive programming', 'promise api',
    'phoenix framework', 'returning in Ruby'
  ]
  return (
    <div className='flex overflow-x-auto'>
      <h2
        className='uppercase font-bold text-xs text-grey4 whitespace-no-wrap flex items-center'
      >trending searches
      </h2>
      {/* overflow can be scrolled */}
      <div className='ml-2 overflow-hidden flex '>
        {list.map((item, idx) => <RecodePill key={idx} pillName={item} />)}
      </div>
    </div>
  )
}
