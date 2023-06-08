import {useEffect} from 'react'

const Dashboard = () => {
  const fetchData = async() =>{
    try {

    } catch(error){
      console.log(error)
    }
    const response = await fetch('https://localhost:5000/')
    const data = await response.json()
    console.log(data)
  }
  useEffect(() => {
    fetchData()
  },[])
  return (
    <div>Dashboard Pages</div>
  )
}
 
export default Dashboard