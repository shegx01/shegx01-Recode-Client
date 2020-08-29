import React from 'react'
import DefaultLayout from '../../layout/DefaultLayout'
import VideoCard from '../../components/home/VideoCard'

export default function SubscriptionPage () {
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
    <DefaultLayout>
      <div className='mt-8'>
        <div>
          <span
            className='ml-4 capitalize text-fg1 font-bold text-base'
          >your subscriptions
          </span>
          <div className='mt-4 mx-2 font-bold flex justify-between'>
            {
              [...Array(4)].map((_, idx) => (
                <VideoCard key={idx} videoCardData={cardData} />
              ))
            }
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}
