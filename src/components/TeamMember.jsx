const TeamMember = ({ name, image, size }) => {
  const circleSize = size === "large" ? "100px" : "90px";

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    margin: "10px",
  };

  const circleStyle = {
    width: circleSize,
    height: circleSize,
    borderRadius: "50%",
    backgroundColor: "#FF0000",
    boxShadow: "0 0 20px rgba(255, 0, 0, 0.3)",
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const nameStyle = {
    marginTop: "8px",
    fontSize: "12px",
    color: "white",
    fontFamily: "monospace",
  };

  return (
    <div style={containerStyle}>
      <div style={circleStyle}></div>
      <p style={nameStyle}>{name}</p>
    </div>
  );
};
const TeamContainer = ({ members }) => {
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    padding: "20px",
    flexDirection: "row",
  };

  return (
    <div style={containerStyle}>
      {members.map((member, index) => (
        <TeamMember key={index} {...member} />
      ))}
    </div>
  );
};

export default TeamMember;