const PhoneInput = () => {
  return (
    <div className="phoneInputContainer">
      <label 
        htmlFor="userPhone" 
        className="identicalLabel">
          No. Hp
          <span className="asterisk">*</span>
      </label>

      <div className="phoneInputWrapper">
        <div className="countryCode">
          <div className="countryFlagContainer">
            <img 
              src="https://flagcdn.com/w40/id.png" 
              alt="Indonesia Flag" 
            />
          </div>

          <select>
            <option 
              value="+62" 
              selected>
                +62
            </option>
          </select>
        </div>

        <input 
          type="tel" 
          name="userPhone" 
          id="userPhone" 
          required 
        />
      </div>
    </div>
  );
}

export default PhoneInput;