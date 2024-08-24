import { FC } from "react";
import styles from "./header.module.scss";
import Image from "next/image";
import { Github, Logo } from "@/assets";
import Link from "next/link";

import { Button } from "@/components/ui";
import { Search } from "./search";

export const Header: FC = () => {
  return (
    <>
      <header className={styles.header}>
        <Link className={styles.logo} href={"/"}>
          <Image src={Logo} alt="Logo" width={160} />
        </Link>
        <div className={styles.bar}>
          <Search />
          <Button
            color="muted"
            target="_blank"
            variant="outline"
            size="icon"
            href={"https://github.com/Drugban/chaoscss"}
          >
            <Image src={Github} alt="github" width={24} />
          </Button>
        </div>
      </header>
    </>
  );
};
