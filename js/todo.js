export class ToDo{
    constructor(toDoForm, toDoList){
        this.toDoForm = toDoForm;
        this.toDoList = toDoList;
        this.toDoInput = toDoForm.querySelector('input');

        this.TODOS_LS = 'toDos';
        this.toDos = [];
        this.idNumbers = 0;

        this.loadToDos();
        this.toDoForm.addEventListener("submit", this.handleSubmit.bind(this));
    }
    saveToDos(){
        localStorage.setItem(this.TODOS_LS, JSON.stringify(this.toDos));
    }
    deleteToDo(event){
        const btn = event.target;
        const li = btn.parentNode;
        this.toDoList.removeChild(li);
        const cleanToDos = this.toDos.filter(toDo=>toDo.id!=parseInt(li.id))
        this.toDos = cleanToDos;
        this.saveToDos();
    }
    paintToDo(text){
        const li = document.createElement('li');
        const delBtn = document.createElement('button');
        const span = document.createElement('span');
        this.idNumbers+=1;
        delBtn.innerText = "❌";
        delBtn.addEventListener('click',this.deleteToDo.bind(this));
        span.innerText = text;
        li.appendChild(span);
        li.appendChild(delBtn);
        li.id = this.idNumbers;
        this.toDoList.appendChild(li);

        const toDoObj = {
            text: text,
            id : this.idNumbers,
        }
        this.toDos.push(toDoObj);
        this.saveToDos();
    }
    loadToDos(){
        const loadedToDos = localStorage.getItem(this.TODOS_LS);
        if(loadedToDos !== null){
            const parsedToDos = JSON.parse(loadedToDos);
            parsedToDos.forEach(toDo=>this.paintToDo(toDo.text));
        }
    }
    handleSubmit(event){
        event.preventDefault();
        const currentValue = this.toDoInput.value;
        currentValue === "" ? null : this.paintToDo(currentValue);
        this.toDoInput.value='';
    }
}