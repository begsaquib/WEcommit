import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Logo_Url, Menu_Url } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuhandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <header className="bg-blue-800 p-4 flex justify-start">
      <img
        onClick={() => toggleMenuhandler()}
        src={Menu_Url}
        alt=""
        className="h-8 mr-3 mt-3 cursor-pointer"
      />

      <img src={Logo_Url} alt="Logo" className="h-12 mr-11" />
    </header>
  );
};

export default Header;
