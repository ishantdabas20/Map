import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { setUserDetails } from "../redux/fetchuserSlice";
import singleuserdataApi from "../api/singleuserdataApi";

function Getuser() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth?.token);

  const fetchuser = useSelector(
    (state) =>
      state.fetchuser || {
        id: null,
        username: null,
        role: null,
      }
  );

  useEffect(() => {
    console.log("========== GET USER ==========");
    console.log("Token from Redux:", token);

    const fetchUser = async () => {
      console.log("fetchUser() STARTED");

      try {
        console.log("Calling singleuserdataApi...");

        const result = await singleuserdataApi(token);

        console.log("API RESPONSE:", result);

        dispatch(setUserDetails(result));

        console.log("User details saved to Redux");

      } catch (error) {
        console.error("GET USER ERROR:", error);
      }
    };

    if (!token) {
      console.log("NO TOKEN - API WILL NOT BE CALLED");
      return;
    }

    fetchUser();

  }, [token, dispatch]);

  return (
    <div>
      <button onClick={() => navigate("/adduser")}>
        Add User
      </button>

      <button onClick={() => navigate("/assignrole")}>
        Assign Role
      </button>

      <button onClick={() => navigate("/getusers")}>
        View All Users
      </button>

      <hr />

      <h3>User Details</h3>

      {fetchuser.id ? (
        <div>
          <p>
            <strong>ID:</strong> {fetchuser.id}
          </p>

          <p>
            <strong>Username:</strong> {fetchuser.username}
          </p>

          <p>
            <strong>Role:</strong> {fetchuser.role}
          </p>
        </div>
      ) : (
        <p>Loading user details...</p>
      )}
    </div>
  );
}

export default Getuser;