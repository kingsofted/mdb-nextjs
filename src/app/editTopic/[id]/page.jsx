import EditTopicForm from '@/components/EditTopicForm'
import React from 'react'

// get data need to put full api end point address
const fetchData = async(id) =>{

  const apiUrl = process.env.API_URL;

  try {
    const result = await fetch(`${apiUrl}/api/topics/${id}`,{
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


const EditTopic = async({params}) => {

  const id = params.id;

  const data = await fetchData(id);
  console.log(data);

  const {title,description,imageURL} = data;


  return (
    <EditTopicForm id={id} title={title} description={description} imageURL={imageURL}/>
  )
}

export default EditTopic