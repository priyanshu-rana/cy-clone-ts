import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineCheckCircle, AiOutlineShrink } from "react-icons/all";
import { DateTime } from "luxon";
import { string } from "yup";
// import { useForm } from "./useForm";
import AssignmentPopup from "./AssignmentPopup";
import { getAssignments, submitAssignments } from "../api";
import { Assignment } from "../models/assignment";

type AssignmentCardProps = { assignment: Assignment };

const AssignmentCard: FC<AssignmentCardProps> = ({ assignment }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [submissionLink, setSubmissionLink] = useState("");
  const [urlError, setUrlError] = useState(false);
  const [urlValid, setUrlValid] = useState("");

  const dueDate = DateTime.fromISO(assignment.due_date).toLocaleString(
    DateTime.DATE_FULL
  );

  const createdAt = DateTime.fromISO(assignment.created_at).toLocaleString(
    DateTime.DATE_FULL
  );

  const show = () => {
    setShowPopup(true);
    console.log("popUp generated");
  };

  const hide = () => {
    setShowPopup(false);
    setSubmissionLink("");
    setUrlError(false);
    console.log("popUp removed");
  };

  const url = (event: any) => {
    setSubmissionLink(event.target.value);
  };

  const assignmentSubmit = (event: any) => {
    event.preventDefault();
    const urlValidator = string()
      .required("Submission Link Could not be Empty")
      .url("It seems the URL isn't in Correct Format");
    try {
      urlValidator.validateSync(submissionLink);
      setSubmissionLink("");
      hide();
      submitAssignments(assignment, submissionLink);
      console.log(submissionLink);
    } catch (error) {
      setUrlError(true);
      //   setUrlValid(error.message);
      return;
    }
  };

  //   const { onFormSubmit } = useForm({}, assignmentSubmit);

  return (
    <div>
      <div className="bg-white p-2 rounded-md border-2 border-gray-200">
        <Link to={`/assgpage/${assignment.id}/details`}>
          <div>
            <div className="sm:flex sm:justify-between p-3 space-y-3 sm:space-y-0">
              <div className="flex flex-col">
                <div className="flex font-semibold space-x-2 ">
                  <h1>#{assignment.id}</h1>
                  <h1>{assignment.title}</h1>
                  <h1 className="text-gray-500 font-semibold">({createdAt})</h1>
                </div>
                <div className="mt-4">
                  <h1 className="text-red-600 ">Due Date:{dueDate}</h1>
                  <h1 className="text-red-600">
                    (Submission will count as Late now)
                  </h1>
                </div>
              </div>
              <div className="flex items-center sm:px-8 px-2">
                <h1 className="text-green-600 font-semibold ">Submitted</h1>
              </div>
            </div>
          </div>
        </Link>
        <div className="h-10  flex  ">
          <div className=" flex-1 flex justify-center space-x-2 items-center">
            <AiOutlineCheckCircle className="text-green-600" />
            <button className="text-green-600 font-semibold " onClick={show}>
              Re-submit
            </button>
          </div>
          <div className="flex-1 flex justify-center space-x-2 items-center">
            <AiOutlineShrink />
            <a
              href={assignment.submissions[0].submission_link}
              target="_blank"
              className="text-blue-600 font-semibold"
            >
              See Your Submission
            </a>
          </div>
        </div>
      </div>
      <div className="fixed top-[50%] left-[50%] flex items-center justify-center">
        {showPopup && (
          <AssignmentPopup
            value={submissionLink}
            onChange={url}
            urlError={urlError}
            urlValid={urlValid}
            save={assignmentSubmit}
            hide={hide}
            id={assignment.id}
          ></AssignmentPopup>
        )}
      </div>
    </div>
  );
};

export default AssignmentCard;
