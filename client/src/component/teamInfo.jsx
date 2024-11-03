import { useState } from "react";

const TeamInfo = () => {
  const [showModal, setShowModal] = useState(false);
  const [members, setMembers] = useState([
    { id: 1, username: "Alice", firstName: "Alice", lastName: "Smith" },
    { id: 2, username: "Bob", firstName: "Bob", lastName: "Johnson" },
    { id: 3, username: "Charlie", firstName: "Charlie", lastName: "Brown" },
  ]);
  const [newMemberName, setNewMemberName] = useState("");

  const handleAddMember = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setNewMemberName(""); // Reset input field
  };

  const handleAddMemberSubmit = () => {
    if (newMemberName.trim()) {
      // Split the name into first and last names for demonstration
      const [firstName, lastName] = newMemberName.trim().split(" ");
      setMembers([
        ...members,
        { id: members.length + 1, username: newMemberName.trim(), firstName, lastName },
      ]);
      handleCloseModal();
    }
  };

  return (
    <div className="p-4 flex flex-col items-center w-full bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Team Name</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
        {members.map((member) => (
          <div key={member.id} className="p-4 bg-white rounded shadow-lg flex flex-col items-center">
            <span className="font-bold">{member.username}</span>
            <span className="text-sm">{member.firstName} {member.lastName}</span>
            <button className="mt-2 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600">
              Remove
            </button>
          </div>
        ))}
      </div>
      <button onClick={handleAddMember} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
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
              placeholder="Enter full name (First Last)"
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

export default TeamInfo;
