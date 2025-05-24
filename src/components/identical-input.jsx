import eyeOffIcon from "../assets/images/eye-off-icon.png";

const IdenticalInput = (
  { labelFor, labelText, inputType, inputName, inputId, isPassInput = false }
) => {
  if(!isPassInput) {
    return (
      <div className="identicalInputContainer">
        <label 
          htmlFor={labelFor} 
          className="identicalLabel">
            {labelText}
            <span className="asterisk">*</span>
        </label>
        <input 
          type={inputType}
          name={inputName}
          id={inputId}
          required
        />
      </div>
    );
  } else {
    return (
      <div className="identicalInputContainer">
        <label 
          htmlFor={labelFor} 
          className="identicalLabel">
            {labelText}
            <span className="asterisk">*</span>
        </label>

        <div className="wrapper">
          <input 
            type={inputType}
            name={inputName}
            id={inputId}
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