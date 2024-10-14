import logo from './logo.svg';
import './App.css';
import Navbar from './comp/Navbar';
import SearchBar from './comp/SearchBar';
import Header from './comp/Header';
import JobCard from './comp/JobCard';
import DummyData from './DummyData';
import { useEffect, useState } from 'react';
import { db } from './config/firebase';
import { collection, getDocs, where, query, orderBy } from 'firebase/firestore';
import { set } from 'firebase/database';
function App() {
  const [custom, setCustom] = useState(false);
  const [jobs, setJob] = useState([]);
  const fetchJob = async () => {
    setCustom(false);
    const querryRef = query(collection(db, "jobs"));
    const q = query(querryRef, orderBy("postedOn", "desc"))
    const querySnapShot = await getDocs(q);
    const tempJobs = [];
    querySnapShot.forEach((job) => {
      tempJobs.push({ ...job.data(), id: job.id, postedOn: job.data().postedOn.toDate() });
    });

    setJob(tempJobs);

  }
  const customFetchJob = async (jobCriteria) => {
    setCustom(true);
    const querryRef = query(collection(db, "jobs"));
    const q = query(querryRef, where('experience', '==', jobCriteria.experience), where('location', '==', jobCriteria.location), where('title', '==', jobCriteria.title), where('type', '==', jobCriteria.type), orderBy("postedOn", "desc"))
    const querySnapShot = await getDocs(q);
    const tempJobs = [];
    querySnapShot.forEach((job) => {
      // console.log(doc.id, "=>", doc.data());
      tempJobs.push({ ...job.data(), id: job.id, postedOn: job.data().postedOn.toDate() });
    });
    console.log("sdfsdf", tempJobs);

    setJob(tempJobs);

  }

  useEffect(() => {
    fetchJob();
  }, []);
  return (
    <div >

      <Navbar />
      <Header />
      <SearchBar customFetchJob={customFetchJob} />
      {
        custom && <button className='flex pl-[1050px] mb-2' onClick={fetchJob} >
          <p className='bg-blue-500 px-10 py-2 rounded-md text-white'>Clear Filter</p>
        </button>
      }
      {
        jobs.map((job) => (

          <JobCard key={job.id} {...job} />
        ))}


    </div>
  );
}

export default App;
