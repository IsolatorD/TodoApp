import { ITask } from "./task";

export interface ITaskState {
  task: ITask;
  tasks: ITask[];
  loading: boolean;
}