'use client'
import React from 'react'
import { useRouter } from 'next/navigation'



const EditTopicForm = ({id,title,description,imageURL}) => {

  const router = useRouter();
  
  const handleSubmit = async(e) =>{
    e.preventDefault();
    const title = e.target[0].value;
    const description = e.target[1].value;
    const imageURL = e.target[2].value;
    
    if(!title || !description || !imageURL){
      alert("Please enter all field !");
      return;
    }

    try {
      // client component dont need full api address
      const result = await fetch(`/api/topics/${id}`,{
        method:"PUT",
        headers:{
          "Content-type":"application/json",
        },
        body:JSON.stringify({title,description,imageURL}),
      });

      if(!result.ok){
        throw new Error("Result not ok");
      }
      router.refresh();
      router.push("/");
      
    } catch (error) {
      throw new Error("Error Updating Submiting");
    }

  }


  return (
    <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
        <input className="border border-slate-500 px-8 py-2" type='text' defaultValue={`${title}`}/>
        <input className="border border-slate-500 px-8 py-2" type='text' defaultValue={`${description}`}/>
        <input className="border border-slate-500 px-8 py-2" type='text' defaultValue={`${imageURL}`}/>

        <button className='bg-green-600 font-bold text-white py-3 px-6 w-fit' type='submit'>
            Update Topic
        </button>
    </form>
  )
}

export default EditTopicForm