import TeamSection from "./TeamSection";
import "../styles/Team.css"

const TeamStructure = ({ teams }) => {

return (
  <div style={containerStyle}>
    <div className="title-container"><h2 className="team-title">Our Team</h2></div>
    {teams.map((team, index) => (
      <TeamSection key={index} team={team} />
    ))}
  </div>
);
};

export default TeamStructure;
