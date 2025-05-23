module.exports = {
  title: "my-report-template", // populated into `publication.json`, default to `title` of the first entry or `name` in `package.json`.
  author: "yas-ako <105139975+yas-ako@users.noreply.github.com>", // default to `author` in `package.json` or undefined.
  language: "ja", // default to undefined.
  size: "A4", // paper size.
  theme: [
    "@vivliostyle/theme-academic@^2.0.0",
    "theme/my-report-theme.css",
    "theme/my-prism-theme.css",
  ],
  entry: [
    "manuscript.md", // `title` is automatically guessed from the file (frontmatter > first heading).
    // {
    //     //   path: 'epigraph.md',
    //   title: 'Epigraph', // title can be overwritten (entry > file),
    //   theme: '@vivliostyle/theme-whatever', // theme can be set individually. default to the root `theme`.
    // },
    // 'glossary.html', // html can be passed.
  ], // `entry` can be `string` or `object` if there's only single markdown file.
  // entryContext: './manuscripts', // default to '.' (relative to `vivliostyle.config.js`).
  output: [
    // path to generate draft file(s). default to '{title}.pdf'
    "./output/output.pdf", // the output format will be inferred from the name.
    //   {
    //     path: './book',
    //     format: 'webpub',
    //   },
  ],
  workspaceDir: ".vivliostyle", // 一時ファイルの保存場所
  // toc: true, // whether generate and include ToC HTML or not, default to 'false'.
  // cover: './cover.png', // cover image. default to undefined.
  // vfm: { // options of VFM processor
  //   hardLineBreaks: true, // converts line breaks of VFM to <br> tags. default to 'false'.
  //   disableFormatHtml: true, // disables HTML formatting. default to 'false'.
  // },
};
