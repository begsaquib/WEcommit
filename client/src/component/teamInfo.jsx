import { useParams } from "react-router-dom";

const TeamInfo = () => {
  const { teamName } = useParams(); 
 
  const employees = [
    { username: "john_doe", name: "John Doe" },
    { username: "jane_smith", name: "Jane Smith" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Team: {teamName}</h1>
      <h2 className="mt-4 text-xl">Members:</h2>
      <ul className="mt-2">
        {employees.map((employee, index) => (
          <li key={index} className="py-2">
            {employee.name} ({employee.username})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamInfo;
