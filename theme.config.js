const theme = {
  titleSuffix: " | Knowlwdge Share",
  search: true,
  unstable_flexsearch: true,
  unstable_staticImage: true,
  floatTOC: true,
  font: false,
  github: "",
  projectLink: "",
  logo: () => (
    <>
      <img
        src="/logo.svg"
        height="25"
        width="25"
        style={{ marginRight: "1em" }}
      />
      <h1>
        Knowlwdge Share <span style={{ opacity: 0.2 }}></span>
      </h1>
    </>
  ),
  head: function Head(props) {
    return (
      <>
        <meta charset="utf-8" />
        <meta name="theme-color" content="#000" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="apple-touch-icon" sizes="180x180" href="/javascript.svg" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/javascript.svg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/javascript.svg"
        />
        <link rel="mask-icon" href="/javascript.svg" color="#000000" />
        <link rel="shortcut icon" href="/javascript.svg" />
        <meta name="msapplication-TileColor" content="#000000" />
      </>
    );
  },
  darkMode: true,
  footerText: `${new Date().getFullYear()} © sggv950`,
  nextThemes: {
    defaultTheme: "dark",
  },
};
export default theme;
