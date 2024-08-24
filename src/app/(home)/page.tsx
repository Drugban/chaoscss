import { Codesnippet } from "@/components/shared";
import { Button } from "@/components/ui";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <div className={styles.masthead}>
        <blockquote className={styles.badge}>
          &#10004; Does not require excessive labor
        </blockquote>
        <h1>
          Easily create beautiful, <strong>modern websites</strong> using only{" "}
          <strong>HTML classes.</strong>
        </h1>
        <p>
          Chaoscss is a free and open source library that allows you to create
          your own design using only HTML classes.
        </p>
        <div className={styles.buttongroup}>
          <Codesnippet text="npm i chaoscss" lang="bash" />
          <Button href={"/docs"} variant="outline">
            Get started
          </Button>
        </div>
      </div>
    </>
  );
}
