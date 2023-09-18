import EditTopicForm from '@/components/EditTopicForm'
import React from 'react'

// get data need to put full api end point address
const fetchData = async(id) =>{
  try {
    const result = await fetch(`http://localhost:3000/api/topics/${id}`,{
      cache: 'no-store',
    });
    
    if(!result.ok){
      throw new Error("Error");
    }

    return result.json();
    
  } catch (error) {
    return new Error("Error updating topics");
  }
}


const page = async({params}) => {

  const id = params.id;

  const data = await fetchData(id);
  console.log(data);

  const {title,description,imageURL} = data;


  return (
    <EditTopicForm id={id} title={title} description={description} imageURL={imageURL}/>
  )
}

export default page