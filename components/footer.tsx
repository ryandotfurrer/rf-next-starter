import { Button } from "./ui/button";
import { Link } from "./ui/link";

const Footer = () => {
  return (
    <footer className="mt-12 flex items-center justify-between border-t">
      <div className="flex items-center justify-between pt-4 pb-8">
        <span>
          Made by{" "}
          <Link href="#" externalLink>
            Ryan Furrer
          </Link>{" "}
          &copy; {new Date().getFullYear()}
        </span>
      </div>
      <div className="flex items-center justify-center gap-4">
        <Link href="https://ryanfurrer.com" externalLink>
          GitHub
        </Link>
        <Link href="https://ryanfurrer.com" externalLink>
          Twitter (X)
        </Link>
        <Link href="https://ryanfurrer.com" externalLink>
          LinkedIn
        </Link>
      </div>
    </footer>
  );
};

export { Footer };
