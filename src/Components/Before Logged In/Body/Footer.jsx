import React from 'react'
import { Link } from 'react-router-dom'
import LanguageButton from './LanguageButton'

const Footer = () => {
    const links = [
        "FAQ", "Investor Relations", "Privacy", "Speed Test", "Help Center", "Jobs", "Cookie Preferences", "Legal notices", "Account", "Ways to Watch", "Corporate Information", "Only on Netflix", "Media Center", "Terms of Use", "Contact Us"
    ]

  return (
    <div className='px-20 pb-40 pt-28'>
        <p className='text-[#cacaca]'>Questions? Call 000-800-919-1694</p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 my-10'>
            {links.map((link, index)=>{
                return <Link className='text-[#cacaca] underline' key={index} to="">{link}</Link>
            })}
        </div>
        <LanguageButton />
        <p className='text-[#cacaca] font-semibold mt-10'>Netflix India</p>
    </div>
  )
}

export default Footer