import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Dashboard() {
    const { email } = useParams();  // Get email from URL
    const navigate = useNavigate();

    return (
        <div>
            <h1>Hello, {email}! Welcome to your personalized dashboard.</h1>
            <button onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("userEmail");
                navigate("/login");
            }}>
                Logout
            </button>
        </div>
    );
}
