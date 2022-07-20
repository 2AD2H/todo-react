import { dummyTaskList } from "../components/layout";

export const getTaskLists = async () => {
  //   const res = await fetch("url");
  //   if (!res.ok) {
  //     throw new Error();
  //   }
  //   const data = await res.json();
  //   return data;
  return dummyTaskList;
};

export const getTasks = async (taskListId) => {
  //   const res = await fetch("url");
  //   if (!res.ok) {
  //     throw new Error();
  //   }
  //   const data = await res.json();
  //   return data;
  return dummyTaskList.filter((tl) => tl.id === taskListId)[0]?.tasks ?? [];
};

export const getTaskList = async (taskListId) => {
  //   const res = await fetch("url");
  //   if (!res.ok) {
  //     throw new Error();
  //   }
  //   const data = await res.json();
  //   return data;
  return dummyTaskList.filter((tl) => tl.id === taskListId)[0];
};

export const addTask = async (task, taskListId) => {
  // add api
  // let taskList = dummyTaskList.filter((tl) => tl.id === taskListId)[0];
  // return taskList.tasks.push(task);
};
