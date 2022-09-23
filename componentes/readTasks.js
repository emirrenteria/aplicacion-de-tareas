import { createTask } from "./addTask.js"; // e importamos el archivo para poder usar las funciones
import { uniqueDates, orderDates } from "./services/date.js";
import dateElement  from "./dateElement.js";

export const displayTasks = () => {
    const list = document.querySelector("[data-list]");
    const tasksList = JSON.parse(localStorage.getItem("task")) || []; // nos debuelve un objeto JSON pero para poder manipularlo lo convertimos en objeto javascript. (|| []) esto es para en caso de que no halla informacion ponga un array vacio porque si no se pone sale error
    const dates = uniqueDates(tasksList);
    orderDates(dates);
    
    dates.forEach(date => {
        const dateMoment = moment(date, "DD/MM/YYYY");
        list.appendChild(dateElement(date));
        tasksList.forEach((task) => {
            const taskDate = moment(task.dateFormat, "DD/MM/YYYY");
            const diff = dateMoment.diff(taskDate);
            if(diff == 0){
                list.appendChild(createTask(task));
            }
    });
    });   
};