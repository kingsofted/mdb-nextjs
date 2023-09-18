
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

    // const topics = await getTopics();

  return (
    <>
    {/* {topics.map((t)=>(
        <div className='p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start' key={t._id}>
            <div>
                <h2 className='font-bold text-2xl'>{t.title}</h2>
                <div>{t.description}</div>
                <Image src={`${t.imageURL}`} width={300} height={700} alt='image' priority/>
            </div>

            <div className='flex gap-2'>
                <RemoveBtn id={t._id}/>
                <Link href={`/editTopic/${t._id}`}>
                    <HiPencilAlt size={24}/>
                </Link>
            </div>
        </div>
    ))} */}
        <div className='p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start'>
            <div>
                <h2 className='font-bold text-2xl'>Hello</h2>
                <div>Hello</div>
                <Image src="data:image/jpeg;base64,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" width={300} height={700} alt='image' priority/>
            </div>

        </div>
    </>
  )
}

export default TopicsList