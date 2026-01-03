import React from "react";

const WorkExp = ({ data, onChange }) => {
  return (
    <div className="w-full flex flex-col items-center gap-2 mx-auto">
      <h2>Work Experience</h2>
      <div className="flex flex-col w-3/4 border border-color:black mx-auto p-4 items-center gap-6">
        <div className="flex flex-col w-full gap-1">
          <label htmlFor="Cname">Company name:</label>
          <input
            value={data.companyName}
            onChange={(e) =>
              onChange("workExperience", "companyName", e.target.value)
            }
            id="Cname"
            type="text"
            placeholder="company name"
            className="border rounded"
          />
        </div>
        <div className="flex flex-col w-full gap-1">
          <label htmlFor="Ptitle">Position title:</label>
          <input
            value={data.positionTitle}
            onChange={(e) =>
              onChange("workExperience", "positionTitle", e.target.value)
            }
            id="Ptitle"
            type="text"
            placeholder="position title"
            className="border rounded"
          />
        </div>

        <div className="flex flex-col w-full gap-1">
          <label htmlFor="res">Responsibility:</label>
          <textarea
            value={data.responsibilities}
            onChange={(e) =>
              onChange("workExperience", "responsibilities", e.target.value)
            }
            id="res"
            placeholder="responsibilities"
            className="border rounded"
          />
        </div>

        <div className="flex flex-col w-full gap-1">
          <label htmlFor="jdate">Date of joining:</label>
          <input
            value={data.joiningDate}
            onChange={(e) =>
              onChange("workExperience", "joiningDate", e.target.value)
            }
            id="jdate"
            type="date"
            placeholder="joining date"
            className="border px-2 py-1 rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkExp;
