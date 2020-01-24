import { collatedTasks } from "../constants";

export const getCollectedTasksExist = selectedProject =>
  collatedTasksExist.find(task => task.key === selectedProject);
