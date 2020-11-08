import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex justify-center pt-8 pb-16">
      <p className="font-mono text-blue-100 text-xl">
        made with ❤️ by{" "}
        <Link href="https://asamshan.dev/">
          <a className="font-bold hover:underline">asam shan</a>
        </Link>
      </p>
    </div>
  );
}
