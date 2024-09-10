import Link from "next/link";

const TheHeader = () => {
  return (
    <header className="header ">
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/about">About</Link>
    </header>
  );
};
export default TheHeader;
