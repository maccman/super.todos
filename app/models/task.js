
// Create the Task model.
var Task = SuperModel.setup("Task");

// Setup the two attributes we need, name and done.
Task.attributes = ["name", "done"];

// Persist model between page reloads.
Task.extend(SuperModel.Marshal);

Task.extend({
  // Return all active tasks.
  active: function(){
    return(this.select(function(item){ return !item.done; }));
  },
  
  // Return all done tasks.
  done: function(){
    return(this.select(function(item){ return !!item.done; }));    
  },
  
  // Clear all done tasks.
  destroyDone: function(){
    jQuery.each(this.done(), function(){ this.destroy() });
  }
});