import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const [teams, setTeams] = useState(['Team Alpha', 'Team Beta', 'Team Gamma']); // Dummy array of team names
  const [newTeamName, setNewTeamName] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
   const navigate=useNavigate()
  const addTeam = () => {
    if (newTeamName.trim() !== '') {
      setTeams([...teams, newTeamName.trim()]);
      setNewTeamName(''); // Clear the input
      setIsModalOpen(false); // Close the modal
    }
  };
  const goToTeamInfo = (teamName) => {
    navigate(`/team/${teamName}`); // Navigate to TeamInfo with team name
  };

  return (
    <div className="flex-1 p-6 bg-gray-100">
      <header className="bg-blue-600 p-4 text-white flex justify-between items-center mb-4">
        <h1 className="text-2xl">Teams</h1>
        <button
          onClick={() => setIsModalOpen(true)} // Open the modal
          className="bg-white text-blue-600 px-4 py-2 rounded"
        >
          Add Team
        </button>
      </header>
      <main className="">
        {teams.map((team, index) => (
          <div key={index} className="bg-white p-4 m-2 rounded shadow"  onClick={() => goToTeamInfo(team)}>
            <h2 className="text-xl font-semibold">{team}</h2>
          </div>
        ))}
      </main>

      {/* Modal for adding a new team */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-md w-1/3">
            <h2 className="text-xl mb-4">Add New Team</h2>
            <input
              type="text"
              value={newTeamName}
              onChange={(e) => setNewTeamName(e.target.value)}
              placeholder="Enter team name"
              className="border p-2 w-full mb-4"
            />
            <div className="flex justify-between">
              <button
                onClick={addTeam}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Add
              </button>
              <button
                onClick={() => setIsModalOpen(false)} // Close the modal
                className="bg-gray-300 px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
