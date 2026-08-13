import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Adduser.css";

export default function AddUser() {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    

  
    const handleSubmit = async (e) => {

        e.preventDefault();

        const token = localStorage.getItem("token");

        try {

            const response = await fetch(
                "http://localhost:8081/users/create",
                {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        username,
                        password
                    }),
                }
            );

            if (!response.ok) {
                throw new Error("Failed to add user");
            }

            alert("User added successfully!");

            setUsername("");
            setPassword("");

            navigate("/getusers");

        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    };

    return (
        <div className="form-page">

            <div className="form-card">

                <div className="form-header">
                    <h1>Add User</h1>
                    <p>Create a new user account</p>
                </div>


                <form onSubmit={handleSubmit}>

                    {/* Username */}

                    <div className="question">

                        <label>
                            Username
                            <span className="required">*</span>
                        </label>

                        <input
                            type="text"
                            placeholder="Your answer"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />

                    </div>


                    {/* Password */}

                    <div className="question">

                        <label>
                            Password
                            <span className="required">*</span>
                        </label>

                        <input
                            type="password"
                            placeholder="Your answer"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                    </div>


                    {/* Buttons */}

                    <div className="form-actions">

                        <button
                            type="submit"
                            className="submit-button"
                        >
                            Submit
                        </button>

                        <button
                            type="button"
                            className="clear-button"
                            onClick={() => {
                                setUsername("");
                                setPassword("");
                            }}
                        >
                            Clear form
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}