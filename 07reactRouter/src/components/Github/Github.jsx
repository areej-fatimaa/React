import { useLoaderData } from 'react-router-dom';
function Github() {
    const data = useLoaderData();
    // const [data, setData] = React.useState([]);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/areejfatimaa')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers: {data.followers}
    <img className='mx-auto' src={data.avatar_url} alt="git picture" width={300}/>
    </div>
  )

}

export default Github

export const githubIngoLoader=async()=>{
    const response = await fetch('https://api.github.com/users/areejfatimaa');
    if(!response.ok){
        throw new Error("Failed to fetch data");
    }
    return response.json();
}