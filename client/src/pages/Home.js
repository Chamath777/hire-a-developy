import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

const Home = () => {
  return (
    <div className="bg-slate-500 my-96">
      <div className="text-white">
        <h1>Welcome to Hire A Developy!</h1>
      </div>
      <div className="">
        <h2>We are here to meet your developing hubby needs</h2>
      </div>
    </div>
  );
};

export default Home;
