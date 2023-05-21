import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks";

export default function NotVerified() {
  const { authInfo } = useAuth();

  const { isLoggedIn } = authInfo;

  const isVerified = authInfo.profile?.isVerified;

  const navigate = useNavigate();

  const navigateToVerification = () => {
    navigate("/auth/verification", { state: { user: authInfo.profile } });
  };

  return (
    <div>
      {isLoggedIn && !isVerified ? (
        <p className="text-lg text-center dark:bg-orange-500 bg-orange-300 p-2 font-mono">
          It looks like you haven not verified your account!{" "}
          <button
            onClick={navigateToVerification}
            className="dark:text-custom-gray text-white font-semibold hover:underline font-mono"
          >
            Click here to verify your account!
          </button>
        </p>
      ) : null}
    </div>
  );
}
