const myTasks = [
  { description: "Do Exercise 1", "completion status": "completed" },
];
//Search for tasks: Find and display tasks that contain a certain keyword.
const SearchForTasks = (arrayOfTasks, task) => {
  return arrayOfTasks.filter(
    (element) => element.description === task.description
  );
};
//Add tasks: Insert a new task into your to-do list
//function have two parameters the array of tasks and  the task you want to add
const addTasks = (arrayOfTasks, task) => {
  const searchTask = SearchForTasks(arrayOfTasks, task);

  if (searchTask.length != 0) {
    console.log("The task already exists in the array.");
  } else {
    arrayOfTasks.push(task);
  }
};

//Display tasks: Show all tasks, with their status (completed or not).
const displaytasks = (arrayOfTasks) => {
  arrayOfTasks.forEach((task) => {
    console.log(task);
  });
};

//● Delete tasks: Remove a task from your to-do list.
const Deletetask = (arrayOfTasks, task) => {
  const indexOfelementToremove = arrayOfTasks.findIndex(
    (element) => element.description === task.description
  );
  if (indexOfelementToremove != -1) {
    arrayOfTasks.splice(indexOfelementToremove, 1);
  } else {
    console.log("the task you want to delete dosnt exist");
  }
};
//Complete tasks: Mark a task as completed.
const isCompleted = (arrayOfTasks, task) => {
  const indexOfelementToUpdatee = arrayOfTasks.findIndex(
    (element) => element.description === task.description
  );
  if (indexOfelementToUpdatee != -1) {
    arrayOfTasks[indexOfelementToUpdatee]["completion status"] = "completed";
  } else {
    console.log("the task you want to update dosnt exist");
  }
};
////////////////////////////test the programe
console.log("the tasks");
//test add Task method
addTasks(myTasks, {
  description: "Do Exercise 2",
  "completion status": "completed",
});
//show my tasks
console.log(myTasks);
//test add task already exists in the array
console.log("test add taske already exists in the array");
addTasks(myTasks, {
  description: "Do Exercise 2",
  "completion status": "Not complete",
});
//test display task method
console.log("ddisplay tasks method:");
displaytasks(myTasks);
//test Delete task method
Deletetask(myTasks, {
  description: "Do Exercise 2",
  "completion status": "in progress",
});
console.log("the tasks after delete task");
console.log(myTasks);

//test update method
console.log("test update method ,task donst exit");
isCompleted(myTasks, {
  description: "Do Exercise 2",
  "completion status": "in progress",
});
//add task not complete
addTasks(myTasks, {
  description: "Do Exercise 2",
  "completion status": "Not complete",
});
console.log(myTasks);
console.log("test update method ,task  exit");
isCompleted(myTasks, {
  description: "Do Exercise 2",
  "completion status": "in progress",
});
console.log("my task after update");
console.log(myTasks);
