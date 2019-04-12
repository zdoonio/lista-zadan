import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  newTask: string;
  taskList: Array<string> = [];
  taskDone: Array<string> = [];

  constructor() { }

  ngOnInit() {
  }

  add() {
    this.taskList.push(this.newTask);
    this.newTask = '';
  }

  remove(task: string) {
    this.taskList = this.taskList.filter(e => e !== task);
  }

  done(task: string) {
    this.taskDone.push(task);
    this.remove(task);
  }



}
