import React from "react";

const PersonalInfo = ({ data, onChange }) => {
  return (
    <div className="w-full flex flex-col items-center gap-2 mx-auto">
      <h2>Personal information</h2>
      <div className="flex flex-col w-3/4 border border-color:black mx-auto p-4 items-center gap-6">
        <div className="flex flex-col w-full gap-1">
          <label htmlFor="name">Name:</label>
          <input
            value={data.name}
            onChange={(e) => onChange("personalInfo", "name", e.target.value)}
            id="name"
            type="text"
            placeholder="name"
            className="border rounded"
          />
        </div>
        <div className="flex flex-col w-full gap-1">
          <label htmlFor="email">Email:</label>
          <input
            value={data.email}
            onChange={(e) => onChange("personalInfo", "email", e.target.value)}
            id="email"
            type="email"
            placeholder="email"
            className="border rounded"
          />
        </div>

        <div className="flex flex-col w-full gap-1">
          <label htmlFor="number">Contact details:</label>
          <input
            value={data.contact}
            onChange={(e) =>
              onChange("personalInfo", "contact", e.target.value)
            }
            id="number"
            type="tel"
            placeholder="mobile no."
            className="border rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
