import React from "react";
import { Card, CardHeader, CardTitle, CardContent, Table, TableHead, TableRow, TableCell } from "../src/components/ui/card";

const applications = [
  { name: "John Doe", email: "john@example.com", gpa: 3.8, year: "3rd", rollNumber: "202001" },
  { name: "Jane Smith", email: "jane@example.com", gpa: 3.6, year: "2nd", rollNumber: "202002" },
];

function AdminDashboard() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Card className="w-full max-w-2xl p-6 shadow-xl">
        <CardHeader>
          <CardTitle className="text-center">Admin Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <thead>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>GPA</TableHead>
                <TableHead>Year</TableHead>
                <TableHead>Roll Number</TableHead>
              </TableRow>
            </thead>
            <tbody>
              {applications.map((app, index) => (
                <TableRow key={index}>
                  <TableCell>{app.name}</TableCell>
                  <TableCell>{app.email}</TableCell>
                  <TableCell>{app.gpa}</TableCell>
                  <TableCell>{app.year}</TableCell>
                  <TableCell>{app.rollNumber}</TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

export default AdminDashboard;
