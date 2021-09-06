const taskValue = document.getElementById("task");
const taskSubmit = document.getElementById("Today");
const taskList = document.getElementById("list1");

const taskSubmit2 = document.getElementById("Tomorrow");
const taskList2 = document.getElementById("list2");

const taskSubmit3 = document.getElementById("Sometimes");
const taskList3 = document.getElementById("list3");

// Todayクリック
//追加ボタンを作成
const addTasks = (task) => {
  // 入力したタスクを追加・表示
  const listItem = document.createElement("li");
  const showItem = taskList.appendChild(listItem);
  showItem.innerHTML = task; //タスクに削除ボタンを付与

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "削除";
  listItem.appendChild(deleteButton); //削除ボタンをクリックし、イベントを発動（タスクが削除）

  deleteButton.addEventListener("click", (evt) => {
    evt.preventDefault();
    deleteTasks(deleteButton);
  });
};
const deleteTasks = (deleteButton) => {
  const chosenTask = deleteButton.closest("li");
  taskList.removeChild(chosenTask);
};

//追加ボタンをクリックし、イベントを発動（タスクが追加）
taskSubmit.addEventListener("click", (evt) => {
  evt.preventDefault();
  const task = taskValue.value;
  addTasks(task);
  taskValue.value = "";
});
// Todayクリック

// Tomorrowクリック
const addTasks2 = (task) => {
  const listItem = document.createElement("li");
  const showItem = taskList2.appendChild(listItem);
  showItem.innerHTML = task;

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "削除";
  listItem.appendChild(deleteButton);

  deleteButton.addEventListener("click", (evt) => {
    evt.preventDefault();
    deleteTasks2(deleteButton);
  });
};
const deleteTasks2 = (deleteButton) => {
  const chosenTask = deleteButton.closest("li");
  taskList2.removeChild(chosenTask);
};

taskSubmit2.addEventListener("click", (evt) => {
  evt.preventDefault();
  const task = taskValue.value;
  addTasks2(task);
  taskValue.value = "";
});

// sometimesクリック
const addTasks3 = (task) => {
  const listItem = document.createElement("li");
  const showItem = taskList3.appendChild(listItem);
  showItem.innerHTML = task;

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "削除";
  listItem.appendChild(deleteButton);

  deleteButton.addEventListener("click", (evt) => {
    evt.preventDefault();
    deleteTasks3(deleteButton);
  });
};
const deleteTasks3 = (deleteButton) => {
  const chosenTask = deleteButton.closest("li");
  taskList3.removeChild(chosenTask);
};

taskSubmit3.addEventListener("click", (evt) => {
  evt.preventDefault();
  const task = taskValue.value;
  addTasks3(task);
  taskValue.value = "";
});
