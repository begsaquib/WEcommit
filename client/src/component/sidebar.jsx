import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuopen = useSelector((store) => store.app.isMenuopen);

  if (!isMenuopen) return null; //Early return

  return (
    <div className=" shadow-lg  p-4 w-50 h-full bg-blue-500">
      <div className="mb-3">
        <ul>
        <Link to="/home"> <li  className=" font-bold p-2 m-2 cursor-pointer">Teams</li></Link>
          
          <li className=" font-bold p-2 m-2 cursor-pointer">user list</li>
          <li className=" font-bold p-2 m-2"></li>
          <li className=" font-bold p-2 m-2"></li>
          <li className=" font-bold p-2 m-2"></li>
          <li className=" font-bold p-2 m-2"></li>
          <li className=" font-bold p-2 m-2"></li>
          <li className=" font-bold p-2 m-2"></li>
          <li className=" font-bold p-2 m-2"></li>
          <li className=" font-bold p-2 m-2"></li>
          <li className=" font-bold p-2 m-2"></li>
          <li className=" font-bold p-2 m-2"></li>
          <li className=" font-bold p-2 m-2"></li>
          <li className=" font-bold p-2 m-2"></li>
          <li className=" font-bold p-2 m-2"></li>
          <li className=" font-bold p-2 m-2"></li>
          <li className=" font-bold p-2 m-2"></li>
          <li className=" font-bold p-2 m-2"></li>
          <li className=" font-bold p-2 m-2"></li>
          <li className=" font-bold p-2 m-2"></li>
          <li className=" font-bold p-2 m-2"></li>
          <li className=" font-bold p-2 m-2"></li>
          <li className=" font-bold p-2 m-2"></li>
          <li className=" font-bold p-2 m-2"></li>
          <li className=" font-bold p-2 m-2"></li>
          <li className=" font-bold p-2 m-2"></li>
          <li className=" font-bold p-2 m-2"></li>
          <li className=" font-bold p-2 m-2"></li>
          
        </ul>
      </div>
      </div>
     
  );
};

export default Sidebar;
