import Link from 'next/link'
import React from 'react'

const NewsBanner = () => {
  return (
    <div className="bg-[url('/banner-bg.jpg')] bg-cover bg-no-repeat bg-center w-full text-center px-[15px] py-[25px] bg-bannerColor text-snow text-[18px]">
      <Link href={``}>
        <span className='text-yellowGold font-semibold'>Newsroom:</span>
        Resources for journalists and media outlets
      </Link>
    </div>
  )
}

export default NewsBanner
