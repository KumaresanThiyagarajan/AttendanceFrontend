import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, Users, Clock, DollarSign, FileText, LogOut, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { user, logout } = useAuth();

    const navItems = [
        { path: '/', label: 'Dashboard', icon: Home },
        { path: '/employees', label: 'Employees', icon: Users },
        { path: '/attendance', label: 'Attendance', icon: Clock },
        { path: '/advances', label: 'Advances', icon: DollarSign },
        { path: '/salary-report', label: 'Salary Report', icon: FileText },
    ];

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar-content">
                    <div className="navbar-brand">
                        <Clock className="navbar-logo" size={32} />
                        <span className="navbar-title">AttendancePro</span>
                    </div>

                    <div className="navbar-links">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = location.pathname === item.path;

                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`navbar-link ${isActive ? 'active' : ''}`}
                                >
                                    <Icon size={18} />
                                    <span>{item.label}</span>
                                </Link>
                            );
                        })}
                    </div>

                    <div className="navbar-user">
                        <div className="user-info">
                            <User size={18} />
                            <span className="username">{user?.username}</span>
                            {user?.role === 'admin' && (
                                <span className="badge badge-primary">Admin</span>
                            )}
                        </div>
                        <button
                            className="btn btn-sm btn-secondary"
                            onClick={handleLogout}
                            title="Logout"
                        >
                            <LogOut size={16} />
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
