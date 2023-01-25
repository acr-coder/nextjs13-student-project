import React from "react";
import Image from "next/image";
import Link from "next/link";

async function getStudent() {
  const res = await fetch(`http://localhost:3000/api/students`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Class({ params }) {
  const studentData = await getStudent();
  const studentList = await studentData.data.filter(
    (item) => item.class === params.class
  );

  return (
    <>
      <div>
        <h1 className="text-pink-900 text-start text-6xl font-bold leading-normal " >Class {params.class}</h1>
      </div>
      <div style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}>
        <div
          className="container max-w-7xl mx-auto px-4"
          style={{ cursor: "auto" }}
        >
          <div className="flex flex-wrap pt-5">
            {
              studentList.map((student) => (
                <div key={student._id}
              className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 cursor-pointer hover:scale-110 transition-transform"
                        
            >
              <Link href={`/students/${params.class}/${student._id}`} >
                <div className="px-6" style={{ cursor: "auto" }}>
                <img
                  alt={student.fullname}
                  src={student.image}
                  className="rounded-xl shadow-lg max-w-full h-auto align-middle  border-none undefined"
                  style={{ cursor: "auto" }}
                />
                <div className="pt-2 text-center">
                  <h1 className="text-gray-900 text-xl font-serif font-bold leading-normal mt-0 mb-1">
                    {student.fullname}
                  </h1>
                  
                </div>
              </div>
              </Link>
              
            </div>
              ))
            }
            
          
          </div>
        </div>
      </div>
    </>
  );
}
