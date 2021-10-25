import classNames from "classnames";

export default function Button({ href, className, variant, children, pill }) {
  const variants = {
    "outline-yellow": `border border-yellow-500 text-yellow-500 hover:text-black hover:bg-yellow-500`,
    "fill-yellow": `bg-yellow-500 hover:bg-yellow-600 text-black`,
    "fill-black": `bg-black text-white hover:bg-opacity-90`,
  };

  const pickedVariant = variants[variant];

  return (
    <a
      href={href}
      className={classNames(
        "font-semibold text-lg py-3 px-10 inline-block cursor-pointer transition",
        pill && `rounded-full`,
        pickedVariant,
        className
      )}
    >
      {children}
    </a>
  );
}
