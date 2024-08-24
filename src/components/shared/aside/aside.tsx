import { docsmenu } from "@/data";
import clsx from "clsx";
import Link from "next/link";
import { FC } from "react";
import styles from "./aside.module.scss";

export const Aside: FC<{ className: string }> = ({ className }) => {
  return (
    <>
      <aside className={clsx(styles.aside, className)}>
        <nav>
          {docsmenu.map((item) => {
            return (
              <ul key={item.id} className={styles.linksgroup}>
                <h5 className={styles.linkslabel}>{item.label}</h5>
                <ul className={styles.links}>
                  {item.links.map((item) => {
                    return (
                      <li className={styles.link} key={item.id}>
                        <Link href={item.href}>{item.label}</Link>
                      </li>
                    );
                  })}
                </ul>
              </ul>
            );
          })}
        </nav>
      </aside>
    </>
  );
};
