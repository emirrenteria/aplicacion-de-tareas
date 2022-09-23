import { addTask } from "./componentes/addTask.js";
import { displayTasks } from "./componentes/readTasks.js";

const btn = document.querySelector("[data-form-btn]");


// Arrow function o funciones anonimas
btn.addEventListener("click", addTask);  // definimos la accion y lo que queremos que haga, en este caso
                                            // cada vez que se haga click se hace lo que esta en esta funcion.
displayTasks();


                                
