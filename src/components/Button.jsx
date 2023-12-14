export default function Button({ type, children }) {
  return (
    <button
      type="primary"
      className={`
      btn ${type === "secondary" ? "btn--secondary" : ""}
    `}
    >
      {children}
    </button>
  );
}
