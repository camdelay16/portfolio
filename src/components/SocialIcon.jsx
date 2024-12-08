function SocialIcon(props) {
  const { info } = props;

  const socials = info.socials.map((social, index) => (
    <div key={index}>
      <a
        href={social.link}
        target="_blank"
      >
        <i className={social.icon} />
        {social.label}
      </a>
    </div>
  ));
  return (
    <div>
      {socials}
      <a
        href="http://www.linkedin.com/in/cameron-delay-5382888a"
        target="_blank"
      >
        <img
          src=""
          className="logo"
          alt="linkedin"
        />
      </a>
      <a
        href="https://github.com/camdelay16"
        target="_blank"
      >
        <img
          src=""
          className="logo"
          alt="github"
        />
      </a>
    </div>
  );
}

export default SocialIcon;
