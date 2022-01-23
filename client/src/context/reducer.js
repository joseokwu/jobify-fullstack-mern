import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  // REGISTER_USER_BEGIN,
  // REGISTER_USER_SUCCESS,
  // REGISTER_USER_ERROR,
  // LOGIN_USER_BEGIN,
  // LOGIN_USER_SUCCESS,
  // LOGIN_USER_ERROR,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  TOGGLE_SIDEBAR,
  LOGOUT_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  UPDATE_USER_BEGIN,
  HANDLE_CHANGE,
  CLEAR_VALUES,
  CREATE_JOB_BEGIN,
  CREATE_JOB_SUCCESS,
  CREATE_JOB_ERROR,
  GET_JOBS_BEGIN,
  GET_JOBS_SUCCESS,
  SET_EDIT_JOB,
  EDIT_JOB_BEGIN,
  EDIT_JOB_SUCCESS,
  EDIT_JOB_ERROR,
  DELETE_JOB_BEGIN,
  DELETE_JOB_SUCCESS,
  DELETE_JOB_ERROR,
  SHOW_STATS_BEGIN,
  SHOW_STATS_ERROR,
  SHOW_STATS_SUCCESS,
  CLEAR_FILTERS,
  CHANGE_PAGE,
  GET_JOBS_ERROR,
} from './actions';
import { initialState } from './appContext';

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertText: 'Please provide all values',
      alertType: 'danger',
    };
  }

  if (action.type === CLEAR_ALERT) {
    return { ...state, showAlert: false, alertText: '', alertType: '' };
  }

  // if (action.type === REGISTER_USER_BEGIN) {
  //   return { ...state, isLoading: true };
  // }

  // if (action.type === REGISTER_USER_SUCCESS) {
  //   return {
  //     ...state,
  //     isLoading: false,
  //     showAlert: true,
  //     alertText: 'User Created! Redirecting...',
  //     alertType: 'success',
  //     user: action.payload.user,
  //     token: action.payload.token,
  //     userLocation: action.payload.location,
  //     jobLocation: action.payload.location,
  //   };
  // }

  // if (action.type === REGISTER_USER_ERROR) {
  //   return {
  //     ...state,
  //     isLoading: false,
  //     showAlert: true,
  //     alertText: action.payload.msg,
  //     alertType: 'danger',
  //   };
  // }

  // if (action.type === LOGIN_USER_BEGIN) {
  //   return { ...state, isLoading: true };
  // }

  // if (action.type === LOGIN_USER_SUCCESS) {
  //   return {
  //     ...state,
  //     isLoading: false,
  //     showAlert: true,
  //     alertText: 'Login Successful! Redirecting...',
  //     alertType: 'success',
  //     user: action.payload.user,
  //     token: action.payload.token,
  //     userLocation: action.payload.location,
  //     jobLocation: action.payload.location,
  //   };
  // }

  // if (action.type === LOGIN_USER_ERROR) {
  //   return {
  //     ...state,
  //     isLoading: false,
  //     showAlert: true,
  //     alertText: action.payload.msg,
  //     alertType: 'danger',
  //   };
  // }

  if (action.type === SETUP_USER_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === SETUP_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertText: action.payload.alertText,
      alertType: 'success',
      user: action.payload.user,
      token: action.payload.token,
      userLocation: action.payload.location,
      jobLocation: action.payload.location,
    };
  }

  if (action.type === SETUP_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertText: action.payload.msg,
      alertType: 'danger',
    };
  }

  if (action.type === TOGGLE_SIDEBAR) {
    return { ...state, showSidebar: !state.showSidebar };
  }

  if (action.type === LOGOUT_USER) {
    return {
      ...initialState,
      user: null,
      token: null,
      userLocation: '',
      jobLocation: '',
    };
  }

  if (action.type === UPDATE_USER_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === UPDATE_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertText: 'User Profile Updated',
      alertType: 'success',
      user: action.payload.user,
      token: action.payload.token,
      userLocation: action.payload.location,
      jobLocation: action.payload.location,
    };
  }

  if (action.type === UPDATE_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertText: action.payload.msg,
      alertType: 'danger',
    };
  }

  if (action.type === HANDLE_CHANGE) {
    return { ...state, page: 1, [action.payload.name]: action.payload.value };
  }

  if (action.type === CLEAR_VALUES) {
    const initialState = {
      isEditing: false,
      editJobId: '',
      position: '',
      company: '',
      jobLocation: state.jobLocation,
      jobType: 'full-time',
      status: 'pending',
    };
    return { ...state, ...initialState };
  }

  if (action.type === CREATE_JOB_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === CREATE_JOB_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertText: 'Job Created',
      alertType: 'success',
    };
  }

  if (action.type === CREATE_JOB_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertText: action.payload.msg,
      alertType: 'danger',
    };
  }
  // Get jobs
  if (action.type === GET_JOBS_BEGIN) {
    return { ...state, isLoading: true, showAlert: false };
  }

  if (action.type === GET_JOBS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      jobs: action.payload.jobs,
      totalJobs: action.payload.totalJobs,
      numOfPages: action.payload.numOfPages,
    };
  }

  if (action.type === GET_JOBS_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertText: action.payload.msg,
      alertType: 'danger',
    };
  }

  //Set edit job
  if (action.type === SET_EDIT_JOB) {
    const job = state.jobs.find((job) => job._id === action.payload);
    const { _id, position, company, jobLocation, jobType, status } = job;
    return {
      ...state,
      isEditing: true,
      editJobId: _id,
      position,
      company,
      jobLocation,
      jobType,
      status,
    };
  }

  //Edit job
  if (action.type === EDIT_JOB_BEGIN) {
    return { ...state, isLoading: true, showAlert: false };
  }

  if (action.type === EDIT_JOB_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertText: 'Job Edited',
      alertType: 'success',
    };
  }

  if (action.type === EDIT_JOB_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertText: action.payload.msg,
      alertType: 'danger',
    };
  }

  // Delete job
  if (action.type === DELETE_JOB_BEGIN) {
    return {
      ...state,
      isLoading: true,
      showAlert: false,
    };
  }

  if (action.type === DELETE_JOB_SUCCESS) {
    return {
      ...state,
      showAlert: true,
      alertText: 'Success! Job Deleted',
      alertType: 'success',
    };
  }

  if (action.type === DELETE_JOB_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertText: action.payload.msg,
      alertType: 'danger',
    };
  }

  // Delete job
  if (action.type === SHOW_STATS_BEGIN) {
    return {
      ...state,
      isLoading: true,
      showAlert: false,
    };
  }

  if (action.type === SHOW_STATS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      stats: action.payload.stats,
      monthlyApplications: action.payload.monthlyApplications,
    };
  }

  if (action.type === SHOW_STATS_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertText: action.payload.msg,
      alertType: 'danger',
    };
  }
  //Clear job filters
  if (action.type === CLEAR_FILTERS) {
    const initialState = {
      search: '',
      searchStatus: 'all',
      searchType: 'all',
      sort: 'latest',
    };
    return { ...state, ...initialState };
  }

  //change page in all jobs
  if (action.type === CHANGE_PAGE) {
    return { ...state, page: action.payload };
  }
  throw new Error(`no such action: ${action.type}`);
};

export default reducer;
