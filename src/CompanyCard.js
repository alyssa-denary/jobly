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
  const {name, handle, description, logo_url} = company;

  console.log('logoURL: ' ,logo_url);

  return (
    <div className="CompanyCard">
      <Link to={`/companies/${handle}`}>
        {logo_url && <img className="CompanyCard-logo" src={logo_url} alt={`${name}'s logo`}/>}
        <h4>{name}</h4>
        <p>{description}</p>
      </Link>
    </div>
  );
}

export default CompanyCard;