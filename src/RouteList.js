import { Routes, Route, Navigate } from 'react-router-dom';
import CompanyList from './CompanyList';
import JobList from './JobList';
import CompanyDetail from './CompanyDetail';
import Homepage from './Homepage';

/** Route list
 * 
 * Props: none
 * 
 * State : none
 * 
 * App --> RouteList --> { Homepage, CompanyList, CompanyDetail, JobList}
 */

function RouteList() {
    return (
        <Routes>
            <Route
                path="/"
                element={<Homepage/>}
            />

            <Route
                path="/companies"
                element={<CompanyList/>}
            />

            <Route
                path="/companies/:handle"
                element={<CompanyDetail/>}
            />

            <Route
                path="/jobs"
                element={<JobList/>}
            />
        </Routes>
    );
}

export default RouteList;