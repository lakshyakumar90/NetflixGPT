import React from 'react'
import ReasonElem from './ReasonElem'
import { joinReasonData } from '../../../utils/Before login/joinReasonData'

const JoinReason = () => {
  return (
    <div className='px-20 pb-5'>
        <h1 className='text-white font-bold text-3xl'>More Reasons to Join</h1>
        <div className='flex gap-2 my-4'>
        {joinReasonData.map((elem, index)=>{
            return <ReasonElem elem={elem} key={index}/>
        })}
        </div>
    </div>
  )
}

export default JoinReason