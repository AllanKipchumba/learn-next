import React from "react";
import styles from "./styles.module.scss";

export const metadata = {
  title: "About page",
  description: "About the company",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>About navbar</nav>
      <main className={styles.main}>{children}</main>
    </>
  );
}
