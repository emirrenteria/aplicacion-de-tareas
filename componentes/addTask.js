import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";
import { displayTasks } from "./readTasks.js";
import { uniqueDates } from "./services/date.js";

export const addTask = (evento) =>{
    evento.preventDefault();
    
    const list = document.querySelector("[data-list]");
    const input = document.querySelector("[data-form-input]");
    const calendar = document.querySelector("[data-form-date]");

    const value = input.value;
    const date = calendar.value;
    const dateFormat = moment(date).format("DD/MM/YYYY");   
    
    if(value == "" || date == ""){ 
        return;   // return hace que el codigo de abajo no se ejecute.
    }

    input.value = '';
    calendar.value = '';

    const complete = false;

    const taskObj = {
        value, 
        dateFormat,
        complete,
        id: uuid.v4()
    };
    
    list.innerHTML = "";

    const taskList = JSON.parse(localStorage.getItem("task")) || [];
    taskList.push(taskObj);
    localStorage.setItem("task", JSON.stringify(taskList));

    displayTasks();
};

export const createTask = ({value, dateFormat, complete, id}) => { //exportamos la funcion cuando la vamos a usar en otro archivo
    const task = document.createElement("li");
        task.classList.add("card");

    const taskContent = document.createElement("div");

    const check = checkComplete(id);

    if(complete){
        check.classList.toggle('fas');
        check.classList.toggle("completeIcon");
        check.classList.toggle("far");
    }

    const titleTask = document.createElement("span");
        titleTask.classList.add("task");
        titleTask.innerHTML = value;
        taskContent.appendChild(check);
        taskContent.appendChild(titleTask);

    const dataElement = document.createElement("span");
        dataElement.innerHTML = dateFormat;

        task.appendChild(taskContent);
        task.appendChild(dataElement);
        task.appendChild(deleteIcon(id));
    return task;
};