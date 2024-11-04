import MemberInfo from "./MembersInfo"
import Sidebar from "./sidebar"



const MemberInfoPage = () => {
  return (
    <div className="flex">
        <Sidebar/>
        <MemberInfo/>
    </div>
  )
}

export default MemberInfoPage