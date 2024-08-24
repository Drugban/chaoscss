import { Aside } from "@/components/shared";
import { Tocbar } from "@/components/shared/tocbar/tocbar";
import styles from "@/scss/docs.module.scss";
import { ReactNode } from "react";

export default function DocsLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <div className={styles.wrap}>
        <Aside className={styles.aside} />
        <div className={styles.docs}>
          <div className={styles.content}>{children}</div>
          <Tocbar className={styles.tocbar} />
        </div>
      </div>
    </>
  );
}
