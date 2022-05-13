import React, { useEffect } from "react";
import { getLectures } from "../api";
import LectureCard from "../Cards/LectureCard";
import { Lecture } from "../models/lecture";

function LecturePage() {
  const [lecture, SetLecture] = React.useState<Lecture[]>([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const token = getLectures();
    token.then((response) => {
      SetLecture(response);
      console.log(response);
      setLoading(false);

      // console.log("for type testing " , response[0].recording_url)
    });
  }, []);

  // let num = [];
  // for (let i = lecture.length; i >= 1; i--) {
  //   num.push(i);
  // }
  // console.log("num is", num);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold ">LectureList</h1>
      <div className="h-full bg-gray-100 sm:px-28  space-y-5 ">
        {lecture.map((l) => (
          <LectureCard lecture={l} key={l.id} />
        ))}
      </div>
      {loading && (
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e1cb4492-b2e6-4528-8634-7bc636ec03f1/d8kril2-41567055-e874-4fd5-a948-433ced1425e2.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2UxY2I0NDkyLWIyZTYtNDUyOC04NjM0LTdiYzYzNmVjMDNmMVwvZDhrcmlsMi00MTU2NzA1NS1lODc0LTRmZDUtYTk0OC00MzNjZWQxNDI1ZTIuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.wiCpkJLnmkAp_G5rQc8tL7UFdQZoR9VTY0lE9unwrSY"
          className="w-40 "
        />
      )}
    </div>
  );
}

export default LecturePage;
