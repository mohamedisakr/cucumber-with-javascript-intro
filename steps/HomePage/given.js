import { Given } from "cucumber";

Given("a web browser is at google home page", () => {
  browser.url("/"); // http://google.com
});
