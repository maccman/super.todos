// 

(function($){
  
  // Create the 'tasks' state
  var state = App.add("tasks");
  state.hasView = true;
  
  // The __setup__ event is executed when the state is first entered.
  state.setup(function(){
    
    this.loadView();
    
    // Disable the forms default behaviour on submit.
    this.form.submit(this.proxy(function(){
      
      // Create a new task with the name from the __input__'s value.
      var task = new Task;
      task.name = this.input.val();
      task.save();
      
      this.input.val("");
      return false;
    }));
    
    // Listen to click events on the *clear all done* link.
    this.butClear.click(function(){
      Task.destroyDone();
    });

    // Callback executed for every item rendered.
    this.tasks.renderItem(function(e, item){
      // Toggle the 'done' class depending on the task's state.
      $(this).toggleClass("done", !!item.done);
      
      // Toggle the checkbox depending on the task's state.
      $(this).find("input").attr("checked", !!item.done);
    });
    
    // Update the active tasks count when the list is rendered.
    this.tasks.render(this.proxy(function(){
      this.count.text(Task.active().length);
      this.butClear.toggleDisplay(Task.done().length > 0);
    }));
    
    // Toggle the task's done status when the checkbox is changed.
    this.tasks.delegate("input", "change", function(){
      var task = $(this).item();
      task.done = !task.done;
      task.save();
    });
    
    // Bind the list to the Task model changes.
    this.tasks.connect(Task).render();
  });
})(jQuery);