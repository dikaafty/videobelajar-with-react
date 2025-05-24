import eyeOffIcon from "../assets/images/eye-off-icon.png";

const IdenticalInput = (
  { fieldName, labelText, inputType, isPassInput = false }
) => {
  if(!isPassInput) {
    return (
      <div className="identicalInputContainer">
        <label 
          htmlFor={fieldName} 
          className="identicalLabel">
            {labelText}
            <span className="asterisk">*</span>
        </label>
        <input 
          type={inputType}
          name={fieldName}
          id={fieldName}
          required
        />
      </div>
    );
  } else {
    return (
      <div className="identicalInputContainer">
        <label 
          htmlFor={fieldName} 
          className="identicalLabel">
            {labelText}
            <span className="asterisk">*</span>
        </label>

        <div className="wrapper">
          <input 
            type={inputType}
            name={fieldName}
            id={fieldName}
            required
          />
          <button type="button">
            <img 
              src={eyeOffIcon} 
              alt="eye off icon" 
              className="eyeOffIcon" 
            />
          </button>
        </div>
      </div>
    );
  }
}

export default IdenticalInput;