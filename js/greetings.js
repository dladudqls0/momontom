export class Greetings{
    constructor(form, greetings){
        this.form = form;
        this.greetings = greetings;
        this.input = form.querySelector('input');

        this.USER_LS = 'currentUser';
        this.SHOWING_CN = 'showing';
        this.loadName();
    }
    saveName(text){
        localStorage.setItem(this.USER_LS, text);
    }
    handleSubmit(event){
        event.preventDefault();
        const currentValue = this.input.value;
        this.paintGreeting(currentValue);
        this.saveName(currentValue);
    }
    askForName(){
        this.form.classList.add(this.SHOWING_CN);
        this.form.addEventListener('submit',this.handleSubmit.bind(this));
    }
    paintGreeting(text){
        this.form.classList.remove(this.SHOWING_CN);
        this.greetings.classList.add(this.SHOWING_CN);
        this.greetings.innerText = `Hello ${text}`;
    }
    loadName(){
        const currentUser = localStorage.getItem(this.USER_LS);
        currentUser === null ? this.askForName() : this.paintGreeting(currentUser);
    }
}