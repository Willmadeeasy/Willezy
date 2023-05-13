import React, { useState, useEffect } from "react";
import styles from "./textbox.module.css";

function Textbox(props) {
  const { children, id, fieldName,onLastNameChange } = props;
  const [fieldValues, setFieldValues] = useState({
    firstname: "",
    middlename: "",
    lastname: ""
  });

  useEffect(() => {
    const { firstname, middlename, lastname } = fieldValues;
    console.log(`First name: ${firstname}`);
    console.log(`Middle name: ${middlename}`);
    console.log(`Last name: ${lastname}`);
  }, [fieldValues]);

  const handleFieldChange = (value) => {
    const newFieldValues = {
      ...fieldValues,
      [fieldName]: value
    };
    setFieldValues(newFieldValues);

    if (fieldName === "lastname" && onLastNameChange) {
      onLastNameChange(value);
      
      if (!newFieldValues.lastname.trim()) {
        onLastNameChange("");
      }
    }
  };
  return (
    <div className={styles.textbox}>
      <div className={styles.firstname}>
        <input
          type="text"
          id={id}
          placeholder={children.children}
          className="robotoslab-medium-silver-28px"
          onChange={(event) => handleFieldChange(event.target.value)}
          value={fieldValues[fieldName]}
        ></input>
      </div>
      <div className={styles.rectangle5}></div>
    </div>
  );
}

export default Textbox;
