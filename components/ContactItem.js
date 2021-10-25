import classNames from "classnames";

/* eslint-disable @next/next/no-img-element */
export default function ContactItem({ icon, label, value, className }) {
  return (
    <div className={classNames("flex items-start", className)}>
      <img src={icon} alt="" className="w-8" />
      <div className="ml-4">
        <div className="text-sm font-semibold mb-1">{label}</div>
        <div className="text-lg font-semibold">{value}</div>
      </div>
    </div>
  );
}
