import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

interface PermissionProviderProps {
    roles: string[];
    permissions: string[];
    children: React.ReactNode;
}
declare const PermissionProvider: ({ roles, permissions, children }: PermissionProviderProps) => react_jsx_runtime.JSX.Element;

declare const usePermission: (requiredRoles?: string[], requiredPermissions?: string[]) => boolean;

type PermissionProps = {
    roles?: string[];
    permissions?: string[];
    children: React.ReactNode;
    fallback?: React.ReactNode;
};
declare const Permission: ({ roles, permissions, children, fallback }: PermissionProps) => react_jsx_runtime.JSX.Element;

export { Permission, PermissionProvider, usePermission };
