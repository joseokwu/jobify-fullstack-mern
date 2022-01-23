const FormRowSelect = ({ name, options, labelText, handleChange, value }) => {
  return (
    <div className='form-row'>
      <label htmlFor='jobType' className='form-label'>
        {labelText || name}
      </label>
      <select
        name={name}
        value={value}
        className='form-select'
        onChange={handleChange}
      >
        {options.map((itemValue, index) => {
          return (
            <option key={index} value={itemValue}>
              {itemValue}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormRowSelect;
