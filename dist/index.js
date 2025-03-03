var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  IVY_VERSION: () => IVY_VERSION,
  Permission: () => Permission,
  PermissionProvider: () => PermissionProvider,
  usePermission: () => usePermission
});
module.exports = __toCommonJS(index_exports);

// src/context.tsx
var import_react = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
var PermissionContext = (0, import_react.createContext)(null);
var PermissionProvider = ({ roles, permissions, children }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PermissionContext.Provider, { value: { roles, permissions }, children });
};
var usePermissionContext = () => {
  const context = (0, import_react.useContext)(PermissionContext);
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
var import_jsx_runtime2 = require("react/jsx-runtime");
var Permission = ({ roles = [], permissions = [], children, fallback = null }) => {
  const hasAccess = usePermission(roles, permissions);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_jsx_runtime2.Fragment, { children: hasAccess ? children : fallback });
};

// src/constant.ts
var IVY_VERSION = "1.0.0";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  IVY_VERSION,
  Permission,
  PermissionProvider,
  usePermission
});
