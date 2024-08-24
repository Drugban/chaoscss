"use client";
import { FC } from "react";
import { usePathname } from "next/navigation";
import styles from "./tocbar.module.scss";
import clsx from "clsx";
import { docsmenu, tocmenu } from "@/data";
import Link from "next/link";

type Props = {
  className?: string;
};

export const Tocbar: FC<Props> = ({ className }) => {
  const pathName = usePathname();
  return (
    <>
      <div className={clsx(styles.tocbar, className)}>
        <h5 className={styles.title}>On this page</h5>
        <hr className={styles.hr} />
        <nav>
          {docsmenu.map((item) => {
            return (
              <ul key={item.id} className={styles.menu}>
                {item.links.map((item) => {
                  if (pathName.match(item.label)?.[0] == item.label) {
                    return tocmenu.map((item) => {
                      if (pathName.match(item.label)?.[0] == item.label) {
                        return item.toc.map((item, idx) => (
                          <li key={idx} className={styles.list}>
                            <Link
                              className={styles.link}
                              href={"#" + item.href}
                            >
                              {item.label}
                            </Link>
                            {item.children && (
                              <ul className={styles.menu}>
                                {item.children.map((item, idx) => (
                                  <li key={idx} className={styles.list}>
                                    <Link
                                      className={styles.link}
                                      href={"#" + item.href}
                                    >
                                      {item.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ));
                      }
                    });
                  }
                })}
              </ul>
            );
          })}
        </nav>
      </div>
    </>
  );
};
