import { Link } from "react-router-dom";

/** CompanyCard
*
* Props
* -company {name, handle, description, logoURL]}
*
* State none
*
* Effect none
*
* CompanyList --> CompanyCard
*/

function CompanyCard({ company }) {

  const handle = "anderson";

  return (
    <div className="CompanyCard">
      <Link to={`/companies/${handle}`}>I'm a company card</Link>
    </div>
  );
}

export default CompanyCard;