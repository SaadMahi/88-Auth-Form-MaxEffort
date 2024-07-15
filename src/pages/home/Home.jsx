import { useContext } from "react";
import { UserDataContext } from "../../store/context/UserContext";
import { AuthContext } from "../../store/context/AuthContext";
import {
  AvatarSvg,
  BdaySvg,
  GenderSvg,
  LogoutSvg,
  MailSvg,
} from "../../components/Svg";
import { LOGOUT_USER_SUCCESS } from "../../store/actions/actionTypes";

const Home = () => {
  const { userData } = useContext(UserDataContext);
  const userLocal =
    JSON.parse(sessionStorage.getItem("user")) ||
    JSON.parse(localStorage.getItem("user"));
  const { dispatch: authDispatch } = useContext(AuthContext);

  const handleLogOut = () => {
    sessionStorage.removeItem("user");
    localStorage.removeItem("user");
    authDispatch({ type: LOGOUT_USER_SUCCESS });
  };

  return (
    <section className="flex h-[calc(100vh-6px)] flex-col items-center justify-center">
      <div className="my-4 max-w-sm overflow-hidden rounded-lg bg-white shadow-lg">
        <img
          className="h-56 w-full object-cover object-center"
          src={userData?.image || userLocal?.image}
          alt="avatar"
        />
        <div className="flex items-center bg-gray-900 px-6 py-3">
          {AvatarSvg}

          <h1 className="mx-3 text-lg font-semibold text-white">
            ID: {userData?.id || userLocal?.id}
          </h1>
        </div>
        <div className="px-6 py-4">
          <h1 className="text-2xl font-semibold text-gray-800">
            {userData?.first_name || userLocal?.first_name}{" "}
            {userData?.last_name || userLocal?.first_name}
          </h1>
          <p className="py-2 text-lg text-gray-700">
            User details fetching from Api response.
          </p>
          <div className="mt-4 flex items-center text-gray-700">
            {GenderSvg}

            <h1 className="px-2 text-sm">
              ({userData?.gender || userLocal?.gender})
            </h1>
          </div>
          <div className="mt-4 flex items-center text-gray-700">
            {BdaySvg}

            <h1 className="px-2 text-sm">{userData?.dob || userLocal?.dob}</h1>
          </div>
          <div className="mt-4 flex items-center text-gray-700">
            {MailSvg}
            <h1 className="px-2 text-sm">
              {userData?.email || userLocal?.email}
            </h1>
          </div>
        </div>
      </div>

      <div
        onClick={() => handleLogOut()}
        className="absolute right-5 top-5 flex cursor-pointer items-center gap-1 rounded-2xl bg-white px-4 py-2 shadow-md transition-all duration-300 hover:bg-blue-100 active:bg-slate-500"
      >
        {LogoutSvg}

        <span className="font-bold text-[#1C274C]">Logout</span>
      </div>
    </section>
  );
};

export default Home;
