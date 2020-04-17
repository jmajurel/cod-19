import React, { useState, useEffect } from "react";
import { getAllPatient } from "../Services/Patient/patientService";
import { getAllSymptoms } from "../Services/Health/symptomService";
import GraphSelector from "../Components/GraphSelector";
const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [symptoms, setSymptoms] = useState([]);

  useEffect(() => {
    function handlePatientsChange(newPatients) {
      setPatients(newPatients);
    }
    Promise.all([getAllPatient(), getAllSymptoms()])
      .then((results) => {
        console.log(results);
        setPatients(results[0]);
        setSymptoms(results[1].map((res) => res.name));
      })
      .catch((err) => console.log("error: " + err));
  }, []);

  return (
    <div className="patients">
      Hello world Patients {patients.length}
      <GraphSelector
        label={"symptoms"}
        options={symptoms}
        handleChange={(e) => console.log(e)}
      />
    </div>
  );
};

export default Patients;
