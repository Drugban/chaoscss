import type { MDXComponents } from "mdx/types";
import styles from "@/scss/docs.module.scss";
import { Button } from "./components/ui";
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    pre: ({ children }) => (
      <div className={styles.codesnippet}>
        <div className={styles.highlight}>
          <pre>
            <code>{children}</code>
          </pre>
        </div>
      </div>
    ),
    Button: ({ children, href }) => <Button href={href}>{children}</Button>,
    ...components,
  };
}
