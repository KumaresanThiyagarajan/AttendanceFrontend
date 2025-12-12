import { useAuth } from '../context/AuthContext';

// Custom hook to check permissions
// Usage: const { isAdmin, canEdit, canDelete, canCreate, isViewOnly } = usePermissions();
export const usePermissions = () => {
    const { user } = useAuth();

    return {
        isAdmin: user?.role === 'admin',
        canEdit: user?.role === 'admin',
        canDelete: user?.role === 'admin',
        canCreate: user?.role === 'admin',
        isViewOnly: user?.role !== 'admin'
    };
};

