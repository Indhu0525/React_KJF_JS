// App.js
import { Routes, Route } from 'react-router-dom';
import { Dashboard } from './components/pages/dashboard/Dashboard';
import { MainLayout } from './components/layouts/MainLayout/MainLayout';
import { Rolemanagement } from './components/pages/user & role managemet/Rolemanagement';
import { Permission } from './components/pages/permission/Permission';
import { UserManagement } from './components/pages/user management/UserManagement';
import { Materialinward } from './components/pages/InventoryManagemnt/MaterialInwarad/Materialinward';
import  { Materialform } from './components/pages/InventoryManagemnt/MaterialInwarad/Materialform';
import { MaterialTotal } from './components/pages/InventoryManagemnt/MaterialInwarad/MaterialTotal';
import { Materialreturn } from './components/pages/InventoryManagemnt/Matrialreturn/Materialreturn';
import { Materialreturnform } from './components/pages/InventoryManagemnt/Matrialreturn/Materialreturnform';
import { MaterialRejection } from './components/pages/InventoryManagemnt/Materialrejection/MaterialRejection';


function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="Role-management" element={<Rolemanagement />}/>
        <Route path="user-management" element={<UserManagement />}/>
        <Route path="Permission" element={<Permission />} />
        <Route path="Material-Inward" element={<Materialinward />}/>
        <Route path="Material-form" element={<Materialform />}/>
        <Route path="Material-total" element={<MaterialTotal />}/>
        <Route path="MaterialReturn" element={<Materialreturn />}/>
        <Route path="MaterialReturnForm" element={<Materialreturnform />}/>
        <Route path="MaterialRejection" element={<MaterialRejection />}/>
      </Route>
    </Routes>
  );
}

export default App;
