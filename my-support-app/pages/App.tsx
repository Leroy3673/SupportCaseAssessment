// App.tsx will link LoginPage.tsx, CaseDetailPage.tsx, DashBoardPage.tsx, and SupportCaseForm.tsx

// We will use recat at this point
import React from 'react';

// 1.  Importing necessary components from react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

//2.  Importing LoginPage component
import LoginPage from './LoginPage';

//3. Importing DashboardPage component
import DashboardPage from './DashBoardPage'; 

//4. Importing SupportCaseForm component
import SupportCaseForm from './SupportCaseForm'; 

//5. Importing CaseDetailPage component
import CaseDetailPage from './CaseDetailPage'; 

const App = () => {
  return (
    <Router> {/* Wrap the application in the Router component to enable routing */}
      <div>
        {/* Header or navigation bar */}
        <header>
          <nav>
            {/* Navigation links */}
            <ul>
              {/* Links to different parts of the application */}
              <li><a href="/">Login</a></li>
              <li><a href="/dashboard">Dashboard</a></li>
              <li><a href="/create-support-case">Create Support Case</a></li>
            </ul>
          </nav>
        </header>

        {/* Main content area */}
        <main>
          <Routes> {/* Define routes for different components */}
            {/* Route definitions */}
            {/* Route for the LoginPage component */}
            <Route path="/" element={<LoginPage />} />
            {/* Route for the DashboardPage component */}
            <Route path="/dashboard" element={<DashboardPage />} />
            {/* Route for the SupportCaseForm component */}
            <Route path="/create-support-case" element={<SupportCaseForm />} />
            {/* Route for the CaseDetailPage component */}
            <Route path="/case/:id" element={<CaseDetailPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;


