describe("NewsSummaryController", function() {
  beforeEach(module("newsSummaryApp"));

    var controller, NewsSummaryFactory;

  beforeEach(inject(function($controller, _NewsSummaryFactory_) {
    controller = $controller("NewsSummaryController");
    NewsSummaryFactory = _NewsSummaryFactory_
  }));

  it("has a heading", function() {
    expect(controller.pageHeading).toEqual("Headlines for Head Honchos");
  });

  it("has several headlines", function(){
    var headline1 = new NewsSummaryFactory("Headline 1");
    var headline2 = new NewsSummaryFactory("Headline 2");
    expect(controller.news).toEqual([headline1, headline2]);
  });
});



