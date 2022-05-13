import React, { FC } from "react";
import { HiOutlineUpload } from "react-icons/all";
import MDEditor from "@uiw/react-md-editor";
import { DateTime } from "luxon";
import { Lecture } from "../models/lecture";

type LectureCardProps = { lecture: Lecture };

const LectureCard: FC<LectureCardProps> = ({ lecture }) => {
  const createdAt = DateTime.fromISO(lecture.created_at).toLocaleString(
    DateTime.DATE_MED
  );

  return (
    <div className="bg-white p-2 border-2 border-gray-200  rounded-md ">
      <div className="flex space-x-3">
        <h1 className="text-lg font-semibold">Lecture #{lecture.id}</h1>
        <h1 className="text-gray-500  font-semibold">{createdAt}</h1>
      </div>
      <h2 className="text-gray-400">Duration: {}</h2>
      <MDEditor.Markdown
        className=" list py-4 font-semibold px-8 "
        source={lecture.topic}
      />
      <a target="_blank" href={lecture.recording_url}>
        <div className="h-10 mt-4 flex items-center justify-center space-x-2 font-semibold text-gray-600">
          <HiOutlineUpload className=" text-gray-800" />
          <h1>Watch/Download Recording</h1>
        </div>
      </a>
    </div>
  );
};

export default LectureCard;
