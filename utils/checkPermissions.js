import { UnauthenticatedError } from '../errors/index.js';

const checkPermissions = (requestUser, resourceUserId) => {
  // if (requestUser.role === 'admin') return;
  if (requestUser.userId === resourceUserId.toString()) return;
  throw new UnauthenticatedError(
    'You are not authorized to access this resource'
  );
};

export default checkPermissions;
