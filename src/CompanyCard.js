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
  const {name, handle, description, logoURL} = company;

  return (
    <div className="CompanyCard">
      <Link to={`/companies/${handle}`}>
        <img className="CompanyCard-logo" src={logoURL} alt={`${name}'s logo`}/>
        <h4>{name}</h4>
        <p>{description}</p>
      </Link>
    </div>
  );
}

export default CompanyCard;