import items from "../data/Skills";

export default function Skills() {
  return (
    <div className="flex flex-col mt-8">
      <h1 className="font-bold text-3xl text-blue-300">Skills</h1>
      <div className="flex flex-wrap">
        {items.map((item, index) => (
          <span
            className="bg-blue-300 text-blue-900 p-2 font-bold text-xs m-2 rounded-md"
            key={index}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
