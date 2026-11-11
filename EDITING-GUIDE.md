# Editing the SI website

The deployable website is in dist/. Upload only its contents to the public web root.

HTML, CSS and JavaScript are now indented and wrapped for editing. The formatting preserves inline whitespace deliberately; occasional > symbols at the start of a line avoid introducing visible spaces between inline elements. This is valid HTML, not an error.

Each page is its own HTML document. Edit text in the relevant dist/*.html file. Shared styling is in dist/style.css; enquiry styling and behaviour are in enquiries.css and enquiries.js. site.js controls the menu and media archive. Images/logos remain in assets/ and PDFs in documents/. Preserve all IDs, classes, data attributes, links, form names and filenames unless deliberately changing their behaviour.

The 56 HTML files include career detail chapters; all are included. Historical Python scripts in the original project are not required to host or edit these pages and may regenerate old content if run.

Optional formatter: Prettier 3.9.10. The included .prettierrc.json preserves the chosen settings. Example: npx prettier@3.9.10 --write "*.html" "*.css" "*.js"

Preview from this folder: python -m http.server 8000. Open http://localhost:8000/. Test mobile menu, career expand/collapse, media filters/search and email composition after edits. The enquiry page composes a message to info@stahlschmidt-inc.com; visitors must send it in their email app.

10 November 2026: removed the home-page OH family-office paragraph; added “American by choice.” to the home-page and footer heritage lines. Includes the corrected transparent 10/4 logo. Use this package instead of earlier launch files. Future edits here or on Sites do not automatically synchronize with the external GitHub copy.

## Link repair update

Use this entire updated package in place of older launch files. All href destinations are embedded in the HTML; no manual link entry is required. Upload HTML, CSS, JavaScript, assets and documents together. External links now navigate in the current tab; visitors can use Back to return. Outdated section fragments were replaced with existing page/section destinations. The original public video URLs remain unchanged. All 1,191 HTML anchors were audited for local page existence. Both featured YouTube links were clicked successfully in a desktop browser; this is not a test on a physical iPhone/iPad and does not guarantee availability of every external publisher.
