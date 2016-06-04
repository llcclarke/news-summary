describe("app", function() {
  it("should get home page title", function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual("News Summary");
  });

  it("should have a heading", function(){
    browser.get('/');
    expect($$("h1").first().getText()).toEqual("Headlines for Head Honchos")
  });

  it('should have a headline', function(){
    browser.get('/');
    var headline = $('#headline');
    expect(headline.getText()).toEqual("Headline 1");
  });
});



