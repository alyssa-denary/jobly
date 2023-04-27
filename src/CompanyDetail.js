import JobCardList from "./JobCardList";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
/** CompanyDetail
*
* Props none
*
* State
* -company
* Effect
* -fetchCompanyOnMount
*   { handle, name, description, numEmployees, logoUrl, jobs }
*   where jobs is [{ id, title, salary, equity }, ...]
*
* RouteList --> CompanyDetail --> JobCardList
*/

function CompanyDetail() {
    const initialCompanyData = {
        isLoading: true,
        data: null,
        errors: null
    }
    const {handle} = useParams();
    const [company, setCompany] = useState(initialCompanyData);

    useEffect(function fetchCompanyWhenMounted() {
        async function fetchCompany() {
            try {
                const companyResult = await getCompany(handle);
                setCompany({
                    isLoading: false,
                    data: companyResult,
                    errors: null
                });
            } catch(err) {
                setCompany({
                    isLoading: false,
                    data: null,
                    errors: err 
                });
            }
        }
    });
    

    return (
        <div className="CompanyDetail">
            <JobCardList jobs={}/>
        </div> 
    )
}

export default CompanyDetail;