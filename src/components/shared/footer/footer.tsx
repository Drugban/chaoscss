import { FC } from "react";
import styles from "./footer.module.scss";
import { Button } from "@/components/ui";
import { Github } from "@/assets";
import Image from "next/image";

export const Footer: FC = () => {
  return (
    <>
      <footer className={styles.footer}>
        <span>Contribute on GitHub</span>
        <div className={styles.linksgroup}>
          <Button
            href={"https://github.com/Drugban/chaoscss"}
            color="muted"
            size="sm"
            type="withicon"
            variant="outline"
          >
            <Image src={Github} alt="github" width={18} />
            Github
          </Button>
          <Button
            href={"https://github.com/Drugban"}
            color="muted"
            size="sm"
            type="withicon"
            variant="outline"
          >
            <Image src={Github} alt="github" width={18} />
            Follow @Drugban
          </Button>
        </div>
        <span>Code licensed MIT</span>
      </footer>
    </>
  );
};
