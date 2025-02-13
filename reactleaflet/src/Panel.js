import React, { useEffect, useState } from 'react'

import { Link, Route, Routes, useParams } from "react-router-dom"
import { PanelDashboard } from './PanelDashboard';
import { AddData } from './AddData';
////
import { matchRoutes, useLocation } from "react-router-dom"

const routes = [{ path: "/members/:id" }]

const useCurrentPath = () => {
  const location = useLocation()
  const [{ route }] = matchRoutes(routes, location)
  return route.path
}////get route current


export const Panel = ({setcount,position,setneedmarker}) => {
   const [data1, setdata] = useState([])
   const getData=async()=>{
       let maindata=await fetch('http://127.0.0.1:8000/api/disaster/v1/geoapi/')
       maindata= await maindata.json()
       setdata(maindata)
   }
   
   useEffect(() => {
     getData()
   },[])
  return (
   <div>
      
      <ul className="flex justify-evenly py-2 border-4">
      
          <li className='
          '>
            <Link to="/" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path></svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Risk Alert</span>
             </Link>
          </li>    
          <li className=' '>
             <Link to="/add" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path></svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Report a disaster</span>
             </Link>
          </li>
          
         
          </ul>
   <Routes>
      {/* <Route exact path="/" component={() => <Redirect to={{ pathname: '127.0.0.1:8000/api/utility/v1/shapefile' }} />} /> */}
      <Route path="/" element={<PanelDashboard data={data1} setneedmarker={setneedmarker}/>} />
      <Route path="/shp"
       render={() => window.location = "127.0.0.1:8000/api/utility/v1/shapefile"} />
      <Route path="/add" element={<AddData latlng={position} setcount={setcount} setneedmarker={setneedmarker}/>} />
  </Routes>
  </div>
  )
}
