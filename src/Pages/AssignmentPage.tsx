import React, { useEffect } from "react";
import { getAssignments } from "../api";
import AssignmentCard from "../Cards/Assignmentcard";
import { Assignment } from "../models/assignment";

const AssignmentPage = () => {
  const [assignment, setAssignment] = React.useState<Assignment[]>([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const token = getAssignments();
    token.then((response) => {
      setAssignment(response);
      console.log(response);
      setLoading(false);
    });
  }, []);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">AssignmentList</h1>
      <div className=" bg-gray-100 sm:px-28  space-y-5">
        {assignment.map((a) => (
          <AssignmentCard assignment={a} key={a.id} />
        ))}
      </div>
      {loading && (
        <div className=" h-screen  ">
          <img src="https://i.gifer.com/ZZ5H.gif" className="w-24 " />
        </div>
      )}
    </div>
  );
};

export default AssignmentPage;
