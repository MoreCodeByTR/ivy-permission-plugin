import React, { createContext, useContext } from "react";

export type PermissionContextType = {
  roles: string[];
  permissions: string[];
};

export const PermissionContext = createContext<PermissionContextType | null>(null);

interface  PermissionProviderProps {
  roles: string[];
  permissions: string[];
  children: React.ReactNode;
}

export const PermissionProvider = ({ roles, permissions, children }:PermissionProviderProps) => {
  return (
    <PermissionContext.Provider value={{ roles, permissions }}>
      {children}
    </PermissionContext.Provider>
  );
};

export const usePermissionContext = () => {
  const context = useContext(PermissionContext);
  if (!context) {
    throw new Error("usePermissionContext must be used within a PermissionProvider");
  }
  return context;
};
