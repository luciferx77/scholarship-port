import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, Button, Input, Label } from "../src/components/ui/card";

function StudentDashboard() {
  const [studentData, setStudentData] = useState({
    name: "",
    email: "",
    gpa: "",
    year: "",
    rollNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Student Data:", studentData);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Card className="w-full max-w-md p-6 shadow-xl">
        <CardHeader>
          <CardTitle className="text-center">Student Scholarship Application</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label>Name</Label>
              <Input
                type="text"
                name="name"
                value={studentData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </div>
            <div>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                value={studentData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>
            <div>
              <Label>GPA</Label>
              <Input
                type="number"
                name="gpa"
                value={studentData.gpa}
                onChange={handleChange}
                placeholder="Enter your GPA"
              />
            </div>
            <div>
              <Label>Year of Study</Label>
              <Input
                type="text"
                name="year"
                value={studentData.year}
                onChange={handleChange}
                placeholder="Enter your current year"
              />
            </div>
            <div>
              <Label>Roll Number</Label>
              <Input
                type="text"
                name="rollNumber"
                value={studentData.rollNumber}
                onChange={handleChange}
                placeholder="Enter your roll number"
              />
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" type="submit">
              Submit Application
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default StudentDashboard;
