"use client"

import React,{useState} from 'react'
import { GiHamburgerMenu } from "react-icons/gi"
import { Disclosure, Transition } from '@headlessui/react'
import { MdOutlineSpaceDashboard } from "react-icons/md"
import Link from 'next/link'

export default function Sidebar({studentList}) {
  const _classes = ["9","10","11","12"]
  
  return (
    <div>        
        <Disclosure as="nav" >
           <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white hover:bg-gray-900 group " >
            <GiHamburgerMenu className='block  h-6 w-6'  aria-hidden="true" />            
        </Disclosure.Button> 
        <div className='p-6 w-1/2 h-screen bg-white z-20 fixed top-0 -left-96 lg:w-72 lg:left-0 peer-focus:left-0 peer:transition ease-out delay-150 duration-1000 overflow-y-auto' >    

                <div className="flex flex-col justify-start items-start ">
                    <h1 className='text-blue-900 text-center cursor-pointer font-bold border-b border-gray-900 pb-4 w-full' >School System</h1>
                    <div className="my-4 border-b border-gray-100 pb-4  ">                        
                        <Link href="/students/new-student"  >
                          <div className="flex mb-2  justify-start items-center gap-4 pl-1 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg">
                            
                            <h3 className="text-gray-800  group-hover:text-white font-semibold  ">New Student</h3>
                         </div>
                        </Link>
                        
                        
                        
                         <Disclosure as="div" >
                            
      <Disclosure.Button className="hover:bg-gray-900 p-2 pl-1 mb-2 rounded-md group cursor-pointer hover:shadow-lg  hover:text-white font-semibold  " >
        Students
      </Disclosure.Button>

      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Disclosure.Panel className="flex flex-col" >

        {_classes.map((classNo) => (
          <Disclosure as="div" key={classNo} >
            
                <Disclosure.Button className="hover:bg-gray-900 p-2 ml-5 mb-2 rounded-md group cursor-pointer hover:shadow-lg border-l-4 border-orange-500 hover:border-orange-500  hover:text-white font-semibold  ">Class {classNo}</Disclosure.Button>
                       
      

      <Transition      
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"                
      >
        <Disclosure.Panel className="flex flex-col justify-start items-end border-b-2 border-orange-500 mb-2" >            
          
          <Link className=" p-2 ml-10 mb-2 w-full border border-orange-300 hover:bg-orange-500 rounded-md group cursor-pointer hover:shadow-lg  hover:text-white font-semibold  " href={`/students/${classNo}`} >{studentList.filter(item => item.class === classNo).length > 0 ? `View All (${studentList.filter(item => item.class === classNo).length}) Students` : "No Students" }</Link>
          {studentList.filter((item)=>item.class === classNo).map((student) => (
          <Link key={student._id} className=" p-2 ml-10 mb-2 w-full border border-orange-300 hover:bg-orange-500 rounded-md group cursor-pointer hover:shadow-lg  hover:text-white font-semibold  " href={`/students/9/${student._id}`} >{student.fullname}</Link>

          ))}
          
        </Disclosure.Panel>
      </Transition>
    </Disclosure>
        ))}

        
        
       
        
        </Disclosure.Panel>
      </Transition>
    </Disclosure>
                         
                        
                    </div>
                </div>

        </div>        
        
        </Disclosure>
        
    </div>
  )
}
