function SocialIcon(props) {
  const { info } = props;

  const socials = info.socials.map((social, index) => (
    <div
      key={index}
      className="individualLinks"
    >
      <a
        href={social.link}
        target="_blank"
      >
        <p className="individualLinksText">
          <i className={social.icon} /> {social.label}
        </p>
      </a>
    </div>
  ));
  return <div className="contactLinks">{socials}</div>;
}

export default SocialIcon;
