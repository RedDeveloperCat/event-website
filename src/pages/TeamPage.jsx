import { useEffect, useState } from "react";
import sanityClient from "../sanity/sanityconfig"
import TeamStructure from "../components/TeamStructure";

const TeamPage = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "team"]{ 
          category, 
          categoryOrder,
          members[] { name, "image": image.asset->url, position, size } 
        }`
      )
      .then((data) => {
        const sortedData = data.sort((a, b) => a.categoryOrder - b.categoryOrder);
        setTeams(sortedData);
      })
      .catch(console.error);
  }, []);

  return <TeamStructure teams={teams} />;
};

export default TeamPage;