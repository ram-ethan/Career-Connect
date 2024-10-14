import React, { useState } from 'react'

const SearchBar = (props) => {


    const [jobCriteria, setJobCreteria] = useState({ title: "", location: "", experience: "", type: "" });
    const handleCahnge = (e) => {
        setJobCreteria((prev) => ({
            ...prev, [e.target.name]: e.target.value
        }))

    }
    const search = async () => {
        console.log(jobCriteria)
        await props.customFetchJob(jobCriteria);
    }

    return (
        <div className='flex gap-4 my-10 justify-center px-10'>
            <select onChange={handleCahnge} value={jobCriteria.title} name="title" className='w-64 pl-4 bg-zinc-200 font-semibold rounded-md'>
                <option value="" disabled hidden selected>Job Role</option>
                <option value="iOS Developer">iOS Developer</option>
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="Backend Developer">Backend Developer</option>
                <option value="Android Developer">Android Developer</option>
                <option value="Developer Advocate">Developer Advocate</option>
            </select>

            <select onChange={handleCahnge} value={jobCriteria.type} name="type" className='w-64 pl-4 bg-zinc-200 font-semibold rounded-md'>
                <option value="" disabled hidden selected>Job Type</option>
                <option value="Full Time">Full-Time</option>
                <option value="Part Time">Part-Time</option>
                <option value="Contract">Contract</option>

            </select>
            <select onChange={handleCahnge} value={jobCriteria.location} name="location" className='w-64 pl-4 bg-zinc-200 font-semibold rounded-md'>
                <option value="" disabled hidden selected>Location</option>
                <option value="Remote">Remote</option>
                <option value="In-Office">In-Office</option>
                <option value="Hybrid">Hybrid</option>

            </select>
            <select onChange={handleCahnge} value={jobCriteria.experience} name="experience" className='w-64 pl-4 bg-zinc-200 font-semibold rounded-md'>
                <option value="" disabled hidden selected>Experience</option>
                <option value="Fresher">Fresher</option>
                <option value="Junior Level">Junior Level</option>
                <option value="Mid Level">Mid Level</option>
                <option value="Senior Level">Senior Level</option>

            </select>
            <button onClick={search} className=' w-64 bg-blue-500 text-white font-bold py-3 rounded-md'>Search</button>
        </div>
    )
}

export default SearchBar
