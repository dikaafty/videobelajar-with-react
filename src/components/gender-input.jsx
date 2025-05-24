const GenderInput = () => {
  return (
    <div className="genderInputContainer">
      <label 
        htmlFor="userGender" 
        className="identicalLabel">
          Jenis Kelamin 
          <span className="asterisk">*</span>
      </label>

      <select 
        name="userGender" 
        id="userGender" 
        required>
        <option 
          value="Wanita" 
          selected>
            Wanita
        </option>
        <option 
          value="Pria">
            Pria
        </option>
      </select>
    </div>
  );
}

export default GenderInput;