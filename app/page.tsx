import { Link } from "@/components/ui/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <Link href="#">This is an internal link</Link>
      <Link href="#" externalLink>
        This is an external link
      </Link>
    </div>
  );
}
