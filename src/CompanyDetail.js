import JobCardList from "./JobCardList";
import { useEffect, useState } from "react";
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
  const [companyApiData, setCompanyApiData] = useState(initialCompanyData);

  /** fetches company info on handle provided by params */
  useEffect(function fetchCompanyWhenMounted() {
    async function fetchCompany() {
      try {
        const companyResult = await JoblyApi.getCompany(handle);
        setCompanyApiData({
          isLoading: false,
          data: companyResult,
          errors: null
        });
      } catch (err) {
        setCompanyApiData({
          isLoading: false,
          data: null,
          errors: err
        });
      }
    }
    fetchCompany();
  }, []);
  // TODO: add handle to watch list above. Whenever referencing params/state
  // likely should have in dependency, then use conditional logic on line 47 to
  // only run fetchCompany if (some condition) is met.

  return (
    <div className="CompanyDetail">
      {companyApiData.isLoading && <p>Loading...</p>}
      {companyApiData.errors !== null && <Navigate to="/companies" />}
      {companyApiData.data !== null &&
        <div>
          <h2>{companyApiData.data.name}</h2>
          <p>{companyApiData.data.description}</p>
          <JobCardList jobs={companyApiData.data.jobs} />
        </div>
      }
    </div>
  );
}

export default CompanyDetail;