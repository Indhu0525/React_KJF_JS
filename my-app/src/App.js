// App.js
import { Routes, Route } from 'react-router-dom';
import { Dashboard } from './components/pages/dashboard/Dashboard';
import { MainLayout } from './components/layouts/MainLayout/MainLayout';
import { Rolemanagement } from './components/pages/user & role managemet/Rolemanagement';
import { Permission } from './components/pages/permission/Permission';


function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="Role-management" element={<Rolemanagement />}/>
        <Route path="Permission" element={<Permission />} />
      </Route>
    </Routes>
  );
}

export default App;
