describe("NewsSummaryController", function() {
  var controller;

  beforeEach(module("newsSummaryApp"));

  beforeEach(inject(function($controller) {
    controller = $controller("NewsSummaryController");
  }));

  it("has a heading", function() {
    expect(controller.pageHeading).toEqual("Headlines for Head Honchos");
  });

  it("has a news headline", function(){
    expect(controller.headline).toEqual("More bad news is bad news");
  })
});
