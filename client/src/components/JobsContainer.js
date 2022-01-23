import { useAppContext } from '../context/appContext';
import { useEffect } from 'react';
import Loading from './Loading';
import { Job } from '../components';
import Wrapper from '../assets/wrappers/JobsContainer';
import Alert from './Alert';
import PageBtnContainer from './PageBtnContainer';

const JobsContainer = () => {
  const {
    isLoading,
    jobs,
    getJobs,
    totalJobs,
    page,
    showAlert,
    search,
    searchStatus,
    searchType,
    sort,
    numOfPages,
  } = useAppContext();

  useEffect(() => {
    getJobs();
    // eslint-disable-next-line
  }, [search, searchStatus, searchType, sort, page]);

  if (isLoading) {
    return <Loading center />;
  }
  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No Jobs Available...</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h5>
        {totalJobs} Job{jobs.length > 1 && 's'} Found
      </h5>
      {showAlert && <Alert />}
      <div className='jobs'>
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
      {/* pagination buttons */}
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};

export default JobsContainer;
