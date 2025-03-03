import { usePermissionContext } from "./context";

export const usePermission = (requiredRoles: string[] = [], requiredPermissions: string[] = []) => {
  console.log("usePermission===>");
  
  const { roles, permissions } = usePermissionContext();

  const hasRole = requiredRoles.length === 0 || requiredRoles.some(role => roles.includes(role));
  const hasPermission =
    requiredPermissions.length === 0 || requiredPermissions.some(permission => permissions.includes(permission));

  return hasRole && hasPermission;
};
