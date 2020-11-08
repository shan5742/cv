import Me from "../images/headshot.jpg";

export default function Header() {
  return (
    <div className="flex items-center">
      <img className="h-24 rounded-full mr-4" src={Me} alt="headshot" />
      <h1 className="font-bold text-5xl text-blue-200">Asam Shan</h1>
    </div>
  );
}
