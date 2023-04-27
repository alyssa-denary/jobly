import { Link } from "react-router-dom";
import "./CompanyCard.css";

/** CompanyCard
*
* Props
* -company {name, handle, description, logoUrl]}
*
* State none
*
* Effect none
*
* CompanyList --> CompanyCard
*/

// TODO: change destructuring to be in CompanyList when pass down props
function CompanyCard({ company }) {
  const { name, handle, description, logoUrl } = company;

  return (
    <div className="CompanyCard card card-body">
      <Link to={`/companies/${handle}`} className="card-title">
        {logoUrl && <img className="CompanyCard-logo" src={logoUrl} alt={`${name}'s logo`} />}
        <h4>{name}</h4>
        <p>{description}</p>
      </Link>
    </div>
  );
}

export default CompanyCard;