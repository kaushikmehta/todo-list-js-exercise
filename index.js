function newTask(title, descrption) {
  const task = {
    title: title,
    descrption: descrption,
    complete: false,
    logTaskState: function() {
      console.log(`${this.title} has ${this.complete ? "" : "not"} been completed`);
    },
    completeTask: function() {
      this.complete = true

    }
  }
  return task;
}

// DRIVER CODE

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logTaskState();
task1.completeTask();
task1.logTaskState();
// for now, let's just make sure we see our tasks
console.log(tasks);
