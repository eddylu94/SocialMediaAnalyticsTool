angular.module('socialMediaAnalyticsTool', [])
.component('menulist', {
  transclude: true,
  controller: function MyTabsController() {
    var panes = this.panes = [];
    this.select = function(pane) {
      angular.forEach(panes, function(pane) {
        pane.selected = false;
      });
      pane.selected = true;
    };
    this.addPane = function(pane) {
      if (panes.length === 0) {
        this.select(pane);
      }
      panes.push(pane);
    };
  },
  templateUrl: 'menulist.component.html'
})
.component('tabpanes', {
  transclude: true,
  require: {
    tabsCtrl: '^tabs'
  },
  bindings: {
    title: '@'
  },
  controller: function() {
    this.$onInit = function() {
      console.log("aaaaaaaaaaaaaaaaaaa");
      this.tabsCtrl.addPane(this);
      console.log(this);
    };
  },
  templateUrl: 'tabpane.component.html'
});
