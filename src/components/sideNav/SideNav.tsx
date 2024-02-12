"use client"
import Link from "next/link";
import styles from "./component.module.css";
import { clsx } from "clsx"
import { usePathname } from "next/navigation"
import {
  HomeIcon,
  UserGroupIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";

const navLinks = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: HomeIcon,
  },
  {
    href: "/dashboard/invoices",
    label: "Invoices",
    icon: DocumentDuplicateIcon,
  },
  {
    href: "/dashboard/customers",
    label: "Customers",
    icon: UserGroupIcon,
  },
];
export default function SideNav() {
  const pathname = usePathname()
  return (
    <div className={styles.SideNav}>
      <nav>
        <ul>
          {navLinks.map((link) => {
            const LinkIcon = link.icon;
            return <li key={link.href} >
              <Link href={link.href} className={clsx(styles.navLink, { [styles.active]: pathname === link.href })}>
                <LinkIcon width={30} />
                <p>{link.label}</p>
              </Link>
            </li>
          })}
        </ul>
      </nav>
    </div >
  );
}
