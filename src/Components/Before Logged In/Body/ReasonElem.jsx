import React from 'react'

const ReasonElem = ({elem}) => {
    const{title, svg} = elem;
  return (
    <div className='h-32 w-[19rem] bg-[rgb(58,58,58)] mr-2 rounded-2xl overflow-hidden relative text-slate-200'>
        <p className='px-4 pr-8 py-4 font-bold text-lg'>{title}</p>
        <div className='h-14 w-14 absolute bottom-4 right-6'>
            {svg}
        </div>
    </div>
  )
}

export default ReasonElem