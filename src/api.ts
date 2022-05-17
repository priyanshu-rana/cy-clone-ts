import axios from "axios";
import { Assignment } from "./models/assignment";
import { Lecture } from "./models/lecture";
import { Student } from "./models/student";

type StudentResponse = { results: Student[] };

export const getStudents = async () => {
  const responsePromise = await axios.get<StudentResponse>(
    `https://randomuser.me/api/?results=120`
  );
  const response = responsePromise.data.results;
  return response;
};

export const getLectures = async () => {
  const responsePromise = await axios.get<Lecture[]>(
    `https://api.codeyogi.io/batches/1/sessions`,
    { withCredentials: true }
  );
  const response = responsePromise.data;
  return response;
};

export const getAssignments = async () => {
  const responsePromise = await axios.get<Assignment[]>(
    `https://api.codeyogi.io/batches/1/assignments`,
    { withCredentials: true }
  );
  const response = responsePromise.data;
  return response;
};

export const submitAssignments = async (
  assignment: any,
  submissionLink: any
) => {
  const responsePromise = await axios.put(
    `https://api.codeyogi.io/assignment/${assignment.id}/submit`,
    { submissionLink },
    { withCredentials: true }
  );
  return responsePromise;
};
