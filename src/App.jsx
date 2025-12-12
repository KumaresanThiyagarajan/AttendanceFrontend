import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import Attendance from './pages/Attendance';
import Advances from './pages/Advances';
import SalaryReport from './pages/SalaryReport';

function App() {
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    {/* Public Routes */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    {/* Protected Routes */}
                    <Route
                        path="/*"
                        element={
                            <ProtectedRoute>
                                <div className="app">
                                    <Navbar />
                                    <main style={{ minHeight: 'calc(100vh - 70px)', padding: '2rem 0' }}>
                                        <div className="container">
                                            <Routes>
                                                <Route path="/" element={<Dashboard />} />
                                                <Route path="/employees" element={<Employees />} />
                                                <Route path="/attendance" element={<Attendance />} />
                                                <Route path="/advances" element={<Advances />} />
                                                <Route path="/salary-report" element={<SalaryReport />} />
                                            </Routes>
                                        </div>
                                    </main>
                                </div>
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </AuthProvider>
        </Router>
    );
}

export default App;
