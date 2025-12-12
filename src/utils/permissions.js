import { useAuth } from '../context/AuthContext';

// Check if user has admin role
export const isAdmin = () => {
    const { user } = useAuth();
    return user?.role === 'admin';
};

// Check if user can edit (only admins)
export const canEdit = () => {
    return isAdmin();
};

// Check if user can delete (only admins)
export const canDelete = () => {
    return isAdmin();
};

// Check if user can create (only admins)
export const canCreate = () => {
    return isAdmin();
};

// Check if user is view-only (non-admin)
export const isViewOnly = () => {
    return !isAdmin();
};
