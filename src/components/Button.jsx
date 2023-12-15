export default function Button({ buttonType, children, onClick }) {
  return (
    <button
      onClick={onClick}
      type="primary"
      className={`
      btn ${buttonType === "secondary" ? "btn--secondary" : ""}
    `}
    >
      {children}
    </button>
  );
}
