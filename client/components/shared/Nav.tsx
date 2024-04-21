import React from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

interface Props {
  currentUser: string;
}

interface Navlinks {
  label: false | "";
  href: false | "";
}

const Nav = ({ currentUser }: Props) => {
  console.log(currentUser);

  return (
    <nav className="md:container py-4">
      <div className="flex justify-between">
        <Link className="flex" href="/">
          Client
        </Link>

        <span className="flex space-x-3">
          {currentUser ? (
            <Link className="flex" href="/auth/signout">
              Sign Out
            </Link>
          ) : (
            <>
              <Link className="flex" href="/auth/signup">
                Sign Up
              </Link>
              <Link className="flex" href="/auth/signin">
                Sign In
              </Link>
            </>
          )}
        </span>
      </div>

      <Separator />
    </nav>
  );
};

export default Nav;
