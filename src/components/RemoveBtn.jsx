'use client'

import React from 'react'
import { HiOutlineTrash } from 'react-icons/hi'
import { useRouter } from 'next/navigation'

const RemoveBtn = ({id}) => {

  const router = useRouter();

  const submitDelete = async() =>{
    try {
      await fetch(`/api/topics?id=${id}`,{
        method: "DELETE",
      });
      router.refresh();

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <button className='text-red-400' onClick={submitDelete}>
        <HiOutlineTrash size={24}/>
    </button>
  )
}

export default RemoveBtn