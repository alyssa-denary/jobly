import {useState} from "react";

/** SearchForm
*
* Props
* -filter (callback function)
*
* State
* -formData {searchText}
*
* {CompanyList,  JobList} --> SearchForm
*/

function SearchForm({filter}) {
  const [formData, setFormData] = useState("");

  function handleSubmit(evt) {
    evt.preventDefault();
    filter(formData);
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(curr => ({
      ...curr,
      [name]: value
    }));
  }

  return (
    <form className="SearchForm" onSubmit={handleSubmit}>
      <label htmlFor="SearchForm-input"></label>
      <input
        id="SearchForm-input"
        placeholder="Enter search term..."
        name="searchText"
        value={formData.searchText}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SearchForm;