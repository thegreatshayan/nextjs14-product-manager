import Link from "next/link";

function Home() {
  return (
    <Link href="/about" className="text-lg">
      برای مشاهده صفحه درباره ما کلیک کنید
    </Link>
  );
}

export default Home;
