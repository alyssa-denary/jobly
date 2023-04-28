

/** Stores token in local storage. 
 * 
 */

function setLocalToken(token) {
    localStorage.setItem("token", token);
}


/** Retrieve token from local storage for site use */

function retrievLocalToken (key) {
    const token = localStorage.getItem(key);
}
