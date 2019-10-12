const listContent = require("list-github-dir-content");

const ghToken = "20dce6787e8a1fba8f075704c36fc7966c236c0d"; // https://github.com/settings/tokens

// They have the same output
const filesArray = async ghToken =>
  await listContent.viaTreesApi("Microsoft/vscode", "src/typings", ghToken);

// OR
// const filesArray = async (ghToken) => await listContent.viaContentsApi('Microsoft/vscode', 'src', ghToken);
// // OR
// const filesArray = await listContent.viaContentsApi('Microsoft/vscode#master', 'src', ghToken);

// ['src/file.js', 'src/styles/main.css', ...]
filesArray(ghToken).then(response => console.log(response));
// listContent.viaTreesApi also adds a `truncated` property
if (filesArray.truncated) {
  // Perhaps try with viaContentsApi?
}
