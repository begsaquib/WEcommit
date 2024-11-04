import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

const useFetchTeams = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeams = async () => {
      const token = Cookies.get("token");
      if (!token) {
        setError("No token found");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get("http://localhost:7777/teams", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
    
        console.log("Response data:", response.data); 
        setTeams(response.data.teams || []);
      } catch (err) {
        console.error("Error fetching teams:", err);
        setError("Failed to fetch teams.");
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  return { teams, loading, error };
};

export default useFetchTeams;
