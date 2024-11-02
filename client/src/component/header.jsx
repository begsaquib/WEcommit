import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/AppSlice";



const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuhandler = () => {
    dispatch(toggleMenu());
  };

  return (

    <header className="bg-blue-800 p-4 flex justify-start">

      <img  onClick={() => toggleMenuhandler()}
      src="https://cdn3d.iconscout.com/3d/premium/thumb/menu-button-3d-icon-download-in-png-blend-fbx-gltf-file-formats--option-list-ui-pack-user-interface-icons-6307909.png?f=webp" alt="" className="h-8 mr-3 mt-3 cursor-pointer" />

      <img src="https://media.licdn.com/dms/image/v2/D560BAQEAFeNxVCMFJA/company-logo_200_200/company-logo_200_200/0/1702353949425/wecommit_logo?e=1738800000&v=beta&t=3Xq3zqVF3mhivOzKoYD8Z1-VholY3NHm5BO_bGVh2Qw" alt="Logo" className="h-12 mr-11" /> 
    </header>
  );
};

export default Header;
