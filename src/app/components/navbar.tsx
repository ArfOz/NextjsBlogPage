import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xlz-10">
      <div className="prose prose-xl mx-auto flex justify-between">
        <Link href="/">
            Arif Özkan
        </Link>
      </div>
      <div className="prose prose-xl mx-auto flex justify-between">
        <Link href="/">
            Article
        </Link>
      </div>
    </nav>
  );
}
