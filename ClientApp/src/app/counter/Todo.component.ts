import { Component, Inject} from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})

@Injectable({
  providedIn: 'root'
})

export class TodoComponent {
  public TodoList: TodoItem[] = [];
  public currentCount = 0;
  public currentItem :TodoItem = {} as TodoItem;
  public ItemId: string = '';
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    for(let i = 0; i<25; i++){
        let bool = true;
        if(i%2==0){
          bool = false;
        }
        let newTodo = {id: Number(i), name: `Task${i}`, isComplete: Boolean(bool)};
        this.http.post<TodoItem>(`https://localhost:7253/api/TodoItems`,newTodo).subscribe(res =>{
          console.log(res)
        }), (error: any) => console.error(error);
    }
  }

  getAllTasks(){
    this.http.get<TodoItem[]>('https://localhost:7253/api/TodoItems').subscribe(res =>{
      console.log("button pressed")
      console.log(res);
      this.TodoList = res;
    }), (error: any) => console.error(error);
  }

  getOneTask(id:string){
    if(isNaN(Number(id))){
      console.log("invalid input");
      return;
    }
    this.http.get<TodoItem>(`https://localhost:7253/api/TodoItems/${id}`).subscribe(res =>{
      this.currentItem = res;
    }), (error: any) => console.error(error);
  }

  UpdateTodo(todoitem:string, id:string){
    if(isNaN(Number(id))){
      console.log("invalid input");
      return;
    }
    console.log(todoitem);
    return this.http.put<TodoItem>(`https://localhost:7253/api/TodoItems/${id}`,todoitem).subscribe(res =>{
      console.log(res)
    }), (error: any) => console.error(error);
  }

  PostTest(id:string,name:string,bool:string){

    
    let todo = Todo(id,name,bool);

    return this.http.post<TodoItem>(`https://localhost:7253/api/TodoItems`,todo).subscribe(res =>{
      console.log(res)
    }), (error: any) => console.error(error);
  }
  
  DeleteItem(todo:TodoItem, id:number){
    return this.http.delete<TodoItem>(`https://localhost:7253/api/TodoItems/${id}`)
  }
}


interface TodoItem {
  id: number;
  name: string;
  isComplete: boolean;
}

function Todo(id:string,nam:string,bool:string){
  if(isNaN(Number(id))){
    console.log("invalid input");
    return;
  }
  let newTodo = {id: Number(id), name: nam, isComplete: Boolean(bool)};

  return newTodo
}
