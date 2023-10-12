import React from 'react'

type OptionProps = {
    optionText : string
}

const Option: React.FC<OptionProps> = ({optionText}) => {
  return (
    <div className='flex gap-[14px] justify-center items-center py-[13px] px-[15px] rounded-[20px] border-[1px] border-dashed border-[#232686]'>
        <div className='rounded-[10px] border-[1px] border-[#232686] border-solid w-[40px] h-[40px]'>
        </div>
        <p className="font-poppins text-[12px] text-black">{optionText}</p>
    </div>
  )
}

export default Option