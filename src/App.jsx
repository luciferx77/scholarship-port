import React, { useState } from "react";
import StudentDashboard from "./StudentForm";
import AdminDashboard from "./AdminDashboard";
import { Card, CardHeader, CardTitle, CardContent, Button } from "../src/components/ui/card";

function App() {
  const [role, setRole] = useState(null);

  const handleLogin = (userRole) => {
    setRole(userRole);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {!role ? (
        <Card className="w-96 shadow-xl">
          <CardHeader>
            <CardTitle className="text-center">Scholarship Portal</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => handleLogin("student")}
            >
              Login as Student
            </Button>
            <Button
              className="w-full bg-green-600 hover:bg-green-700 text-white"
              onClick={() => handleLogin("admin")}
            >
              Login as Admin
            </Button>
          </CardContent>
        </Card>
      ) : role === "student" ? (
        <StudentDashboard />
      ) : (
        <AdminDashboard />
      )}
    </div>
  );
}

export default App;
