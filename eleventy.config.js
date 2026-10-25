import { readFileSync } from 'node:fs';
import { HtmlBasePlugin, I18nPlugin, RenderPlugin } from '@11ty/eleventy';
import { eleventyImageTransformPlugin } from '@11ty/eleventy-img';

export default function (eleventyConfig) {
  const site = JSON.parse(readFileSync('src/_data/site.json', 'utf8'));
  eleventyConfig.setNunjucksEnvironmentOptions({ throwOnUndefined: true });
  eleventyConfig.addPlugin(I18nPlugin, { defaultLanguage: site.defaultLocale });
  eleventyConfig.addPlugin(HtmlBasePlugin, { extensions: false });
  eleventyConfig.addPlugin(RenderPlugin);
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    formats: ['passthrough'],
    // Re-read local images during watch builds, including same-size replacements.
    useCache: false
  });
  eleventyConfig.addBundle('css', { toFileDirectory: 'bundle' });
  eleventyConfig.addBundle('js', { toFileDirectory: 'bundle' });
  eleventyConfig.addTemplate('default-locale.njk', readFileSync('src/index.njk', 'utf8'), {
    pagination: { data: 'locales', size: 1, alias: 'localeCode', before: () => [site.defaultLocale] },
    permalink: `/${site.defaultLocale}/index.html`
  });
  for (const source of ['css/releasenotes.css', 'releasenotes', 'appcast.xml', 'CNAME', 'src/favicon*.png', 'src/img/common/app-icon.png']) {
    eleventyConfig.addPassthroughCopy(source);
  }
  eleventyConfig.addPassthroughCopy({
    'src/img/common/clipboard-history.png': 'img/screenshot1.png'
  });
  for (const source of ['css/', 'js/', 'src/img/']) {
    eleventyConfig.addWatchTarget(source);
  }
  eleventyConfig.addWatchTarget('src/_data/site.json', { resetConfig: true });
  eleventyConfig.addWatchTarget('src/index.njk', { resetConfig: true });

  return { dir: { input: 'src' } };
}
