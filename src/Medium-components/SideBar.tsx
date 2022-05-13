import React from "react";
import { Link } from "react-router-dom";
import {
  MdOutlineQuiz,
  MdOutlineAssignment,
  IoPeopleCircleOutline,
  FaChalkboardTeacher,
  CgProfile,
} from "react-icons/all";

function SideBar() {
  return (
    <div className="bg-gray-800 w-60 h-screen flex flex-col  py-6 px-2">
      <div className="flex space-x-2 ">
        <img
          src="https://app.codeyogi.io/assets/CodeYogiLogoWhite.64529273.svg"
          className="h-10 w-10"
        />
        <h1 className="text-2xl font-white text-white font-extrabold mb-6">
          CODEYOGI
        </h1>
      </div>

      <Link
        to="/lecture"
        className="font-semibold text-lg text-white py-2  hover:bg-gray-700 hover:rounded-md hover:px-3 px-1 mt-4"
      >
        <div className="flex items-center ">
          <FaChalkboardTeacher className="text-gray-200 w-6 h-6 mr-2" />
          Lecture
        </div>
      </Link>
      <Link
        to="/assignment"
        className="font-semibold text-lg text-white py-2  hover:bg-gray-700 hover:rounded-md hover:px-3 px-1"
      >
        <div className="flex items-center  ">
          <MdOutlineAssignment className="text-gray-200 w-6 h-6 mr-2" />
          Assignment
        </div>
      </Link>
      <Link
        to="/quiz"
        className="font-semibold text-lg text-white py-2  hover:bg-gray-700 hover:rounded-md hover:px-3 px-1"
      >
        <div className="flex items-center  ">
          <MdOutlineQuiz className="text-gray-200 w-6 h-6 mr-2" />
          Quiz
        </div>
      </Link>
      <Link
        to="/students"
        className="font-semibold text-lg text-white py-2  hover:bg-gray-700 hover:rounded-md hover:px-3 px-1"
      >
        <div className="flex items-center  ">
          <IoPeopleCircleOutline className="text-gray-200 w-6 h-6 mr-2" />
          Students
        </div>
      </Link>
      <span className="grow"></span>
      <Link
        to="/profile"
        className="font-semibold text-lg text-white py-2  hover:bg-gray-700 hover:rounded-md hover:px-3 px-1"
      >
        <div className="flex items-center  ">
          <CgProfile className="text-gray-200 w-6 h-6 mr-2" />
          Profile
        </div>
      </Link>
    </div>
  );
}

export default SideBar;
