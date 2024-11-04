import PropTypes from "prop-types";
import ContactItemBody from "./ContactItemBody";
import ContactItemImage from "./ContactItemImage";

function ContactItem({ imageUrl, name, tag }) {
  return (
    <div className="contact-item">
      <ContactItemImage imageUrl={imageUrl} />
      <ContactItemBody name={name} tag={tag} />
    </div>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default ContactItem;
