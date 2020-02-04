import { Component, OnInit } from '@angular/core';
import { ITask } from './task.interface';
import { Task } from './task.modal';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  countTask: number;
  arrTasks: Array<ITask>;
  taskId: number;
  taskName: string;
  checkboxStatus: boolean = false;
  currentStatus: string = 'IN PROGRESS';
  showEditField: boolean = true;
  editChekedTask: string;
  newTask: string;

  constructor() { }

  ngOnInit() {
    this.arrTasks =[
      {
        taskId: 1,
        taskName: "HTML5",
        checkboxStatus: false,
        currentStatus: 'IN PROGRESS'
      },
      {
        taskId: 2,
        taskName: "CSS3",
        checkboxStatus: false,
        currentStatus: 'IN PROGRESS'
      },
      {
        taskId: 3,
        taskName: "SCSS",
        checkboxStatus: false,
        currentStatus: 'IN PROGRESS'
      },
      {
        taskId: 4,
        taskName: "JavaScript",
        checkboxStatus: false,
        currentStatus: 'IN PROGRESS'
      },
      {
        taskId: 5,
        taskName: "jQuery",
        checkboxStatus: false,
        currentStatus: 'IN PROGRESS'
      },
      {
        taskId: 6,
        taskName: "Angular",
        checkboxStatus: false,
        currentStatus: 'IN PROGRESS'
      }
    ];
    this.countTask = this.arrTasks.length;
  }


  countTaskBookkeeper(): number {
    return this.countTask = this.arrTasks.length;
  }


  addTask(newTask: string): void {
    const newT: ITask = new Task(1, this.taskName = newTask, this.checkboxStatus, this.currentStatus);
    if (this.arrTasks.length > 0) {
      newT.taskId = this.arrTasks.slice(-1)[0].taskId + 1;
    }
    this.arrTasks.push(newT);
    this.countTaskBookkeeper();
    this.newTask = '';
  }

  editTask(task: ITask): void {
    this.showEditField = false;
    this.editChekedTask = task.taskName;
    this.taskId = task.taskId;
  }


  saveTask(): void {
    const editT: ITask = new Task(this.taskId, this.taskName = this.editChekedTask, this.checkboxStatus, this.currentStatus)
    const index = this.arrTasks.findIndex(p => p.taskId === this.taskId);
    this.arrTasks.splice(index, 1, editT);
    this.showEditField = true;
  }

  deteteTask(task: ITask): void {
    this.taskId = task.taskId;
    const index = this.arrTasks.findIndex(per => per.taskId === this.taskId);
    this.arrTasks.splice(index, 1);
    this.countTaskBookkeeper();

  }


  changeCheckbox(event, i): void {
    if (event.target.checked) {
      this.arrTasks[i].checkboxStatus = true;
      this.arrTasks[i].currentStatus = 'Done';
    } else {
      this.arrTasks[i].checkboxStatus = false;
      this.arrTasks[i].currentStatus = 'IN PROGRESS';
    }
  }



}
