/** @type {import('tailwindcss').Config} */
const themeDir = __dirname + "/../../";
module.exports = {
  content: [
    themeDir + "layouts/**/*.html",
    themeDir + "content/**/*.html",
    "layouts/**/*.html",
    "content/**/*.html",
    "exampleSite/layouts/**/*.html",
    "exampleSite/content/**/*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"M Plus Code"'],
        mono: ['"M Plus Code"'],
      },
      spacing: {
        "page-top": "var(--page-top)",
        "page-gutter": "var(--page-gutter)",
        "header-height": "var(--header-height)",
        "footer-height": "var(--footer-height)",
      },
      maxWidth: {
        content: "var(--content-width)",
      },
      minHeight: {
        content: "var(--content-height)",
      },
      fontSize: {
        md: "15px",
      },
      colors: {
        base: "var(--base)",
        surface: "var(--surface)",
        overlay: "var(--overlay)",
        muted: "var(--muted)",
        subtle: "var(--subtle)",
        text: "var(--text)",
        "highlight-low": "var(--hightlight-low)",
        "highlight-med": "var(--hightlight-med)",
        "highlight-high": "var(--hightlight-high)",
      },
      borderColor: (theme) => ({
        DEFAULT: theme("colors.overlay", "currentColor"),
      }),
    },
  },
  plugins: [],
};
