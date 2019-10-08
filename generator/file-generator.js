/* eslint-disable no-undef */
var ejs = require("ejs");
const fs = require("fs-extra");
// the renderFile method in action

export const createFormTemplate = data => {
  console.log("TCL: data", data);
  ejs.renderFile(
    // first I give it a path to an *.ejs file
    "generator/ejs-form-templates/t1.ejs",

    // Some data to use when rendering
    {
      ...data,
      formSettings: data,
      title: "reading a file in ejs!",
      numbers: [7, 8, 9]
    },

    // callback with html, or an error
    function(err, html) {
      if (err) {
        // reject if an error happens
        console.log(err);
      }

      //resolve with the html
      console.log(html);

      const filePath = "generator/dist/file1.vue";

      fs.outputFile(filePath, html)
        .then(() => console.log("Done!"))
        .catch(err => {
          console.error(err);
        });
    }
  );
};

// module.exports = {
//   createFormTemplate
// };
