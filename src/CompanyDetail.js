import JobCardList from "./JobCardList";
import { useEffect, useState} from "react";
import { useParams, Navigate } from "react-router-dom";
import JoblyApi from "./api";

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
  };
  const { handle } = useParams();
  const [company, setCompany] = useState(initialCompanyData);

  /** fetches company info on handle provided by params */
  useEffect(function fetchCompanyWhenMounted() {
    async function fetchCompany() {
      try {
        const companyResult = await JoblyApi.getCompany(handle);
        setCompany({
          isLoading: false,
          data: companyResult,
          errors: null
        });
      } catch (err) {
        setCompany({
          isLoading: false,
          data: null,
          errors: err
        });
      }
    }
    fetchCompany();
  }, [ ]);


  return (
    <div className="CompanyDetail">
      {company.isLoading && <p>Loading...</p>}
      {company.errors !== null && <Navigate to="/companies" />}
      {company.data !== null &&
        <div>
          <h2>{company.data.name}</h2>
          <p>{company.data.description}</p>
          <JobCardList jobs={company.data.jobs} />
        </div>
      }
    </div>
  );
}

export default CompanyDetail;