import React, { FC } from "react";

const AssignmentPopup = (props: any) => {
  return (
    <div className="fixed h-[1/3] w-[50%] sm:py-20   sm:px-6   border-2 border-gray-400 rounded-xl bg-gray-100  ">
      <form>
        <h1 className="absolute   top-0 p-2 text-2xl text-emerald-600 font-bold ">
          Enter the Submission Link of Assignment {props.id}
        </h1>
        <div className="flex justify-around ">
          <h1>Submission Link</h1>
          <input
            value={props.value}
            onChange={props.onChange}
            placeholder="submit your link"
            className="rounded-md border-2 w-3/4 sm:text-xl border-gray-500 bg-gray-200 text-black placeholder:text-gray-600 placeholder:px-1"
          />
        </div>
        {props.urlError && (
          <h1 className=" absolute text-red-400 font-semibold m-4 left-1/3 ">
            {props.urlValid}
          </h1>
        )}
        <button
          className="bg-indigo-600 text-white  px-6 py-1 font-semibold  sm:ml-4 sm:mt-12 border-2 border-indigo-700 rounded-md "
          onClick={props.save}
        >
          Save
        </button>
        <button
          type="submit"
          className="absolute text-2xl font-extrabold text-red-600 bottom-0 right-0 p-4"
          onClick={props.hide}
        >
          X
        </button>
      </form>
    </div>
  );
};
export default AssignmentPopup;
