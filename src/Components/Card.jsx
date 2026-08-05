import {Bookmark} from 'lucide-react'


const Card = (props) => {

    console.log(props)

    return(
    <div className="h-100 w-80 bg-white rounded-[2rem] flex flex-col">

        <div className="flex justify-between p-6">
            <img src={props.logo} alt="logo" className="size-10 rounded-full border p-1"  />
            <button className="text-sm border flex px-4 items-center rounded-xl cursor-pointer">Save<Bookmark className='size-4'/></button>
        </div>

        <div className="p-6">
            <h2 className='font-normal text-lg'>{props.company}<span className='font-light text-gray-300 text-sm mx-2'>{props.posted}</span></h2>
            <h1 className='font-semibold text-lg'>{props.post}</h1>
        </div>

        <div className='flex px-8 text-sm' >
            <p className='bg-gray-300 m-2 px-2 py-1 rounded-md'>{props.tag1}</p>
            <p className='bg-gray-300 m-2 px-2 py-1 rounded-md'>{props.tag2}</p>
        </div>

        <hr className="w-70 my-14 mx-4 h-0 text-gray-100"/>
        <div className= '-my-12 flex justify-between'>
            <div className='p-6'>
                <h1 className='font-bold'>{props.pay}</h1>
                <p>{props.location}</p>
            </div>
            <button className='bg-black text-white text-sm px-4 my-8 mx-6 rounded-md font-normal cursor-pointer'>Apply Now</button>
        </div>

    </div>
    )
}

export default Card