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

function CompanyCard({ name, handle, description, logoUrl }) {

  return (
    <div className="CompanyCard card">
      <Link to={`/companies/${handle}`}>
        <div className="card-body">
          {logoUrl &&
            <img
              className="CompanyCard-logo"
              src={logoUrl}
              alt={`${name}'s logo`}
            />}
          <h4 className="card-title remove-underline">{name}</h4>
          <p><small className="remove-underline">{description}</small></p>
        </div>
      </Link>
    </div>
  );
}

export default CompanyCard;