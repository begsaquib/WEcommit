import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuopen = useSelector((store) => store.app.isMenuopen);

  if (!isMenuopen) return null; //Early return

  return (
    <div className=" shadow-lg  p-4 w-50 h-full bg-blue-500">
      <div className="mb-3">
        <ul>
          <li className=" font-bold p-2 m-2">Teams list</li>
          <li className=" font-bold p-2 m-2">user list</li>
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
