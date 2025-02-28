import React from 'react';
import { usePermissions } from './PermissionContext';

const withPermission = (WrappedComponent, requiredPermission) => {
  return (props) => {
    const { permissions } = usePermissions();

    if (permissions.includes(requiredPermission)) {
      return <WrappedComponent {...props} />;
    }

    return <div>You do not have the required permission to view this content.</div>;
  };
};

export default withPermission;
