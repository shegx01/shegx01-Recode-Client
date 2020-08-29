import React from 'react'
import VideoCard from '../VideoCard'
import PropTypes from 'prop-types'

export default function VideoCategory ({ categoryName }) {
  const cardData = {
    videoTitle: 'Understanding React hooks including useContext, UseLayoutEffect',
    videoSource: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=350&q=80',
    userAvatar: 'https://images.unsplash.com/flagged/photo-1571837360114-edf5dba7b1dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=60&q=40',
    name: 'Andrew Kimnick',
    userRoleTitle: 'frontend developer @ Frendz inc',
    uploadedAt: '3 months ago',
    updatedAt: 'Yesterday',
    codeHosting: {
      hostingLink: 'https://github.com/BuildForSDGCohort2/shegx01-Recode-Client',
      hostingProvider: 'GitHub',
      hostingStarCount: '3,453'
    },
    videoTags: [
      'javascript', 'frontend', 'programming'
    ]
  }
  return (
    <div className='pt-8 px-2 flex flex-col'>
      <h2 className='text-fg1 font-bold text-base capitalize ml-2'>{categoryName}</h2>
      <div className='flex justify-between'>
        <div className='mt-4 w-1/4'>
          <VideoCard videoCardData={cardData} />
        </div>
        <div className='mt-4 w-1/4'>
          <VideoCard videoCardData={cardData} />
        </div>
        <div className='mt-4 w-1/4'>
          <VideoCard videoCardData={cardData} />
        </div>
        <div className='mt-4 w-1/4'>
          <VideoCard videoCardData={cardData} />
        </div>
      </div>
      <div className='flex justify-end'>
        <button className='mr-4 mt-2 capitalize text-link focus:outline-none hover:text-white hover:underline'>view all</button>
      </div>
    </div>
  )
}

VideoCategory.propTypes = {
  categoryName: PropTypes.string.isRequired
}
