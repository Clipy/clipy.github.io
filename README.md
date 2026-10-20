# Clipy website

The website at [clipy-app.com](https://clipy-app.com) is built with Eleventy,
Nunjucks, and JSON. One HTML template generates every language. The published
site contains static HTML, CSS, JavaScript, and images.

## Local development

Use Node.js 24 (see `.nvmrc`), then run:

```sh
npm ci
npm run dev
```

Open the local URL printed by Eleventy. To build and check the site:

```sh
npm run build
```

The generated site is in `_site/`. Do not commit that directory.

## Translations

To update an existing translation, edit its JSON file in `src/_data/locales/`.
To add a language:

1. Copy `src/_data/locales/en.json` to a new file named with the language tag, such as
   `src/_data/locales/fr.json`.
2. Update `ogLocale` (for example, `fr_FR`) and translate the text. Keep all keys and the
   same JSON structure as the English file. Text is escaped when rendered;
   write plain text rather than HTML.
3. Optionally add screenshots under `src/img/screenshots/<language>/` and update
   the public `/img/screenshots/<language>/...` paths in the JSON. Existing image
   paths can be kept until localized screenshots are ready.
4. Preview the page, run the build above, and open a pull request.

Keep placeholders such as `{minimumMacOS}`, `{issues}`, `{pullRequests}`, and
`{author}` intact. They insert shared values or links, and can be moved within
the translated sentence to match its grammar.

Eleventy's standard global data loading and pagination discover language JSON
automatically. Adding a language does not require editing the HTML template,
JavaScript, or route configuration. The bundled official `I18nPlugin` provides
page languages and alternate-language URLs for metadata and browser-language
detection. Nunjucks' built-in `replace` filter inserts placeholders; no separate
translation library is needed. Build errors catch missing rendered values and
missing images. `npm run i18n:check` uses `i18n-check` to compare translations
against English for missing keys, empty translated strings, and ICU placeholder
mismatches. `npm run build` runs this check before Eleventy, including in CI.

Text columns use flexible widths, and buttons size to their labels within shared
maximum widths. Long translations wrap naturally, and sections grow with their
content. Grid and Flexbox gaps keep image-to-text spacing independent of
translation length. Avoid manual line breaks or language-specific widths and
margins.

English is served at `/` and `/en/`, Japanese at `/ja/`, and additional languages
at their language-tag paths. Eleventy's standard Virtual Templates API generates
the explicit English URL from the same template, with `/` as its canonical URL.
The root page checks the browser's preferred languages and redirects to the first
supported language. Unsupported preferences fall back to English. With JavaScript
disabled, the root page displays English. Direct links to a language page keep
that language; there is no language switcher.

## Shared content and assets

- `src/index.njk`: shared page template.
- `src/_data/site.json`: shared site settings, including the public URL and
  Google Analytics ID.
- `src/_data/release.json`: website version, download URL, and minimum macOS
  version. Update this file once for all languages.
- The bundled official `HtmlBasePlugin` creates absolute metadata URLs with
  `htmlBaseUrl`; page assets stay on the current host for local and preview builds.
- `css/` and `js/`: shared styles and scripts. Eleventy's built-in `RenderPlugin`
  reads them without template processing. The Bundle feature combines the site
  files with Swiper's published browser JS and CSS from `node_modules`. Generated
  CSS and JavaScript use content-hashed filenames under `bundle/`. Swiper handles
  autoplay, arrow navigation, and thumbnail synchronization; no separate bundler
  or jQuery is needed.
- `src/img/`: shared images and language-specific screenshots. The official
  `@11ty/eleventy-img` HTML Transform processes local `<img>` elements automatically
  and generates content-hashed filenames under `img/`. Passthrough format preserves
  the original image bytes. Use public paths such as `/img/common/wordmark.png` in
  the template and translation JSON; the plugin resolves them from `src/`.
  The externally hosted GitHub ribbon opts out with `eleventy:ignore`.
- `src/img/common/app-icon.png` and `src/favicon*.png`: the OGP image and favicons
  are copied unchanged to stable public URLs. HTML Transform handles `<img>` and
  `<picture>`, while metadata uses these ordinary static files.
- Release-note CSS is copied unchanged. No additional bundler dependency is needed.
- `appcast.xml` and `releasenotes/`: app update feed and release notes. They are
  copied as static files; the website release settings are independent of the
  appcast.

## Dependency updates

Dependabot checks npm packages and GitHub Actions weekly, with a seven-day
cooldown matching the main Clipy repository. Version update pull requests start
after `.github/dependabot.yml` is merged into the default branch. Update the
Node.js version in `.nvmrc` manually.

Workflow actions are pinned to full commit SHAs with comments showing release
versions. Use `pinact run` to pin newly added action references.

## Workflow checks and security

Like the main Clipy repository, separate workflows run actionlint, zizmor, and
CodeQL. Actionlint checks workflow changes in pull requests and fails on errors.
Zizmor audits Actions on pull requests and pushes to `master`, and uploads findings
to GitHub code scanning. CodeQL analyzes Actions and JavaScript on those events,
weekly, and on manual runs. These checks do not require a site build.

Run `actionlint` and `zizmor --offline .github/workflows` locally to check workflow
changes. The offline audit skips checks that require GitHub API access. CodeQL and
zizmor findings are available in the repository's **Security → Code scanning** tab.

## Publishing

The GitHub Actions workflow builds and checks pull requests. Successful pushes
to `master` publish `_site/` to GitHub Pages. The workflow can also be run manually
from `master`; pull requests and other branches are never deployed.

For the initial migration, set **Settings → Pages → Build and deployment →
Source** to **GitHub Actions** in the repository. The custom domain remains
`clipy-app.com` through `CNAME`.
