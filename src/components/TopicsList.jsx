
import RemoveBtn from './RemoveBtn'
import Link from 'next/link'
import {HiPencilAlt} from 'react-icons/hi'
import Image from 'next/image'

const getTopics = async() =>{

    const apiUrl = process.env.API_URL;

    try{
        const res = await fetch(`${apiUrl}/api/topics`,{
            cache: 'no-store',
        });

        if(!res.ok){
            throw new Error("Failed to fetch topics");
        }

        return res.json();

    }catch(error){
        console.log("Error loading topics: ", error);
    }
}


const TopicsList = async() => {

    const topics = await getTopics();

  return (
    <>
    {topics.map((t)=>(
        <div className='p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start' key={t._id}>
            <div>
                <h2 className='font-bold text-2xl'>{t.title}</h2>
                <div>{t.description}</div>
                {/* <Image src={`${t.imageURL}`} width={300} height={700} alt='image' priority/> */}
            </div>

            <div className='flex gap-2'>
                <RemoveBtn id={t._id}/>
                <Link href={`/editTopic/${t._id}`}>
                    <HiPencilAlt size={24}/>
                </Link>
            </div>
        </div>
    ))}
    </>
  )
}

export default TopicsList