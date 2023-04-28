
/** Alert
 *
 * Props:
 * - messages: ["Invalid username/password"]
 * - type: "danger" or "success"
 *
 * State none
 *
 * (LoginForm, SignUpForm, ProfileForm) --> Alert
 */

function Alert({ messages, type }) {

  return (
    <div className={`Alert alert alert-${type}`}>
      <ul>
        {messages.map((m, i) => (
          <li key={i}>{m}</li>
        ))}
      </ul>
    </div>
  );
}

export default Alert;