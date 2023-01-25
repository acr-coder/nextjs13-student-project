import React from "react";
import Image from "next/image";

async function getStudent(id) {
  const res = await fetch(`http://localhost:3000/api/students/${id}`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function StudentDetail({ params }) {
  const student = await getStudent(params.studentId);
  

  return (
    <>
      <h1 className="text-gray-900 text-start text-xl font-bold leading-normal  ">
                    {student.data.fullname}
                  </h1>
      <div style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}>
        <div
          className="container max-w-7xl mx-auto "
          style={{ cursor: "auto" }}
        >
          <div className="flex  pt-5">
            
                <div key={student.data._id}
              className=" lg:mb-0 mb-12 "
              
            >
              <div className=" flex flex-col items-center md:flex-row" >
                <img
                  alt={student.data.fullname}
                  src={student.data.image}
                  
                  className="rounded-xl w-8/12 md:w-5/12 lg:w-4/12 shadow-lg max-w-full h-auto mb-3  align-middle border-none undefined"
                  
                />
                <div className="p-5 rounded-3xl  bg-slate-400 ml-5">
                  <h1 className="text-gray-900 w-full text-xl font-bold   ">
                    Personel Information
                  </h1>
                  <h2 className="text-gray-900 md:text-xl w-full   leading-normal mt-0 mb-1 ">
                    Mobile:{student.data.mobile}
                  </h2>
                  <h2 className="text-gray-900 md:text-xl   leading-normal mt-0 mb-1 ">
                    Email: {student.data.email}
                  </h2>
                  <h2 className="text-gray-900 md:text-xl   leading-normal mt-0 mb-1 ">
                    Class: {student.data.class}
                  </h2>
                  <h2 className="text-gray-900 md:text-xl   leading-normal mt-0 mb-1 ">
                    Address: {student.data.address}
                  </h2>
                  
                  
                </div>
                
              </div>
            </div>
              
            
            
          
          </div>
        </div>
      </div>
    </>
  );
}
