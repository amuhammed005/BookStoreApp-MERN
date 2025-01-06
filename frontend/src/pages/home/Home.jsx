import Banner from "./Banner";
import Recommended from "./Recommended";
import TopSellers from "./TopSellers";
import News from "./News";
// import LandingPage from "../../components/LandingPage";
// import Login from "./Login";

const Home = () => {
  return (
    <div>
      <Banner />
      <TopSellers />
      <Recommended />
      <News />
    </div>
  );
};

export default Home;
