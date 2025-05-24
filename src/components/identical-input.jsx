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
      
    );
  }
}