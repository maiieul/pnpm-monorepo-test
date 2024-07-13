import { component$, useStyles$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import styles from "../../../fake-core/styles/style.css?raw";
export default component$(() => {
  useStyles$(styles);
  return (
    <>
      <h1>Hi 👋</h1>
      <div>
        The future Qwik docs could use this setup 👀
        <br />
        Happy hacking!
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
