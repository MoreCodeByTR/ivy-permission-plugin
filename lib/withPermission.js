"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _PermissionContext = require("./PermissionContext");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var withPermission = function withPermission(WrappedComponent, requiredPermission) {
  return function (props) {
    var _usePermissions = (0, _PermissionContext.usePermissions)(),
      permissions = _usePermissions.permissions;
    if (permissions.includes(requiredPermission)) {
      return /*#__PURE__*/_react["default"].createElement(WrappedComponent, props);
    }
    return /*#__PURE__*/_react["default"].createElement("div", null, "You do not have the required permission to view this content.");
  };
};
var _default = exports["default"] = withPermission;