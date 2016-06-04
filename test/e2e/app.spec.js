describe("app", function() {
  it("should get home page title", function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual("News Summary");
  });

  it("should have a heading", function(){
    browser.get('/');
    expect($$("h1").first().getText()).toEqual("Headlines for Head Honchos")
  });

  it('should have several headlines', function(){
    browser.get('/');
    var headlines = $$("#news");
    expect(headlines.first().getText()).toMatch("Headline 1");
    expect(headlines.last().getText()).toMatch("Headline 2");
  });
});



