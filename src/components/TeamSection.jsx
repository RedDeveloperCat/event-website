import TeamMember from "./TeamMember";

const TeamSection = ({ team }) => {
  return (
    <div className="team-section">
      <h2 className="team-category-title">{team.category}</h2>
      <div className="team-members-grid">
        {team.members.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default TeamSection;