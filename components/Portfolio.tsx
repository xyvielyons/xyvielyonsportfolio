import React from 'react'
import PortfolioCards from './Cards/PortfolioCards'
const LinkedInIframes = [
  {
    key:"1",
    src:"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7224650480822493184",
    name:"Netflix clone"
  },
  {
    key:"2",
    src:"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7220087756490711040",
    name:"Creating 3d models using freecad and ondsel"
  },
  {
    key:"3",
    src:"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7204451442257047552",
    name:"profitpilot POS(point of sale) and management system"
  },
  {
    key:"4",
    src:"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7232624465711439872",
    name:"Banking and finance management web application"
  },
  {
    key:"5",
    src:"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7231908608072978433",
    name:"Event management system"
  },
  {
    key:"6",
    src:"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7225501325428461568",
    name:"facebook Threads clone"
  },
  
  {
    key:"7",
    src:"https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02pZRLHDzP9kwq2W1oeEPYyWtXSy3dz4ta3qdDf1fVTdakeFvTFXpEEgNAMVpSfy5ml%26id%3D61559700346584&show_text=true",
    name:"Arduino RFID attendance system"
  },
  {
    key:"8",
    src:"https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid024YCPh43NoFqxrrAYX4eK2iDSHtsVGgS98mKoZuss798jg2s6LyeVJ6SsREaf5daPl%26id%3D61559700346584&show_text=true",
    name:"Video sharing app created using appwrite and react native"
  },
  {
    key:"9",
    src:"https://www.facebook.com/plugins/video.php?height=395&href=https%3A%2F%2Fwww.facebook.com%2F61559700346584%2Fvideos%2F407060178528428%2F&show_text=false",
    name:"Know how to use a computer"
  },
]
export default function Portfolio() {
  return (
    <div className='px-4 py-4 mt-2 space-y-2' id='Portfolio'>
      <div className="flex flex-col items-center">
        <h1 className='text-[32px] font-bold text-coolGray800'>Portfolio</h1>
        <p className='text-[16px] text-coolGray600'>A selection of featured and selected projects</p>
      </div>

        <div className="">
          <PortfolioCards LinkedInIframes={LinkedInIframes}/>
        </div>
      </div>


  )
}
