import React from "react";

const CVPreview = ({ data, onEdit }) => {
  return (
    <div className="w-11/12 mx-auto p-6 border border-black">
      <h2 className="text-xl font-semibold">Personal Details</h2>
      <p>Name: {data.personalInfo.name}</p>

      <p>Email: {data.personalInfo.email}</p>
      <p>Phone: {data.personalInfo.contact}</p>

      <hr className="my-4" />

      <h2 className="text-xl font-semibold">Education</h2>
      <p>School name: {data.educationDetails.schoolName}</p>
      <p>Title of study: {data.educationDetails.titleOfStudy}</p>
      <p>Date of study:: {data.educationDetails.dateOfStudy}</p>

      <hr className="my-4" />

      <h2 className="text-xl font-semibold">Work Experience</h2>
      <p>Company name: {data.workExperience.companyName}</p>
      <p>Position title: {data.workExperience.positionTitle}</p>
      <p>Responsibility: {data.workExperience.responsibilities}</p>
      <p>Date of joining: {data.workExperience.joiningDate}</p>

      <button
        type="button"
        onClick={onEdit}
        className="mt-4 border border-black px-4 py-2"
      >
        Edit
      </button>
    </div>
  );
};

export default CVPreview;
