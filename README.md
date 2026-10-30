# Clipy website

Source for [clipy-app.com](https://clipy-app.com), built with Eleventy,
Nunjucks, and JSON. All languages share one page template.

## Local development

Use Node.js 24 (see [`.nvmrc`](.nvmrc)), then run:

```sh
npm ci
npm run dev
```

Open the local URL printed by Eleventy. Use `/en/` or `/ja/` to preview a
specific language. The root page `/` selects a supported language based on the
browser's preferences and displays English when JavaScript is disabled.

Before opening a pull request, run:

```sh
npm run build
```

This checks translations and builds the site into `_site/`. Generated files
should not be committed.

## Translations

To update a translation, edit its JSON file in
[`src/_data/locales/`](src/_data/locales/).

To add a language:

1. Copy `src/_data/locales/en.json` to a file named with the language tag,
   such as `src/_data/locales/fr.json`.
2. Translate the text, including image descriptions, and update `ogLocale`
   (for example, `fr_FR`). Set `direction` to `rtl` for right-to-left languages,
   or keep `ltr` otherwise. Keep the same keys and JSON structure as English.
   Write plain text rather than HTML.
3. Preview the new page at its language path, such as `/fr/`, and run
   `npm run build` before opening a pull request.

New languages are discovered automatically; no template or route changes are
needed. Screenshots use the shared English images unless a localized version
is provided, so screenshot contributions are optional.

Keep placeholders such as `{minimumMacOS}`, `{issues}`, `{pullRequests}`, and
`{author}` intact. They insert shared values or links and can be moved within
a sentence to match the language's grammar. Let text wrap naturally rather
than adding manual line breaks or language-specific widths and margins.

To check translations without building the site, run:

```sh
npm run i18n:check
```

## Optional localized screenshots

Add images under `src/img/screenshots/<language>/`, then add their public paths
to [`src/_data/screenshots.json`](src/_data/screenshots.json). For example, add
a `fr` entry to `clipboardHistory` while keeping the existing language entries:

```json
{
  "clipboardHistory": {
    "en": "/img/common/clipboard-history.png",
    "ja": "/img/screenshots/ja/clipboard-history.png",
    "fr": "/img/screenshots/fr/clipboard-history.png"
  }
}
```

Each image without an override uses its `en` path. Main slides and thumbnails
use the same image; no separate thumbnail files are needed.

## Where to make changes

| Path | Contents |
| --- | --- |
| [`src/index.njk`](src/index.njk) | Shared page template |
| [`src/_data/locales/`](src/_data/locales/) | Translated text |
| [`src/_data/site.json`](src/_data/site.json) | Shared site metadata and links |
| [`src/_data/release.json`](src/_data/release.json) | Download information and minimum macOS version |
| [`src/_data/screenshots.json`](src/_data/screenshots.json) | Screenshot paths and language overrides |
| [`src/img/common/`](src/img/common/) | Shared images and default English screenshots |
| [`src/img/screenshots/`](src/img/screenshots/) | Optional localized screenshots |
| [`css/`](css/) | Shared styles |
| [`js/slider.js`](js/slider.js) | Screenshot slider behavior |
