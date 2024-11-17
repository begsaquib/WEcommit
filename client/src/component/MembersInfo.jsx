import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import { fetchMembers, addMember, removeMember } from "../utils/teamSlice";
const MembersInfo = () => {
  const dispatch = useDispatch();
  const { teamname } = useParams();
  const token = Cookies.get("token");

  const { members } = useSelector((state) => state.team);
 

  const [showModal, setShowModal] = useState(false);
  const [newMemberName, setNewMemberName] = useState("");

  useEffect(() => {
    if (teamname && token) {
      dispatch(fetchMembers({ teamName: teamname, token }));
    }
  }, [dispatch, teamname, token]);

  const handleAddMember = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setNewMemberName("");
  };

  const handleAddMemberSubmit = () => {
    if (newMemberName.trim()) {
      dispatch(
        addMember({ teamName: teamname, userName: newMemberName.trim(), token })
      )
        .unwrap()
        .then(() => {
          handleCloseModal();
        })
        .catch((error) => {
          if (error.message === "Not a registered user") {
            alert("This username is not registered.");
          } else {
            alert("An error occurred while adding the member.");
          }
        });
    }
  };

  const handleRemoveMember = (username) => {
    dispatch(removeMember({ teamName: teamname, userName: username, token }));
  };

  return (
    <div className="p-4 flex flex-col items-center w-full bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">{teamname}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
        {members?.map((member) => (
          <div
            key={member._id}
            className="p-4 bg-white rounded shadow-lg flex flex-col items-center"
          >
            <span className="font-bold">{member.userName}</span>
            <span className="text-gray-500 text-sm">{member.emailId}</span>

            <button
              onClick={() => handleRemoveMember(member.userName)}
              className="mt-2 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={handleAddMember}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add Member
      </button>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-1/2">
            <h2 className="text-xl font-bold mb-2">Add New Member</h2>
            <input
              type="text"
              value={newMemberName}
              onChange={(e) => setNewMemberName(e.target.value)}
              placeholder="Enter username"
              className="border p-2 w-full mb-4"
            />
            <div className="flex justify-end">
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 bg-gray-500 text-white rounded mr-2 hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleAddMemberSubmit}
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

export default MembersInfo;
