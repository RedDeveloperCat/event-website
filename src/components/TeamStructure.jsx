import TeamSection from "./TeamSection";
import "../styles/Team.css";
import { motion } from "framer-motion"; // Import framer-motion

const TeamStructure = ({ teams }) => {
  const containerStyle = {
    // You can enable your styles back if needed
    // minHeight: "100vh",
    // background: "linear-gradient(to bottom, #0A051C, #1A1040)",
    // display: "flex",
    // flexDirection: "column",
    // alignItems: "center",
    // paddingTop: "80px",
    // paddingBottom: "80px",
  };

  return (
    <motion.div
      style={containerStyle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }} // Fade-in animation for the whole container
    >
      <div className="title-container">
        {/* Title Animation */}
        <motion.h2
          className="team-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the title is in view
          transition={{ duration: 1 }}
        >
          Our Team
        </motion.h2>
      </div>

      {/* Mapping through teams */}
      {teams.map((team, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: index * 0.2 }} // Staggered animations
        >
          <TeamSection team={team} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default TeamStructure;
