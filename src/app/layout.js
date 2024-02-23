import styles from "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/images/favi32.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favi32.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favi16.png" />
      </head>
      <body className={styles.colorTheme}>{children}</body>
    </html>
  );
}
