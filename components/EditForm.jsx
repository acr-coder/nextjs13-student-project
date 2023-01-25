"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditForm({ studentData }) {
  const router = useRouter();

  const [fullname, setFullname] = useState(studentData.fullname);
  const [email, setEmail] = useState(studentData.email);
  const [mobile, setMobile] = useState(studentData.mobile);
  const [_class, setClass] = useState(studentData.class);
  const [address, setAddress] = useState(studentData.address);
  const [image, setImage] = useState(studentData.image);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("/api/students/" + studentData._id, {
        method: "PUT",
        body: JSON.stringify({
          fullname: fullname,
          email: email,
          mobile: mobile,
          class: _class,
          address: address,
          image: image,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      alert("Student Info Updated");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch("/api/students", {
        method: "DELETE",
        body: JSON.stringify({ id: id }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        alert("Student Deleted");

        router.push("/students");
      }
      router.refresh();
    } catch (error) {}
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-wrap w-full lg:w-1/2 mx-auto  bg-slate-600  px-6 py-2 rounded shadow-md text-black "
    >
      <h1 className="mb-2 text-3xl text-center">Student Information</h1>

      <input
        value={fullname}
        onChange={(e) => setFullname(e.target.value)}
        type="text"
        className="block border border-grey-light w-full p-3 rounded mb-4"
        name="fullname"
        placeholder="Full Name"
      />

      <input
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        type="text"
        className="block border border-grey-light w-full p-3 rounded mb-4"
        name="mobile"
        placeholder="Mobile"
      />

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        className="block border border-grey-light w-full p-3 rounded mb-4"
        name="email"
        placeholder="Email"
      />
      <input
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        type="text"
        className="block border border-grey-light w-full p-3 rounded mb-4"
        name="address"
        placeholder="Address"
      />

      <select
        value={_class}
        onInput={() => setClass("")}
        onChange={(e) => setClass(e.target.value)}
        className="block border border-grey-light w-full p-3 rounded mb-4"
        name="class"
        id=""
      >
        <option>Class</option>
        <option value="9">Class 9</option>
        <option value="10">Class 10</option>
        <option value="11">Class 11</option>
        <option value="12">Class 12</option>
      </select>

      <input
        value={image}
        onChange={(e) => setImage(e.target.value)}
        type="text"
        className="block border border-grey-light w-full p-3 rounded mb-4"
        name="image"
        placeholder="Image"
      />

      <div className="w-full flex justify-between">
        <button
          type="submit"
          className="px-2 py-1 rounded-xl text-green-500 bg-white md:text-xl hover:bg-green-500 hover:text-white  leading-normal mt-0 mb-1 "
        >
          Edit
        </button>
        <button
          type="button"
          onClick={() => handleDelete(studentData._id)}
          className="px-2 py-1 rounded-xl text-red-500 bg-white md:text-xl hover:bg-red-500 hover:text-white  leading-normal mt-0 mb-1 "
        >
          Delete
        </button>
      </div>
    </form>
  );
}
