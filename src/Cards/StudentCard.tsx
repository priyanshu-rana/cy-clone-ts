import { FC } from "react";
import { Student } from "../models/student";

type StudentCardProps = { student: Student };

const StudentCard: FC<StudentCardProps> = ({ student }) => {
  return (
    <div>
      <div className=" h-72 w-72 bg-gray-800 rounded-md mx-auto shrink-0 mt-5 mb-5  ">
        <div className="flex flex-col mt-4 justify-between px-3">
          <img
            className="mx-auto  h-44 rounded-md w-72 object-cover mt-3 "
            src={student.picture.large}
          />
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-white text-lg font-semibold">
                {student.name.first} {student.name.last}
              </h1>
              <h1 className="text-white font-semibold mt-1 mb-1">
                Age:{student.dob.age}
              </h1>
              <h1 className="text-green-300 font-semibold">
                Ph. No:{student.phone}
              </h1>
            </div>
            <div className="flex">
              <a href="https://google.com">
                <img
                  className="h-7 mr-4 "
                  src="https://cdn2.iconfinder.com/data/icons/social-icons-grey/512/TWITTER-512.png"
                />
              </a>
              <a href="https://google.com">
                <img
                  className="h-7 "
                  src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_gray-512.png"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
