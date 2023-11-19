import React, { useState } from "react";
import NumberDropdown from "./NumberDropdown";

const styles = {
  header: {
    textAlign: "center",
  },
  label: {
    fontSize: "1.3em",
    margin: "10px",
    textAlign: "center",
  },
  input: {
    margin: "10px",
    height: "20px",
  },
  right: {
    margin: "10px",
    textAlign: "left",
  },
  scap: {
    margin: "10px",
    height: "30px",
    width: "100px",
  },
  section: {
    border: "1px solid black",
    background: "grey",
    padding: "20px",
    margin: "10px",
  },
  dropdown: {
    margin: "10px",
    height: "30px",
  },
  centeredContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  body: {
    background: "#f4f4f4", // Light grey color, you can change it to your desired color
  },
};



const FormInput = () => {
  const [systemicIllness, setSystemicIllness] = useState("");
  const [gender, setGender] = useState("");

  const handleSystemicIllnessChange = (event) => {
    setSystemicIllness(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const [education, setEducation] = useState("");

  const handleEducationChange = (event) => {
    setEducation(event.target.value);
  };

  const [ses, setSes] = useState("");

  const handleSesChange = (event) => {
    setSes(event.target.value);
  };


  return (
    <>
     <div style={styles.body}></div>
      <h1 style={styles.header}>JSS INSTITUTE OF SPEECH AND HEARING AND JSS HOSPITAL</h1>
      <p style={styles.header}>DEPARTMENT OF AUDIOLOGY AND DEPARTMENT OF GERIATRICS</p>
      <h2 style={styles.header}>HEARING WELNESS CLINIC</h2>
      <div style={{ display: "flex" }}>
        <div style={{ textAlign: "left", margin: "100px 0px 0px 0px", ...styles.section }}>
          <label style={styles.label}>Op Number :</label>
          <input style={styles.input} />
          <br />
          <div style={{ display: "flex" }}>
            <label style={styles.label}>Age :</label>
            <NumberDropdown />
          </div>
          <br />
          <label style={styles.label}>Gender :</label>
          <select style={styles.dropdown} value={gender} onChange={handleGenderChange}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </select>
          <br />
          <label style={styles.label}>Systemic Illness :</label>
          <select style={styles.dropdown} value={systemicIllness} onChange={handleSystemicIllnessChange}>
            <option value="None">None</option>
            <option value="Diabetes">Diabetes</option>
            <option value="Hypertension">Hypertension</option>
            <option value="Hypotension">Hypotension</option>
            <option value="Thyroid">Thyroid</option>
            <option value="Any Other">Any Other</option>
          </select>
          <br />
          <label style={styles.label}>Education:</label>
          <select style={styles.dropdown} value={education} onChange={handleEducationChange}>
          <option value="Illeterate">Illeterate</option>
          <option value="Primary Education">Primary Education</option>
          <option value="Secondary Education">Secondary Education</option>
          <option value="Higher Secondary Education">Higher Secondary Education</option>
          <option value="UnderGraduate">UnderGraduate</option>
          <option value="Graduate">Graduate</option>
          <option value="Post Graduate">Post Graduate</option>
          <option value="Ph.D">Ph.D</option>
          <option value="Other">Other</option>
        </select>

          < br />
          <label style={styles.label}>SES :</label>
        <select style={styles.dropdown} value={ses} onChange={handleSesChange}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <br />
          <label style={styles.label}>HCA :</label>
          <input style={styles.input} />
        </div>

        <div style={{ margin: "10px 10px 10px 355px", ...styles.section }}>
          <h2 style={{ textAlign: "center" }}>Screening</h2>
          <div style={{ display: "flex", alignItems: "center" }} className="screen">
            <div style={{ alignItems: "center" }}>
              <p style={styles.label}>Right</p>
              <label style={styles.label}>500hz:</label>
              <input style={styles.input} />dB
              <br />
              <label style={styles.label}>1khz:</label>
              <input style={styles.input} />dB
              <br />
              <label style={styles.label}>2khz:</label>
              <input style={styles.input} />dB
              <br />
              <label style={styles.label}>4khz:</label>
              <input style={styles.input} />dB
            </div>

            <div style={{ margin: "50px" }}>
              <p style={styles.label}>Left</p>
              <label style={styles.label}>500hz:</label>
              <input style={styles.input} />dB
              <br />
              <label style={styles.label}>1khz:</label>
              <input style={styles.input} />dB
              <br />
              <label style={styles.label}>2khz:</label>
              <input style={styles.input} />dB
              <br />
              <label style={styles.label}>4khz:</label>
              <input style={styles.input} />dB
              <br />
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex" }}>
        <div style={{ border: "1px solid black", ...styles.section }}>
          <h2 style={styles.header}>MMSE</h2>
          <label style={styles.label}>Orientation :</label>
          <input style={styles.input} />
          <br />
          <label style={styles.label}>Registration :</label>
          <input style={styles.input} />
          <br />
          <label style={styles.label}>Attention and Calculation :</label>
          <input style={styles.input} />
          <br />
          <label style={styles.label}>Recall :</label>
          <input style={styles.input} />
          <br />
          <label style={styles.label}>Language :</label>
          <input style={styles.input} />
          <br />
          <label style={styles.label}>Total :</label>
          <input />
        </div>

        <div style={{ border: "1px solid black", ...styles.section }}>
          <h2 style={styles.header}>SCAP-A</h2>
          <div style={{ display: "flex" }}>
            <div>
              1.<input style={styles.scap} />
              <br />
              2.<input style={styles.scap} />
              <br />
              3.<input style={styles.scap} />
              <br />
              4.<input style={styles.scap} />
              <br />
            </div>
            <div>
              5.<input style={styles.scap} />
              <br />
              6. <input style={styles.scap} />
              <br />
              7. <input style={styles.scap} />
              <br />
              8. <input style={styles.scap} />
              <br />
            </div>

            <div>
              9.<input style={styles.scap} />
              <br />
              10. <input style={styles.scap} />
              <br />
              11. <input style={styles.scap} />
              <br />
              12. <input style={styles.scap} />
            </div>
          </div>
        </div>
      </div>

      <div style={{ border: "1px solid black", ...styles.section, background: "grey" }}>
        <h2>Recommendation</h2>
        <label style={styles.label}>Audiology evaluation :</label> <input type="checkbox"></input>
        <label style={styles.label}> Follow Up : </label><input type="checkbox"></input>
        <br />
      </div>
  

    </>
  );
};

export default FormInput;
