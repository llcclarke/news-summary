describe("app", function() {
  it("should get home page title", function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual("News Summary");
  });

  // it("should have a heading", function(){
  //   browser.get('/');
  //   expect(browser.getText()).toEqual("Headlines for Head Honchos")
  // });
});
