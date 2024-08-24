"use client"

import clsx from "clsx"
import hljs from "highlight.js/lib/core"
import bash from "highlight.js/lib/languages/bash"
import js from "highlight.js/lib/languages/javascript"
import xml from "highlight.js/lib/languages/xml"
import css from "highlight.js/lib/languages/css"
import scss from "highlight.js/lib/languages/scss"
import "highlight.js/styles/github-dark.css"
import { FC } from "react"
import styles from "./codesnippet.module.scss"
hljs.registerLanguage("bash", bash)
hljs.registerLanguage("javascript", js)
hljs.registerLanguage("xml", xml)
hljs.registerLanguage("css", css)
hljs.registerLanguage("scss", scss)

export type CodesnippetProps = {
  text: string
  lang: string
  className?: string
}

export const Codesnippet: FC<CodesnippetProps> = ({
  text,
  lang,
  className,
}) => {
  return (
    <div className={clsx(styles.codesnippet, className)}>
      <div className={styles.highlight}>
        <pre>
          <code
            dangerouslySetInnerHTML={{
              __html: hljs.highlight(text, {
                language: lang,
              }).value,
            }}
            className={clsx(lang == "bash" && styles.bash)}
          />
        </pre>
      </div>
    </div>
  )
}
