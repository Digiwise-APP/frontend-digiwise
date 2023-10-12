import React, {useState} from 'react'
import icon from '../../../assets/checklist_vector.png'

type OptionProps = {
    optionText : string
}

const Option: React.FC<OptionProps> = ({optionText}) => {
  const [hasCheck, setHasCheck] = useState<boolean>(false)
  return (
    <button className='flex gap-[14px] justify-center items-center py-[13px] px-[15px] rounded-[20px] border-[1px] border-dashed border-[#232686]' onClick={() => setHasCheck(prevCheck => !prevCheck)}>
        <div className={`rounded-[10px] border-[1px] border-[#232686] border-solid w-[40px] h-[40px] p-[1px] flex justify-center items-center
        ${hasCheck ? 'bg-[#8D8EBA]' : '' }`}>
            {hasCheck && <img src={icon} className='w-[27px] h-[19px]' />}
        </div>
        <p className="font-poppins text-[12px] text-black">{optionText}</p>
    </button>
  )
}

export default Option