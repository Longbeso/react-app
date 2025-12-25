import videoHomepage from "../../assets/video-homepage.mp4";

const HomePage = (props) => {
  return (
    <div className="homepage-container">
      <div className="container">
        <div className="homepage-content">
          <div className="title-header">
            <h1>Therre's a better way to ask</h1>
          </div>
          <div className="description">
            You don't want to make a boring form. And your audience won't answer
            one. Create a typeform instead-and make everyone
          </div>
          <div className="getstarted">
            <button className="btn btn-getstarted">
              Get started. It's free
            </button>
          </div>
        </div>
        <video autoPlay muted loop width="750px" height="500px">
          <source src={videoHomepage} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default HomePage;
