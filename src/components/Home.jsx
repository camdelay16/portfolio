import SocialIcon from "./SocialIcon";

const Home = (props) => {
  const { info } = props;
  return (
    <div>
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
