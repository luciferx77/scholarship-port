import React from "react";

function AdminDashboard() {
  const studentApplications = [
    { name: "John Doe", email: "john@example.com", gpa: 3.8, year: "3rd", rollNumber: "202001" },
    { name: "Jane Smith", email: "jane@example.com", gpa: 3.6, year: "2nd", rollNumber: "202002" },
  ];

  return (
    <div className="p-6 shadow-lg max-w-2xl w-full mx-auto bg-white rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">Admin Dashboard</h2>
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr>
            {["Name", "Email", "GPA", "Year", "Roll Number"].map((heading) => (
              <th key={heading} className="border p-2 bg-gray-100">
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {studentApplications.map((student, index) => (
            <tr key={index} className="border-t">
              {Object.values(student).map((value, i) => (
                <td key={i} className="border p-2 text-center">
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;
