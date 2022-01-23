import { FormRow, FormRowSelect } from '.';
import { useAppContext } from '../context/appContext';
import Wrapper from '../assets/wrappers/SearchContainer';

const SearchContainer = () => {
  const {
    isLoading,
    search,
    searchStatus,
    searchType,
    sort,
    sortOptions,
    statusOptions,
    jobTypeOptions,
    handleChange,
    clearFilters,
  } = useAppContext();

  const handleSearch = (e) => {
    if (isLoading) return;
    handleChange({ name: e.target.name, value: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearFilters();
  };

  return (
    <Wrapper>
      <form className='form'>
        <h4>Search Form</h4>
        <div className='form-center'>
          {/* search position*/}
          <FormRow
            type='text'
            name='search'
            value={search}
            handleChange={handleSearch}
          />
          {/* search by status */}
          <FormRowSelect
            name='searchStatus'
            labelText='Status'
            options={['all', ...statusOptions]}
            value={searchStatus}
            handleChange={handleSearch}
          />
          {/* search by job type */}
          <FormRowSelect
            name='searchType'
            labelText='Type'
            options={['all', ...jobTypeOptions]}
            value={searchType}
            handleChange={handleSearch}
          />
          {/* search by sorting */}
          <FormRowSelect
            name='sort'
            options={sortOptions}
            value={sort}
            handleChange={handleSearch}
          />
          <button
            className='btn btn-block btn-danger'
            disabled={isLoading}
            onClick={handleSubmit}
          >
            Clear Filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default SearchContainer;
