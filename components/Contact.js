import Link from "next/link";

export default function Contact() {
  return (
    <div className="flex justify-between w-full mt-8 flex-wrap">
      <Link href="mailto:asamshan456@gmail.com">
        <a className="font-bold text-blue-100 text-s hover:underline mx-2">
          asamshan456@gmail.com
        </a>
      </Link>
      <Link href="tel:07784158641">
        <a className="font-bold text-blue-100 text-s hover:underline mx-2">
          07784158641
        </a>
      </Link>
      <p className="font-bold text-blue-100 text-s mx-2">Middlesbrough, UK</p>
      <Link href="https://github.com/shan5742">
        <a className="font-bold text-blue-100 text-s hover:underline mx-2">
          https://github.com/shan5742
        </a>
      </Link>
      <Link href="https://asamshan.dev">
        <a className="font-bold text-blue-100 text-s hover:underline mx-2">
          https://asamshan.dev
        </a>
      </Link>
    </div>
  );
}
