import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do',
  imports: [FormsModule],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css'
})
export class ToDoComponent {

  task="";
  taskList:{id:number,task:string}[]=[];


  addTask(){
    this.taskList.push({id:this.taskList.length+1,task:this.task});
    this.task=""
  }
  deleteTask(taskId:number){
    this.taskList=this.taskList.filter((item) => item.id!=taskId);
  }
}
