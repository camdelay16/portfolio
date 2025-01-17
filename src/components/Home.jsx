import SocialIcon from "./SocialIcon";

const Home = (props) => {
  const { info } = props;
  return (
    <div className="homeInfoContainer">
      <div className="profileImgContainer">
        <img
          src="shttps://imgur.com/a/ErnjAqc"
          alt="Cameron Delay"
          className="profileImg"
        />
      </div>
      <h1>
        Welcome! I'm <span className="name-gradient">Cameron</span>
      </h1>
      <h2>I'm a software engineer.</h2>
      <div className="contactLinks">
        <SocialIcon info={info} />
      </div>
    </div>
  );
};

export default Home;
