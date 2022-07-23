import { dummyTaskList } from "../components/layout";

export const getTaskLists = async () => {
  const res = await fetch("/api/todo/getTaskLists");
  return await res.json();
};

export const getTasks = async (taskListId) => {
  const res = await fetch(
    taskListId ? `/api/todo/tasks/${taskListId}` : `/api/todo/tasks/`,
    {
      method: "GET",
    }
  );
  return await res.json();
};

export const addTask = async (task, taskListId, ctx) => {
  const { setTasks, tasks } = ctx;
  let newTaskFromApi = {};

  const newTask = { ...task, id: 1000000000 };
  //set temporary task
  setTasks([...tasks, newTask]);

  if (taskListId) {
    const res = await fetch(`/api/todo/tasks/${taskListId}`, {
      method: "POST",
      body: JSON.stringify({ newTask }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    newTaskFromApi = await res.json();
  } else {
    const res = await fetch(`/api/todo/tasks/addTask`, {
      method: "POST",
      body: JSON.stringify({ newTask }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    newTaskFromApi = await res.json();
  }
  const newTasks = tasks.filter((task) => task.id !== newTask.id);
  newTaskFromApi && setTasks([...newTasks, newTaskFromApi]);
};

export const addTaskList = async (ctx) => {
  await fetch("/api/todo/addTaskList");
  const taskLists = await getTaskLists();
  ctx.setTasklists(taskLists);
};

export const updateTask = async (updatedtask, ctx) => {
  const { setTasks, tasks } = ctx;
  const { id, ...taskBody } = updatedtask;
  const selectedTasks = tasks.find((item) => item.id === updatedtask.id);
  const updatedTask = { ...selectedTasks, ...taskBody };

  setTasks([
    ...tasks.filter((item) => item.id !== updatedtask.id),
    updatedTask,
  ]);

  await fetch(`/api/todo/tasks/task/${updatedtask?.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ updateTask: taskBody }),
  });
};

export const deleteTask = async (taskId, ctx) => {
  const { setTasks, tasks } = ctx;

  setTasks(tasks.filter((item) => item.id !== taskId));

  await fetch(`/api/todo/tasks/task/${taskId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const updateTaskList = async (updateTaskList, ctx) => {
  const { setTasklists, taskLists } = ctx;
  const { id, ...taskListBody } = updateTaskList;

  const selectedTaskList = taskLists.find(
    (item) => item.id === updateTaskList?.id
  );
  const newUpdatedTaskList = { ...selectedTaskList, ...taskListBody };

  setTasklists([
    ...taskLists.filter((item) => item.id !== updateTaskList.id),
    newUpdatedTaskList,
  ]);

  await fetch(`/api/todo/taskList/${updateTaskList.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ updateTaskList: taskListBody }),
  });
};

export const deleteTaskList = async (taskListId, ctx) => {
  const { setTasklists, taskLists } = ctx;

  setTasklists(taskLists.filter((item) => item?.id !== taskListId));

  await fetch(`/api/todo/taskList/${taskListId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
