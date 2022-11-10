import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

import Developy from "../assets/images/developy.png";

const Home = () => {
  return (
    <div className="bg-slate-500 my-96 align-middle">
      <div>
        <h1 className="text-white text-lg font-bold">
          Welcome to Hire A Developy!
        </h1>
      </div>
      <div className="container max-w-screen-lg mx-auto pb-10">
        <h2 className="text-white text-sm underline">
          We are here to meet your developing hubby needs
        </h2>

        <img className="mx-auto pt-4" src={Developy} />
      </div>
    </div>
  );
};

export default Home;
