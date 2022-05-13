import { Link } from "react-router-dom";

const NotfoundPage = () => {
  return (
    <div className="h-screen flex justify-center items-center sm:p-28 bg-gray-200">
      <div className="flex flex-col bg-white rounded-md p-8 space-y-6">
        <h1 className="text-5xl font-bold">
          The PAGE you are Tring to Reach is Not Ready To Serve at this Moment
        </h1>
        <Link to="lecture">
          <button className="text-2xl bg-indigo-600 text-white font-bold px-3 py-1 rounded-md">
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotfoundPage;
