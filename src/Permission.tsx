import React from "react";
import { usePermission } from "./usePermission";

type PermissionProps = {
  roles?: string[];
  permissions?: string[];
  children: React.ReactNode;
  fallback?: React.ReactNode;
};

export const Permission = ({ roles = [], permissions = [], children, fallback = null }:PermissionProps) => {
  const hasAccess = usePermission(roles, permissions);
  return <>{hasAccess ? children : fallback}</>;
};
