import items from "../data/Work";

export default function Work() {
  return (
    <div className="flex flex-col mt-8">
      <h1 className="font-bold text-3xl text-blue-300 mb-2">Work Experience</h1>
      <div className="flex flex-col">
        {items.map((item, index) => (
          <div className="mb-4" key={index}>
            <div className="flex justify-between w-full mb-2 flex-wrap">
              <div className="flex flex-wrap">
                <h3 className="font-bold text-xl text-blue-200 mr-2">
                  {item.company}
                </h3>
                <span className="text-xl italic text-blue-200 mr-2">
                  {item.title}
                </span>
              </div>
              <p className="font-bold text-xl text-blue-200">{item.dates}</p>
            </div>
            <div className="flex flex-wrap">
              <ul key={index} className="flex-wrap list-disc mx-4">
                {item.bullets.map((bullet, index) => (
                  <li key={index} className="flex-wrap text-m text-blue-100">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
