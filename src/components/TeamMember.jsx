import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../sanity/sanityconfig";

const builder = imageUrlBuilder(sanityClient);
const urlFor = (source) => builder.image(source).width(300).height(300).url();

const TeamMember = ({ name, image, size }) => {
  return (
    <div className="team-member">
      <div className="member-image-container">
        <img
          src={urlFor(image)}
          alt={name}
          className="member-image"
        />
      </div>
      <p className="member-name">{name}</p>
    </div>
  );
};

const TeamContainer = ({ members }) => {
  return (
    <div className="team-members-grid">
      {members.map((member, index) => (
        <TeamMember key={index} {...member} />
      ))}
    </div>
  );
};

export default TeamMember;