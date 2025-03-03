// src/context.tsx
import { createContext, useContext } from "react";
import { jsx } from "react/jsx-runtime";
var PermissionContext = createContext(null);
var PermissionProvider = ({ roles, permissions, children }) => {
  return /* @__PURE__ */ jsx(PermissionContext.Provider, { value: { roles, permissions }, children });
};
var usePermissionContext = () => {
  const context = useContext(PermissionContext);
  if (!context) {
    throw new Error("usePermissionContext must be used within a PermissionProvider");
  }
  return context;
};

// src/usePermission.ts
var usePermission = (requiredRoles = [], requiredPermissions = []) => {
  console.log("usePermission===>");
  const { roles, permissions } = usePermissionContext();
  const hasRole = requiredRoles.length === 0 || requiredRoles.some((role) => roles.includes(role));
  const hasPermission = requiredPermissions.length === 0 || requiredPermissions.some((permission) => permissions.includes(permission));
  return hasRole && hasPermission;
};

// src/Permission.tsx
import { Fragment, jsx as jsx2 } from "react/jsx-runtime";
var Permission = ({ roles = [], permissions = [], children, fallback = null }) => {
  const hasAccess = usePermission(roles, permissions);
  return /* @__PURE__ */ jsx2(Fragment, { children: hasAccess ? children : fallback });
};
export {
  Permission,
  PermissionProvider,
  usePermission
};
