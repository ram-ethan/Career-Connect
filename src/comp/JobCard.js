import React from 'react'

const JobCard = (props) => {
    const dayjs = require('dayjs');
    dayjs().format();
    const skills = ["JavaScript", "React", "NodeJs"];
    const date1 = dayjs(Date.now());
    const diffDays = date1.diff(props.postedOn, "day");
    return (
        <div className='mx-40 mb-4 '>
            <div className='flex justify-between items-center px-6 py-4 bg-zinc-200  rounded-md border border-black shadow-lg hover:border-blue-500 hover:translate-y-1 hover:scale-103'>
                <div className='flex flex-col gap-3 items-start'>
                    <h1 className='text-lg font-semibold'>{props.title} - {props.company}</h1>
                    <p>
                        {props.type} &#x2022; {props.experience} &#x2022; {props.location}
                    </p>
                    <div className='flex  item-center gap-2'>
                        {(props.skills).map((skill, index) => (
                            <p key={index} className='cursor-pointer text-gray-500 py-1 px-2 rounded-md border border-black hover:bg-blue-500 hover:text-white hover:border-blue-400'>{skill}</p>
                        ))}
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <p className='  text-gray-500'>Posted {diffDays > 1 ? `${diffDays} days ago` : diffDays !== 0 ? `${diffDays} day ago` : `Today`}  </p>
                    <a href={props.jobLink} target='_blank'>

                        <button className='text-blue-500 border border-blue-500 px-10 py-2 rounded-md  hover:bg-blue-500 hover:text-white'>Apply</button>
                    </a>

                </div>
            </div>
        </div>
    )
}

export default JobCard
