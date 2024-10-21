import React, { useState } from "react";

function StudentForm() {
  const [studentData, setStudentData] = useState({
    name: "",
    email: "",
    gpa: "",
    year: "",
    rollNumber: "",
    proofDocument: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setStudentData({
      ...studentData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Student Data:", studentData);
  };

  return (
    <div className="p-6 shadow-lg max-w-xl w-full mx-auto bg-white rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">
        Student Scholarship Application
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {["name", "email", "gpa", "year", "rollNumber"].map((field) => (
          <div key={field}>
            <label htmlFor={field} className="block text-sm font-medium text-gray-700">
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
            <input
              type="text"
              name={field}
              id={field}
              value={studentData[field]}
              onChange={handleChange}
              className="mt-2 p-2 border rounded w-full"
            />
          </div>
        ))}
        <div>
          <label htmlFor="proofDocument" className="block text-sm font-medium text-gray-700">
            Proof Document
          </label>
          <input
            type="file"
            name="proofDocument"
            id="proofDocument"
            onChange={handleChange}
            className="mt-2 p-2 border rounded w-full"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}

export default StudentForm;
