import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import ProfilePic from "../assets/images/profile.png";

const Developer = () => {
  return (
    <div className="bg-slate-500 my-96 align-middle flex">
      <div>
        <h1 className="text-white text-lg font-bold">
          Here are our Developer's
        </h1>
      </div>
      <div className="container max-w-screen-lg mx-auto pb-10">
        <h2 className="text-white text-sm underline">Developer One</h2>

        <img
          className="mx-auto rounded-full border-solid border-white border-2"
          src={ProfilePic}
        />

        <p className="text-white text-xs">
          Hi my name is Developer One, below are some examples of my work. I can
          be contact at DeveloperOne@developy.com
        </p>

        <p className="text-white text-sm underline">
          <a href="#">Work Example One</a> | <a href="#">Work Example Two</a>
        </p>
      </div>

      <div className="container max-w-screen-lg mx-auto pb-10">
        <h2 className="text-white text-sm underline">Developer Two</h2>

        <img
          className="mx-auto rounded-full border-solid border-white border-2"
          src={ProfilePic}
        />

        <p className="text-white text-xs">
          Hi my name is Developer Two, below are some examples of my work. I can
          be contact at DeveloperTwo@developy.com
        </p>

        <p className="text-white text-sm underline">
          <a href="#">Work Example One</a> | <a href="#">Work Example Two</a>
        </p>
      </div>
    </div>
  );
};

// import InquiryForm from "../components/InquiryForm";
// import InquiryList from "../components/InquiryList";

// import { QUERY_USER, QUERY_ME } from "../utils/queries";

// import Auth from "../utils/auth";

// const Profile = () => {
//   const { username: userParam } = useParams();

//   const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
//     variables: { username: userParam },
//   });

//   const user = data?.me || data?.user || {};
//   // navigate to personal profile page if username is yours
//   if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
//     return <Navigate to="/me" />;
//   }

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!user?.username) {
//     return (
//       <h4>
//         To go ahead with purchasing a product You need to be logged. Use the
//         navigation links above to sign up or log in!
//       </h4>
//     );
//   }

//   return (
//     <div className="my-96 ml-44 align-middle">
//       <div className="flex-row justify-center mb-3">
//         <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
//           Viewing {userParam ? `${user.username}'s` : "your"} profile.
//         </h2>

//         <div className="col-12 col-md-10 mb-5">
//           <InquiryList
//             inquiry={user.inquiry}
//             title={`${user.username}'s inquiry...`}
//             showTitle={false}
//             showUsername={false}
//           />
//         </div>
//         {!userParam && (
//           <div
//             className="col-12 col-md-10 mb-3 p-3"
//             style={{ border: "1px dotted #1a1a1a" }}
//           >
//             <InquiryForm />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

export default Developer;
