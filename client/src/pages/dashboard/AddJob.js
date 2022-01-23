import { FormRow, Alert, FormRowSelect } from '../../components';
import { useAppContext } from '../../context/appContext';
import Wrapper from '../../assets/wrappers/DashboardFormPage';

const AddJob = () => {
  const {
    showAlert,
    isEditing,
    position,
    company,
    jobLocation,
    displayAlert,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    handleChange,
    clearValues,
    createJob,
    isLoading,
    editJob,
  } = useAppContext();

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange({ name, value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!position || !company || !jobLocation) {
      displayAlert();
      return;
    }
    if (isEditing) {
      editJob();
      return;
    }
    createJob();
  };
  return (
    <Wrapper>
      <div className='form'>
        <h3>{isEditing ? 'Edit Job' : 'Add Job'}</h3>
        {showAlert && <Alert />}
        <div className='form-center'>
          {/* position */}
          <FormRow
            type='text'
            name='position'
            value={position}
            handleChange={handleJobInput}
          />
          {/* company */}
          <FormRow
            type='text'
            name='company'
            value={company}
            handleChange={handleJobInput}
          />
          {/* jobLocation */}
          <FormRow
            type='text'
            labelText='Location'
            name='jobLocation'
            value={jobLocation}
            handleChange={handleJobInput}
          />
          {/* jobType */}
          <FormRowSelect
            name='jobType'
            value={jobType}
            options={jobTypeOptions}
            labelText='Job Type'
            handleChange={handleJobInput}
          />
          {/* status */}
          <FormRowSelect
            name='status'
            value={status}
            options={statusOptions}
            handleChange={handleJobInput}
          />
          <div className='btn-container'>
            <button
              className='btn btn-block btn-submit'
              type='submit'
              onClick={handleSubmit}
              disabled={isLoading}
            >
              Submit
            </button>
            <button
              className='btn btn-block clear-btn'
              onClick={(e) => {
                e.preventDefault();
                clearValues();
              }}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default AddJob;
