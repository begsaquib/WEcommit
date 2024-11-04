import {  useState } from "react";
import useFetchTeams from "../hooks/useFetchTeams"; 
import api from "../utils/api"; 
import Cookies from "js-cookie";
import {  useNavigate } from "react-router-dom";
const HomePage = () => {
  const { teams, loading, error } = useFetchTeams();
  const [showModal, setShowModal] = useState(false);
  const [newTeamName, setNewTeamName] = useState("");
  const navigate = useNavigate()
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  // Function to handle adding a new team
  const handleAddTeam = async () => {
    try {
      const token = Cookies.get("token");
      const response = await api.post(
        "/teams/create",
        { name: newTeamName }, // Send the new team name in the body
        {
          headers: {
            Authorization: `Bearer ${token}`, // Pass the token
          },
        }
      );
      // Assuming the response includes the new team object
      const newTeam = response.data.team; // Adjust according to your API response
      teams.push(newTeam); // Add new team to the existing teams array
      setNewTeamName(""); // Reset input field
      setShowModal(false); // Close modal
    } catch (err) {
      console.error("Error adding team:", err);
    }
  };
  const handleTeamClick = async (team) => {
    try {
     
     
      const response = await api.get(`/${team.name}/check-membership`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      });
  
      if (response.status === 200 && response.data.message === "User is a member of the team") {
        navigate(`/team/${team.name}`); 
      } else {
        setAlertMessage("You do not have access to this team.");
        setShowAlert(true);
      }
    } catch (error) {
      console.error("Error checking team membership:", error);
      setAlertMessage("Error verifying access to the team.");
      setShowAlert(true);
    }
  };
  

  return (
    <div className="p-4 flex flex-col items-center w-full bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Teams</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
        {teams.map((team) => (
          <div onClick={() => handleTeamClick(team)} key={team._id} className="p-4 bg-white rounded-lg shadow-lg flex flex-col items-center">

            <h2 className="font-bold text-lg">{team.name}</h2>
          </div>
        ))}
      </div>

      <button
        onClick={() => setShowModal(true)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add Team
      </button>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-1/2">
            <h2 className="text-xl font-bold mb-2">Add New Team</h2>
            <input
              type="text"
              value={newTeamName}
              onChange={(e) => setNewTeamName(e.target.value)}
              placeholder="Enter team name"
              className="border p-2 w-full mb-4"
            />
            <div className="flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded mr-2 hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleAddTeam}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
