<div align="center">
 <img src="./static/favicon_io/android-chrome-192x192.png">
 <h1>Hugo Toigian</h1>
 <blockquote align="center">A minimal Hugo theme with Tailwind CSS</blockquote>
 <p>
  <a href="https://github.com/ntk148v/hugo-toigian/blob/master/LICENSE">
   <img alt="GitHub license" src="https://img.shields.io/github/license/ntk148v/hugo-toigian?style=for-the-badge">
  </a>
  <a href="https://github.com/ntk148v/hugo-toigian/stargazers">
            <img alt="GitHub stars" src="https://img.shields.io/github/stars/ntk148v/hugo-toigian?style=for-the-badge">
        </a>
        <a href="https://gohugo.io">
            <img alt="Hugo" src="https://img.shields.io/badge/hugo-0.93.0-blue.svg?style=for-the-badge">
        </a>
 </p><br>
</div>

> `Toigian` - `Tối giản` (vietnamese): Minimalist (english)
>
> **Disclaimer**: I'm not a front-end developer, just a guy who like tweaking stuff, so my code may not be pretty/clean. I attempt to learn [Tailwind CSS](https://tailwindcss.com/), and hugo-toigian is the result.

- [0. Showcase](#0-showcase)
- [1. Features](#1-features)
- [2. Prerequisites](#2-prerequisites)
- [3. Installation](#3-installation)
- [3. Configuration](#3-configuration)
  - [3.1. Site configuration](#31-site-configuration)
  - [3.2. Page configuration](#32-page-configuration)
- [4. Shortcodes](#4-shortcodes)
- [5. Customization](#5-customization)
- [6. Contributing](#6-contributing)
- [7. Credits](#7-credits)

## 0. Showcase

These screenshots may be outdated. Take a look at [demo site](https://ntk148v.github.io/hugo-toigian) for newest.

| Dark                                                                                                                                | Light                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://raw.githubusercontent.com/ntk148v/hugo-toigian/master/images/dark-post.png" alt="dark" style="border-radius:1%"/> | <img src="https://raw.githubusercontent.com/ntk148v/hugo-toigian/master/images/light-post.png" alt="dark" style="border-radius:1%" /> |
| <img src="https://raw.githubusercontent.com/ntk148v/hugo-toigian/master/images/dark-home.png" alt="dark" style="border-radius:1%"/> | <img src="https://raw.githubusercontent.com/ntk148v/hugo-toigian/master/images/light-home.png" alt="dark" style="border-radius:1%"/>  |
| <img src="https://raw.githubusercontent.com/ntk148v/hugo-toigian/master/images/dark-list.png" alt="dark" style="border-radius:1%"/> | <img src="https://raw.githubusercontent.com/ntk148v/hugo-toigian/master/images/light-list.png" alt="dark" style="border-radius:1%"/>  |

## 1. Features

- Minimalist (`tối giản`) design. Highly inspired by [mellow.dev](https://mellow.dev/).
- Use the classy minimalist [Rosé Pine](https://github.com/rose-pine/palette) color palette.
- Customizable.
- Support light/dark mode.
- Useful shortcodes.
- Comments support.
- Syntax highlighting: use server-side solution (Chroma, hugo built-in), I've added [Rosé Pine styles to Chroma](https://github.com/alecthomas/chroma/pull/689), so everything is the same vibe.

## 2. Prerequisites

- `git`, `npm` installed.
- A minimum Hugo "extended" version of v0.93.0 and above.

```shell
snap install hugo --channel=extended
```

- Hugo Pipe’s PostCSS requires the `postcss-cli` JavaScript package to be installed in the environment (`npm install -g postcss postcss-cli`) along with any PostCSS plugin(s) used (e.g., `npm install -g autoprefixer`). If you are using the Hugo Snap package, PostCSS and plugin(s) need to be installed locally within your Hugo site directory, e.g., `npm install postcss-cli` without the -g flag.

## 3. Installation

- Go to root directory of your Hugo website, or create a new site with:

```shell
hugo new site hugo-example-site
cd hugo-example-site
git init
```

- Add the theme.

```shell
git submodule add https://github.com/ntk148v/hugo-toigian.git themes/hugo-toigian
```

- Install Nodejs modules.

```shell
cd themes/hugo-toigian
npm install
```

- Finally, update theme in your configuration `config.toml` file in the root directory of your Hugo website.

```toml
theme = "hugo-toigian"
```

- Run server to see a live preview of it.

```shell
hugo server -DF --disableFastRender
```

- Build static pages

```shell
hugo --environment production --minify
```

## 3. Configuration

### 3.1. Site configuration

There are a few configuration options that you can add to [config.toml](./exampleSite/config.toml) file.

```toml
baseURL = 'http://example.org/'
languageCode = 'en-us'
title = 'Toigian'
theme = "hugo-toigian"
themesDir = "../.."
# (Optional) If you provide a Disqus shortname, comments will be enabled on
# all pages.
# disqusShortname = "my-site"

[params]
# (Optional, default true): Controls table of contents visibility on right side of pages.
# Start and end levels can be controlled with markup.tableOfContents setting.
toc = true
# (Optional, default true) Enables comments template on pages
# By default partials/docs/comments.html includes Disqus template
# See https://gohugo.io/content-management/comments/#configure-disqus
# Can be overwritten by same param in page frontmatter
comments = true

[params.author]
name = "Kien Nguyen-Tuan"
email = "kiennt2609@gmail.com"

[markup]
  defaultMarkdownHandler = "goldmark"
  # By default, Goldmark trims unsafe outputs which might prevent some shortcodes from rendering.
  # It is recommended to set markup.goldmark.renderer.unsafe=true if you encounter problems.
  [markup.goldmark]
    [markup.goldmark.renderer]
      unsafe = true  # Enable user to embed HTML snippets in Markdown content.
  [markup.highlight]
    codeFences = true
    guessSyntax = true
    lineNos = false
    noClasses = false
    tabWidth = 4
  [markup.tableOfContents]
    startLevel = 2
    endLevel = 4
    ordered = true

# The left side navbar at the top
[menu]
  [[menu.nav]]
  name = "About"
  url = "/about"
  weight = 2

  [[menu.nav]]
  name = "Posts"
  url = "/posts"
  weight = 3
```

### 3.2. Page configuration

You can specify additional params in the front matter of individual pages.

```md
# Your posts tags

tags = []

# If you have enabled comments for the site, you can disable it for specific pages

comment = true
```

## 4. Shortcodes

Check out [shortcodes](https://ntk148v.github.io/hugo-toigian/posts/shortcodes).

## 5. Customization

- Partials: There are layout partials available for you to easily override components of the theme in `layouts/partials/`.

| Empty partial                                 | Placement                   | Usage               |
| --------------------------------------------- | --------------------------- | ------------------- |
| `layouts/partials/custom/head.html`           | Before closing `<head>` tag | Add custom css/js   |
| `layouts/partials/custom/content-before.html` | Before page content         |                     |
| `layouts/partials/custom/content-after.html`  | After page content          |                     |
| `layouts/partials/font.html`                  |                             | Import custom fonts |

- Extra customization:

| File                    | Description                      |
| ----------------------- | -------------------------------- |
| `assets/css/custom.css` | Customize or override css styles |

- For example, you don't like the chosen fonts (Roboto Mono and Barlow fonts), and you want to use your own choice, follow these steps:

  - Create `layouts/partials/font.html` to import your fonts:

  ```html
  <!-- load Inter and Overpass fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Overpass:wght@400;500&display=swap"
    rel="stylesheet"
  />
  ```

  - Create `assets/css/custom.css`:

  ```scss
  // change the default mono font to Overpass
  :root {
    --font-mono: "Overpass";
    --font-serif: "Inter";
  }
  ```

## 6. Contributing

As you already known, I'm not front-end developer. Therefore, if you find anything wrong or want to make improvement, don't hesitate to open an issue/pull request.

Primary goals are:

- Keep it simple.
- Avoid using JS if it can be solved by CSS>

Feel free to open issues if you find missing configuration or customization options.

## 7. Credits

- [hugo-book](https://github.com/alex-shpak/hugo-book)
- [dirkolbrich/hugo-tailwindcss-starter-theme](https://github.com/dirkolbrich/hugo-tailwindcss-starter-theme)
