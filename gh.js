/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
require("dotenv").config();
const github = require("octonode");
const fs = require("fs");

const client = github.client(process.env.GITHUB_API_KEY);
const ghrepo = client.repo("davidroyer/formtron");
ghme = client.me();

async function getFile() {
  const result = await ghrepo.contentsAsync("File1C.md");
  return result[0];
}

async function getMyInfo() {
  const result = await ghme.infoAsync();
  return result[0];
}

async function updateFile(file) {
  const { sha } = await getFile(file);
  const newFileData = fs.readFileSync("./gh-testdir/File1.md");

  await ghrepo.updateContentsAsync(
    "File1C.md",
    "Adding New Component File",
    newFileData,
    sha
  );
}

updateFile("File1.md");

// fs.readFile("./gh-testdir/File1.md", (err, data) => {
//   if (err) throw err;

//   ghrepo.createContents(
//     "Comp1.vue",
//     "Adding New Component File",
//     data,
//     function() {
//       console.log("Done! Callback response");
//     }
//   );
// });

//
//
//

// async function createFile() {
//   const client = github.client(process.env.GITHUB_API_KEY);
//   const ghrepo = client.repo("davidroyer/formtron");
//   return await ghrepo.createContentsAsync(
//     "Notes.md",
//     "My Commit message",
//     "# Notes Markdown File"
//   );

//   //   return result;
// }
// createFile();
