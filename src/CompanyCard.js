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
      <Link to={`/companies/${handle}`}>
        <h4>Anderson, Arias, and Morrow</h4>
        <p>Somebody program how I. Face give away discussion</p>
      </Link>
    </div>
  );
}

export default CompanyCard;