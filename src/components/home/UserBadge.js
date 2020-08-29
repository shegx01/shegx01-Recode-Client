import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useClickAway } from 'use-click-away'

export default function UserBadge () {
  const [isOpen, setIsOpen] = useState(false)
  const navRef = useRef(null)
  useClickAway(navRef, () => setIsOpen(false))
  const handleIsOpen = (_e) => {
    setIsOpen(isOpen => !isOpen)
  }
  return (
    <>
      <button
        className='ml-2 block
             focus:outline-none focus:border-grey3 relative'
        onClick={handleIsOpen}
      >
        <div className='rounded-full overflow-hidden border border-grey2 w-10 h-10'>
          <img
            src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=60&q=60'
            alt='profile pic'
          />
        </div>
        {
          isOpen &&
            <div className='absolute right-0 top-10 bg-fg1 text-grey mt-3 rounded-b-sm shadow-lg' ref={navRef}>
              <ul className='py-2 flex flex-col '>
                <li className='px-2 py-1 hover:bg-grey2 hover:text-fg1 capitalize '>
                  <Link to='subscriptions'>your subscriptions</Link>
                </li>
                <li className='px-2 py-1 hover:bg-grey2 hover:text-fg1 capitalize'>
                  <Link to='/channels'>your channels</Link>
                </li>
                <li className='px-2 py-1 hover:bg-grey2 hover:text-fg1 capitalize'>
                  <Link to='/uploads'>uploads</Link>
                </li>
                <li className='px-2 py-1 hover:bg-grey2 hover:text-fg1 capitalize'>
                  <Link to='/upload'>upload</Link>
                </li>
                <li className='px-2 py-1 hover:bg-grey2 hover:text-fg1 capitalize'>log out</li>
              </ul>
            </div>
        }
      </button>
    </>

  )
}
