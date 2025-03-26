import TeamMember from "./TeamMember";

const TeamSection = ({ team }) => {
  const style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "80px",
    width: "100%",
  };

  const titleStyle = {
    color: "white",
    fontSize: "20px",
    fontFamily: "Baskervville",
    marginBottom: "40px",
    textAlign: "center",
  };

  const membersContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "20px",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    maxWidth: "800px",
  };

  return (
    <div style={style}>
      <h2 style={titleStyle}>{team.category}</h2>
      <div style={membersContainerStyle}>
        {team.members.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
