import * as React from 'react'
import VideoCategory from '../../components/home/main/VideoCategory'
import DefaultLayout from '../../layout/DefaultLayout'
export default function Index () {
  return (
    <DefaultLayout>
      <div>
        <VideoCategory categoryName='featured videos' />
        <VideoCategory categoryName='most viewed' />
        <VideoCategory categoryName='web programming' />
        <VideoCategory categoryName='mobile programming' />
        <VideoCategory categoryName='server programming' />
        <VideoCategory categoryName='game programming' />
      </div>
    </DefaultLayout>
  )
}
