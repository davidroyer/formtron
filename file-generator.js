var ejs = require("ejs");

// the renderFile method in action
ejs.renderFile(
  // first I give it a path to an *.ejs file
  "ejs-form-templates/t1.ejs",

  // Some data to use when rendering
  {
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
  }
);
fs.outputFile(file, "hello!")
  .then(() => fs.readFile(file, "utf8"))
  .then(data => {
    console.log(data); // => hello!
  })
  .catch(err => {
    console.error(err);
  });
