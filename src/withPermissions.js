import React from 'react';
import { usePermissions } from './PermissionContext';

const withPermissions = (WrappedComponent, requiredPermissions) => {
  return (props) => {
    const { permissions } = usePermissions();

    const hasPermission = requiredPermissions.every(permission =>
      permissions.includes(permission)
    );

    if (hasPermission) {
      return <WrappedComponent {...props} />;
    }

    return <div>You do not have the required permissions to view this content.</div>;
  };
};

export default withPermissions;
