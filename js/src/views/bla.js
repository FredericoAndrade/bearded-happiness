App.GridGenView = Ember.View.extend({
    didInsertElement: function() {
      $(".demo-form .fields input").on("focus", function() {
        $(this).value('')
      })
  }
})