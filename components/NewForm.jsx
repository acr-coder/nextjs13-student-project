"use client"

import React, {useState} from 'react'
import { useRouter } from "next/navigation";

export default function NewForm() {
    const router = useRouter();

    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [_class, setClass] = useState("")
    const [address, setAddress] = useState("")
    const [image,setImage] = useState("")

    const [error, setError] = useState("")

    

      const handleSubmit = async (event) => {
        event.preventDefault();
        if (
          !fullname ||
          !mobile ||
          !email ||
          !_class ||
          !image 
          
        ) {
          setError("Lütfen tüm alanları doldurunuz")

          
        } else {
          try {
            const res = await fetch("/api/students", {
              method: "POST",
              body: JSON.stringify({
                fullname:fullname,
                email:email,
                mobile:mobile,
                class:_class,
                address:address,
                image:image
              }),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            })

            const data = await res.json();
            // if(data.success === false){
              
            // }
            
            
            
            router.refresh();

            alert("Student Added")
            setFullname("")
            setClass("")
            setEmail("")
            setMobile("")
            setImage("")
            setAddress("")

            router.push("/students")
          } catch (error) {
            console.log(error);
          }
        }
      };
  return (
    
            
                <form onSubmit={handleSubmit} className="w-full lg:w-1/2 mx-auto mt-11  px-6 py-8 rounded shadow-md text-black ">
                    <h1 className="mb-8 text-3xl text-center">Register Student</h1>
                    <h3 className='text-red-500 mb-2' >{error}</h3>
                    <input 
                    value={fullname}
                    onInput={()=> setError("")}
                    onChange={(e)=>(
                      setFullname(e.target.value)
                      
                      )}
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        placeholder="Full Name" />

                    <input 
                    value={mobile}
                    onChange={(e)=>setMobile(e.target.value)}
                    onInput={()=> setError("")}
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="mobile"
                        placeholder="Mobile" />

                    <input 
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    onInput={()=> setError("")}
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />
                    <input 
                    value={address}
                    onChange={(e)=>setAddress(e.target.value)}
                    onInput={()=> setError("")}
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="address"
                        placeholder="Address" />
                        
                    <select value={_class}
                    onInput={()=> setClass("")}
                    onChange={(e)=>setClass(e.target.value)} className="block border border-grey-light w-full p-3 rounded mb-4" name="class" id="">
                    <option >Class</option>
                    <option value="9">Class 9</option>
                <option value="10">Class 10</option>
                <option value="11">Class 11</option>
                <option value="12">Class 12</option>
                    </select>

                    <input 
                    value={image}
                    onChange={(e)=>setImage(e.target.value)}
                   
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="image"
                        placeholder="Image" />    

                                  

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-green text-blue-500 hover:text-white hover:bg-blue-700 focus:outline-none my-1"
                    >Submit</button>                    
                  
                    
                </form>

                
            
        
  )
}
