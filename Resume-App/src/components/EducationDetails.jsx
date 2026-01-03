import React from "react";

const EducationDetails = ({ data, onChange }) => {
  return (
    <div className="w-full flex flex-col items-center gap-2 mx-auto">
      <h2>Educational Details</h2>
      <div className="flex flex-col w-3/4 border border-color:black mx-auto p-4 items-center gap-6">
        <div className="flex flex-col w-full gap-1">
          <label htmlFor="Sname">School name:</label>
          <input
            value={data.schoolName}
            onChange={(e) =>
              onChange("educationDetails", "schoolName", e.target.value)
            }
            id="Sname"
            type="text"
            placeholder="name"
            className="border rounded"
          />
        </div>
        <div className="flex flex-col w-full gap-1">
          <label htmlFor="title">Title of study:</label>
          <input
            value={data.titleOfStudy}
            onChange={(e) =>
              onChange("educationDetails", "titleOfStudy", e.target.value)
            }
            id="title"
            type="text"
            placeholder="title of study"
            className="border rounded"
          />
        </div>

        <div className="flex flex-col w-full gap-1">
          <label htmlFor="Sdate">Date of study:</label>
          <input
            id="Sdate"
            type="date"
            className="border py-2 px-1 rounded"
            value={data.dateOfStudy}
            onChange={(e) =>
              onChange("educationDetails", "dateOfStudy", e.target.value)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default EducationDetails;
