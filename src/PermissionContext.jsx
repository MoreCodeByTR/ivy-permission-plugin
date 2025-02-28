import React, { createContext, useContext, useState, useEffect } from 'react';

const PermissionContext = createContext();

export const PermissionProvider = ({ children }) => {
  const [permissions, setPermissions] = useState([]);

  useEffect(() => {
    const userPermissions = ['view_dashboard', 'edit_profile']; // 示例权限
    setPermissions(userPermissions);
  }, []);

  return (
    <PermissionContext.Provider value={{ permissions }}>
      {children}
    </PermissionContext.Provider>
  );
};

export const usePermissions = () => {
  return useContext(PermissionContext);
};
