// App.js
import { Routes, Route } from 'react-router-dom';
import { Dashboard } from './components/pages/dashboard/Dashboard';
import { MainLayout } from './components/layouts/MainLayout/MainLayout';
import { Rolemanagement } from './components/pages/user & role managemet/Rolemanagement';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="role-management" element={<Rolemanagement />} />
      </Route>
    </Routes>
  );
}

export default App;
