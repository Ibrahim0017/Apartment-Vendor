import React from 'react'

const Cards = ({text , description, cardImage}) => {
  return (
    <div className='flex flex-col gap-6'>
        <div className='w-full h-40 object-cover '>
            <img className='w-full h-full' src={cardImage} alt="house" />
        </div>

        <div className='flex flex-col gap-1'>
        <div className=' bg-black w-[10px] h-[1px] '></div>
        <div>
            <h3 className='text-[14px] text-[#5E5E5E] font-medium'>{text}</h3>
            <h3 className='text-[13px] text-[#6D706D] font-medium'>{description}</h3>
        </div>
        </div>
    </div>
  )
}

export default Cards