'use client'

import React from 'react'
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const page = () => {

  const router = useRouter();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");


  const handleSubmit = async(e) =>{
    e.preventDefault();
    // const title = e.target[0].value;
    // const description = e.target[1].value;
    // const imageURL = e.target[2].value;

    if(!title || !description || !imageURL){
      alert("Please enter all field !");
      return;
    }

    try {

      // await fetch("http://localhost:3000/api/topics");
      // Client component dont need full address
      const res = await fetch("/api/topics",{
        method: "POST",
        headers:{
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          imageURL,
        }),
      });
      // Display a success alert
      if(res.ok){
        router.refresh();
        router.push("/");
      } else {
        throw new Error("Failed to create a topic");
      }
    
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
        <input className="border border-slate-500 px-8 py-2" type='text' placeholder='Topic Title' onChange={(e) => setTitle(e.target.value)}/>
        <input className="border border-slate-500 px-8 py-2" type='text' placeholder='Topic Description' onChange={(e) => setDescription(e.target.value)}/>
        <input className="border border-slate-500 px-8 py-2" type='text' placeholder='Topic Image Url' onChange={(e)=>setImageURL(e.target.value)}/>

        <button className='bg-green-600 font-bold text-white py-3 px-6 w-fit' type='submit'>
            Add Topic
        </button>
    </form>
  )
}

export default page