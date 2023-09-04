import React from 'react'
import {BiTimeFive} from 'react-icons/bi'
import logo3 from '../../Assets/logo3.jpg'
import logo2 from '../../Assets/logo2.jpg'
import logo1 from '../../Assets/logo1.jpg'

const Data = [
  {
    id:1,
    image:logo3,
    title:'Web Devloper',
    time:'Now',
    location:'Canada',
    desc:'I am a web devloper. I from  canada.I make a responsive Portfolio Website',
    company:'Novac Linus co.'
  },
  {
    id:2,
    image:logo2,
    title:'UI Designer',
    time:'14Hrs',
    location:'America',
    desc:'I am a web devloper. I from  America.I make a responsive Portfolio Website',
    company:'Liquid Accessments'
  },
  {
    id:3,
    image:logo1,
    title:'Software Eng',
    time:'10Hrs',
    location:'Austria',
    desc:'I am a web devloper. I from  Austria.I make a responsive Portfolio Website',
    company:'Web Tech-Agency'
  },
  {
    id:4,
    image:logo1,
    title:'Ui/Ux Designer',
    time:'10H',
    location:'Germany',
    desc:'I am a web devloper. I from  Austria.I make a responsive Portfolio Website',
    company:'Government'
  },
  {
    id:5,
    image:logo1,
    title:'Software Eng',
    time:'10Hrs',
    location:'Austria',
    desc:'I am a web devloper. I from  Austria.I make a responsive Portfolio Website',
    company:'Web Tech-Agency'
  },
  {
    id:6,
    image:logo1,
    title:'Software Eng',
    time:'10Hrs',
    location:'Austria',
    desc:'I am a web devloper. I from  Austria.I make a responsive Portfolio Website',
    company:'Web Tech-Agency'
  },
  {
    id:3,
    image:logo1,
    title:'Software Eng',
    time:'10Hrs',
    location:'Austria',
    desc:'I am a web devloper. I from  Austria.I make a responsive Portfolio Website',
    company:'Web Tech-Agency'
  },
  {
    id:3,
    image:logo1,
    title:'Data Scientist',
    time:'2 Days',
    location:'Turkey',
    desc:'I am a web devloper. I from  Austria.I make a responsive Portfolio Website',
    company:'Nome And Sons'
  }


]




const Jobs = () => {
  return (
    <div>
      <div className="jobContainer flex  gap-10 justify-center flex-wrap items-center py-10">
     
     {
      Data.map(({id,image,title,time,location,desc,company})=>{
        return (
          <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded [10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">


 <span className='flex justify-between items-center gap-4'>
  <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>{title}</h1>
  <span className='flex items-center text-[#ccc] gap-1'>
  <BiTimeFive/>{time}
</span>
 </span>
<h6 className='text-[#ccc]'>{location}</h6>

<p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px]
group-hover:text-white'>
{desc} </p>

<div className='company flex items-center gap-2 '>
  <img src={image} alt="Company Logo" className='w-[10%]' />
  <span className='text-[14px] py-[1rem] block-hover:text-white'>{company}</span>
</div>

<button className=' border-[2px] rounded-[10px] block p-[10px]w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white'>Apply Now</button>

</div>

        )
      })
     }

      </div>
    </div>
  )
}

export default Jobs;