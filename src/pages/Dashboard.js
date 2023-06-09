import {useEffect} from 'react'

const Dashboard = () => {
  const fetchData = async() =>{
    try {
      const response = await fetch('/data.json')
      // const response = await fetch('https://localhost:4998/')
      // const response = await fetch('/api/v1')
      const data = await response.json()
      console.log(data)
    } catch(error){
      console.log(error)
    }
  }
  useEffect(() => {
    fetchData()
  },[])
  return (
    <div>Dashboard Pages</div>
  )
}
 
export default Dashboard