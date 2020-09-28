class Home {
  //
  get url() {
    return "/";
  }

  //
  get searchField() {
    return $(".gLFyf.gsfi");
  }

  //
  get searchButton() {
    return $("gNO89b");
  }

  //
  search(keyword) {
    this.searchField.waitForDisplay(4000);
    this.searchField.click();
    this.searchField.setValue(keyword);

    this.searchButton.waitForDisplay(4000);
    this.searchButton.click();
  }
}

module.exports = new Home();
