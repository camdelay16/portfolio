function SocialIcon(props) {
  const { info } = props;

  const socials = info.socials.map((social, index) => (
    <div key={index}>
      <a
        href={social.link}
        target="_blank"
      >
        <p>
          <i className={social.icon} /> {social.label}
        </p>
      </a>
    </div>
  ));
  return <div>{socials}</div>;
}

export default SocialIcon;
