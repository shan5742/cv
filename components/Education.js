import items from "../data/Education";

export default function Education() {
  return (
    <div className="flex flex-col mt-8">
      <h1 className="font-bold text-3xl text-blue-300 mb-2">Education</h1>
      <div className="flex flex-col">
        {items.map((item, index) => (
          <div className="mb-4" key={index}>
            <div className="flex justify-between w-full mb-2 flex-wrap">
              <h3 className="font-bold text-xl text-blue-200">{item.school}</h3>
              <p className="font-bold text-xl text-blue-200">{item.date}</p>
            </div>
            <div className="flex flex-wrap">
              {item.subjects.map((subject, index) => (
                <p key={index} className="italic text-m text-blue-100">
                  {subject}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
