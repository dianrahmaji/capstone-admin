const research = {
  _id: 1,
  title: "Capstone Project",
  topic: ["Information System", "Web Development", "Knowledge Management"],
  time: "1 August 2021 - 1 August 2022",
  description: "Best project ever",
  faculty: "Engineering",
  approval: "approved",
  status: "active",
};

function ResearchDetails() {
  return (
    <>
      <h1 className="mt-3 text-2xl font-semibold text-gray-900">
        {research.title}
      </h1>
      <div className="my-6 ml-4">
        <div className="mt-5 text-lg font-medium">Topic</div>
        <div>{research.topic.reduce((prev, curr) => `${prev}, ${curr}`)}</div>
        <div className="mt-5 text-lg font-medium">Time</div>
        <div>{research.time}</div>
        <div className="mt-5 text-lg font-medium">Description</div>
        <div>{research.description}</div>
      </div>
    </>
  );
}
export default ResearchDetails;
