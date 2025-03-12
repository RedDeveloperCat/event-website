import TeamSection from "./TeamSection";

const TeamStructure = ({ teams }) => {
  const containerStyle = {
    // minHeight: "100vh",
    // background: "linear-gradient(to bottom, #0A051C, #1A1040)",
    // display: "flex",
    // flexDirection: "column",
    // alignItems: "center",
    // paddingTop: "80px",
    // paddingBottom: "80px",
  };

  return (
    <div style={containerStyle}>
      {teams.map((team, index) => (
        <TeamSection key={index} team={team} />
      ))}
    </div>
  );
};

export default TeamStructure;
