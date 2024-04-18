import React from 'react';
import { Button } from '@mui/material';

const DashboardPage = () => {
  return (
    <div>
      <h2>Dashboard | JEE</h2>
      <ul>
        <li><Button>Guidelines</Button></li>
        <li><Button>Frequently Asked Questions(FAQ)</Button></li>
        <li><Button>SBI Transaction Tracking</Button></li>
        <li><Button>Payment Complaint</Button></li>
        <li><Button>Track Your Complaint</Button></li>
      </ul>
    </div>
  );
};

export default DashboardPage;
