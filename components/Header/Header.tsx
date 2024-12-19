import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-around p-4 text-white">
      <div>Logo</div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
