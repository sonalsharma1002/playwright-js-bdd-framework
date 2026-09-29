module.exports = {
  default: {
    require: [
      "step-definitions/**/*.js",
      "hooks/**/*.js"
    ],
    format: [
      "progress",
      "html:reports/cucumber-report.html"
    ],
    publishQuiet: true
  }
};