import Announcement from '@/components/Announcement'
import Footer from '@/components/Footer'
import LatestNews from '@/components/LatestNews'
import NewsBanner from '@/components/NewsBanner'
import SoldiersFeatures from '@/components/SoldiersFeatures'
import TopStories from '@/components/TopStories'
import React from 'react'

const page = () => {
  return (
    <div>
      <TopStories />
      <NewsBanner />
      <LatestNews />
      <Announcement />
      <SoldiersFeatures />
      <Footer />
    </div>
  )
}

export default page
