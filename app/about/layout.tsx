import Link from "next/link";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>About Layout</h1>
      <ul>
        <li>
          <Link href="/about/team">Team</Link>
        </li>
        <li>
          <Link href="/about/contacts">Contacts</Link>
        </li>
      </ul>
      {children}
    </>
  );
}
