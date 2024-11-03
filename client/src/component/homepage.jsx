import Sidebar from "./sidebar"
import TeamName from "./TeamList"



const Home = () => {
  console.log("homepage rendered");
  
  return (
    
    <div className="flex"><Sidebar/>
    <TeamName/>
       </div>
  )
}

export default Home