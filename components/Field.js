export default function Field({ label, name, type, className }) {
  const addClassName = className ? `${className}` : "";
  const formControllClassName = `bg-transparent border border-primaryGray-300 py-3 px-6 w-full ${addClassName}`;

  return (
    <div className="mb-6">
      <label className="block mb-1 font-semibold" htmlFor={name}>
        {label}
      </label>
      {type === "text" && (
        <input
          type="text"
          name={name}
          id={name}
          className={formControllClassName}
        />
      )}

      {type === "textarea" && (
        <textarea name={name} id={name} className={formControllClassName} />
      )}
    </div>
  );
}
