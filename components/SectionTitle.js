export default function SectionTitle({ left, children }) {
  return (
    <div>
      <h2
        className={`text-2xl font-semibold font-mono ${
          !left ? "text-center" : ""
        } `}
      >
        {children}
      </h2>
    </div>
  );
}
