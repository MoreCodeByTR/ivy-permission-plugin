"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "IVY_VERSION", {
  enumerable: true,
  get: function get() {
    return _constant.IVY_VERSION;
  }
});
Object.defineProperty(exports, "PermissionProvider", {
  enumerable: true,
  get: function get() {
    return _PermissionContext.PermissionProvider;
  }
});
Object.defineProperty(exports, "usePermissions", {
  enumerable: true,
  get: function get() {
    return _PermissionContext.usePermissions;
  }
});
Object.defineProperty(exports, "withPermission", {
  enumerable: true,
  get: function get() {
    return _withPermission["default"];
  }
});
Object.defineProperty(exports, "withPermissions", {
  enumerable: true,
  get: function get() {
    return _withPermissions["default"];
  }
});
var _PermissionContext = require("./PermissionContext");
var _withPermission = _interopRequireDefault(require("./withPermission"));
var _withPermissions = _interopRequireDefault(require("./withPermissions"));
var _constant = require("./constant");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }