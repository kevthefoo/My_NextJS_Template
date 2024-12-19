import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-4 text-center">
      <p>
        © {new Date().getFullYear()}{" "}
        <Link href="https://google.com" target="_blank">
          Your Company Name.
        </Link>
        &nbsp;All rights reserved.
      </p>
    </footer>
  );
}
