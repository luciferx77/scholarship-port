import React, { useState } from "react";
import StudentForm from "./StudentForm";
import AdminDashboard from "./AdminDashboard";

function App() {
  const [role, setRole] = useState(null);

  const handleLogin = (userRole) => setRole(userRole);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="w-full max-w-lg p-8 shadow-lg rounded-lg bg-white">
        {!role ? (
          <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-bold text-center text-gray-700">
              Scholarship Portal
            </h1>
            <button
              onClick={() => handleLogin("student")}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Login as Student
            </button>
            <button
              onClick={() => handleLogin("admin")}
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Login as Admin
            </button>
          </div>
        ) : role === "student" ? (
          <StudentForm />
        ) : (
          <AdminDashboard />
        )}
      </div>
    </div>
  );
}

export default App;
