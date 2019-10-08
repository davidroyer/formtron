/* eslint-disable no-undef */
const { createFormTemplate } = require("./file-generator.js");
console.log("TCL: createFormTemplate", createFormTemplate);
createFormTemplate({
  stepForm: true,
  optGroups: true
});
