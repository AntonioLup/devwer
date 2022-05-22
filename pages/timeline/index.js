import Link from "next/link";
import AppLayout from "../../ui";

export default function Timeline() {
  return (
    <AppLayout>
      <Link href="/">
        <a>Home</a>
      </Link>
    </AppLayout>
  );
}
