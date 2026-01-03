import PersonalInfo from "./components/PersonalInfo";
import React, { useState } from "react";
import EducationDetails from "./components/EducationDetails";
import WorkExp from "./components/WorkExp";
import CVPreview from "./components/CVPreview";

function App() {
  const [submittedData, setSubmittedData] = useState(null);
  const initialFormData = {
    personalInfo: {
      name: "",
      email: "",
      contact: "",
    },
    educationDetails: {
      schoolName: "",
      titleOfStudy: "",
      dateOfStudy: "",
    },
    workExperience: {
      companyName: "",
      positionTitle: "",
      responsibilities: "",
      joiningDate: "",
    },
  };
  const [formdata, setFormdata] = useState(initialFormData);

  const handleEdit = () => {
    setFormdata(submittedData);
    setSubmittedData(null);
  };

  const handleReset = () => {
    setFormdata(initialFormData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formdata);
  };

  const handleChange = (section, field, value) => {
    setFormdata((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [field]: value,
      },
    }));
  };
  console.log("FORM DATA:", formdata);

  return (
    <>
      <h2>Personalised CV Generator</h2>
      <div>
        <h1>Enter your details: </h1>
        {submittedData ? (
          <CVPreview data={submittedData} onEdit={handleEdit} />
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-11/12 border border:black items-center mx-auto p-5 gap-12 m-4"
          >
            <PersonalInfo
              data={formdata.personalInfo}
              onChange={handleChange}
            />
            <EducationDetails
              data={formdata.educationDetails}
              onChange={handleChange}
            />
            <WorkExp data={formdata.workExperience} onChange={handleChange} />
            <button
              type="submit"
              className="border border-black p-2 border-r-2"
            >
              Save & Preview
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="border border-black p-2 border-r-2"
            >
              Reset Form
            </button>
          </form>
        )}
      </div>
    </>
  );
}

export default App;
