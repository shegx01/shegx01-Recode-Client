import * as React from 'react'
import PropTypes from 'prop-types'
import RecodePill from './secondary header/RecodePill'
export default function VideoCard ({ videoCardData }) {
  const { videoTitle, videoSource, userAvatar, name, userRoleTitle, uploadedAt, updatedAt, codeHosting, videoTags } = videoCardData
  const { hostingLink, hostingProvider, hostingStarCount } = codeHosting
  return (
    <div className='rounded-sm overflow-hidden border border-grey2 mx-2'>
      <div>
        <img
          className='h-48 w-full object-cover'
          src={videoSource}
          alt='card video'
        />
      </div>
      <div className='pt-4 bg-grey1'>
        <div className='flex items-center px-2'>
          <div className='w-3/4 '>
            <p className='text-xs break-normal '>
              {videoTitle}
            </p>
          </div>
          <div className='w-1/4 flex flex-col items-end'>
            <div className='w-12 h-12 rounded-sm overflow-hidden'>
              <img
                className='object-cover'
                src={userAvatar}
                alt='user avatar'
              />
            </div>
          </div>
        </div>
        <div className='px-2 '>
          <h4 className='mt-2 flex flex-col items-end'>
            <span className='text-xxs capitalize font-bold mt'>
              {name}
            </span>
            <span className='text-sm text-xxs uppercase tracking-wider text-grey4'>{userRoleTitle}</span>
          </h4>
          <div className='flex mt-2 justify-around'>
            {
              videoTags.map((tag, idx) => (
                <RecodePill key={idx} pillName={tag} isCard />
              ))
            }
          </div>
        </div>
        <div className='mt-4 text-success1 px-2 text-xxs'>
          <span>Uploaded {uploadedAt} Updated {updatedAt}</span>
        </div>
        <div className='mt-4 flex bg-grey2 px-2 py-2'>
          <a className='text-link text-xxs' href={hostingLink} target='_blank' rel='noopener noreferrer'>Source code hosted on {hostingProvider}</a>
          <div className='flex ml-auto items-center'>
            <div>
              <svg
                width='16' height='16' fill='none' xmlns='http://www.w3.org/2000/svg'
              ><path fillRule='evenodd' clipRule='evenodd' d='M2.865 14.351c-.078.444.36.791.746.593L8 12.688l4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.464.293a.513.513 0 00-.927 0L5.353 4.621l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73v-.002zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 00-.163-.505l-2.906-2.77L5.76 5.67a.525.525 0 00.393-.288L8 1.724l1.846 3.658a.525.525 0 00.393.288l4.052.575-2.906 2.77a.564.564 0 00-.163.506l.694 3.957-3.686-1.894a.504.504 0 00-.461 0z' fill='#D7DCE7' />
              </svg>
            </div>
            <span className='pl-1 text-link'>{hostingStarCount}</span>
            <span className='pl-1 '>stars</span>
          </div>
        </div>
      </div>
    </div>
  )
}

VideoCard.propTypes = {
  videoCardData: PropTypes.object.isRequired
}
