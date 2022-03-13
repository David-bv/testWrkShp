import {
    Routes, Route,
    Navigate
} from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Employees } from '../components/Employees';

export const DashboardRoutes = () => {
    return ( 
        <>
            <Navbar />
            <div>
                <Routes>
                    <Route path="/" element={<Employees />} />
                    <Route path='*' element={<Navigate to="/" />} />
                </Routes>
            </div>

        </>
    )
}
