define([], function() {

  // return the manager so views can use it
  return {

    currentView : null,

    showView : function(view) {

      if (this.currentView !== null && this.currentView.cid != view.cid) {
        this.currentView.remove();
        console.log('_manager.js just removed: ');
        console.log(this.currentView);
      }

      this.currentView = view;
      console.log('_manager.js: this.currentView is now ');
      console.log(this.currentView);

      this.baseView.$el.prepend(this.currentView.render().el);

    }
  }

});