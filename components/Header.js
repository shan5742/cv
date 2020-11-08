import Me from "../images/headshot.jpg";

export default function Header() {
  return (
    <div className="flex items-center">
      <img
        className="h-12 md:h-24 lg:h-24 xl:h24 rounded-full mr-4"
        src={Me}
        alt="headshot"
      />
      <h1 className="font-bold text-3xl md:text-5xl lg:text-5xl xl:text-5xl text-blue-200">
        Asam Shan
      </h1>
    </div>
  );
}
