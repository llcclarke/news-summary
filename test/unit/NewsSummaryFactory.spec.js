

describe('NewsSummaryFactory', function() {
  beforeEach(module('newsSummaryApp'));

  var newsSummary;

  beforeEach(inject(function(NewsSummaryFactory) {
    newsSummary = new NewsSummaryFactory('New NewsSummary');
  }));

  it('has a headline', function(){
    expect(newsSummary.headline).toMatch("New NewsSummary");
  });

});