import { Button } from "@/components/ui/button";
import { headerSigninLinks } from "@/constants";
import Link from "next/link";
import SigninButton from "./auth/signin-button";
import UserAvatar from "./auth/user-avatar";

export default function Header() {
  return (
    <header className="border-b-2 px-8 py-4">
      <ul className="flex gap-8">
        {headerSigninLinks.map((link) => (
          <li key={link.key}>
            <Button variant={"link"}>
              <Link href={link.route}>{link.label}</Link>
            </Button>
          </li>
        ))}
        <li>
          <SigninButton>Sign in</SigninButton>
        </li>
        <li>
          <UserAvatar />
        </li>
      </ul>
    </header>
  );
}
