"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _PermissionContext = require("./PermissionContext");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var withPermissions = function withPermissions(WrappedComponent, requiredPermissions) {
  return function (props) {
    var _usePermissions = (0, _PermissionContext.usePermissions)(),
      permissions = _usePermissions.permissions;
    var hasPermission = requiredPermissions.every(function (permission) {
      return permissions.includes(permission);
    });
    if (hasPermission) {
      return /*#__PURE__*/_react["default"].createElement(WrappedComponent, props);
    }
    return /*#__PURE__*/_react["default"].createElement("div", null, "You do not have the required permissions to view this content.");
  };
};
var _default = exports["default"] = withPermissions;