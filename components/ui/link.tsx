import React from "react";
import NextLink from "next/link";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  externalLink?: boolean;
  children: React.ReactNode;
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ externalLink = false, href, children, ...props }, ref) => {
    if (externalLink) {
      return (
        <a
          ref={ref}
          href={href}
          rel="noopener noreferrer"
          className="underline-offset-4 hover:underline"
          {...props}
        >
          {children}
        </a>
      );
    }

    return (
      <NextLink
        href={href}
        {...props}
        ref={ref}
        className="underline-offset-4 hover:underline"
      >
        {children}
      </NextLink>
    );
  },
);

export { Link };
