angular.module("newsSummaryApp")
  .controller("NewsSummaryController", ['NewsSummaryFactory', function(NewsSummaryFactory) {
    var self = this;

    self.pageHeading = "Headlines for Head Honchos";

    self.news = [new NewsSummaryFactory("Headline 1"), new NewsSummaryFactory("Headline 2")];

  }]);


