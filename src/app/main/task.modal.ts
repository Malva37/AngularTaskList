import { ITask } from "./task.interface";

export class Task implements ITask {
    constructor(
        public taskId: number,
        public taskName: string,
        public checkboxStatus: boolean,
        public currentStatus: string

    ) {}
}