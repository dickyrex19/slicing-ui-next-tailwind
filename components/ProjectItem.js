/* eslint-disable @next/next/no-img-element */
export default function ProjectItem({ image, name, desc }) {
  return (
    <article className="text-center">
      <img src={image} className="w-full rounded-lg" alt="#" />
      <h3 className="text-xl font-semibold mt-4 mb-1">{name}</h3>
      <p className="text-lg text-gray-400">{desc}</p>
    </article>
  );
}
