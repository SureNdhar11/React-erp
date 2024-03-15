import React from 'react';
import '../App.css';
//import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import { ButtonContainer } from './Button';
import dashboardImage from '../img/dashboardImage.jpeg'; // Import your image
//import './dash.css'; // Import your custom CSS file for styling

export default function Dashboard() {
    return (
        <div className="dashboard-container">
            <img src={dashboardImage} alt="Dashboard Image" className="dashboard-image" />
            
        </div>
    );
}
