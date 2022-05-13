import React, { FC } from "react";
import { useEffect } from "react";
import { getStudents } from "../api";
import StudentCard from "../Cards/StudentCard";
import { Student } from "../models/student";

const StudentPage = () => {
  const [student, setStudent] = React.useState<Student[]>([]);
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    const token = getStudents();
    token.then((response) => {
      setStudent(response);
      setLoading(false);
    });
  }, []);

  return (
    <div className="bg-gray-200 space-y-4 ">
      <h1 className="text-2xl font-bold ">Student List</h1>
      <div className="flex flex-wrap justify-around sm:px-10  bg-white rounded-md">
        {student.map((s) => (
          <StudentCard student={s} key={s.id} />
        ))}
        <span className="w-72"></span>
        <span className=" w-72"></span>
      </div>
      {loading && (
        <div className="h-screen  ">
          <img src="https://i.gifer.com/ZZ5H.gif" className="w-12 " />
        </div>
      )}
    </div>
  );
};

export default StudentPage;
