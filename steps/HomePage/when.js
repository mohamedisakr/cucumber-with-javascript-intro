import { When } from "cucumber";

When(/^the user enter "(.*)" into the search bar$/, (keyword) => {
  $(".gLFyf .gsfi").waitForDisplay(4000);
  $(".gLFyf .gsfi").click();
  $(".gLFyf .gsfi").setValue(keyword);

  $("gNO89b").waitForDisplay(4000);
  $("gNO89b").click();
});
