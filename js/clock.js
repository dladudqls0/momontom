/* 이 클락에 어떤 객체를 넣으면 그 객체 안에 시계를 보여주는 span태그를 만들어준다. */
export class Clock{
    constructor(clock){
        this.clock = document.createElement('span');
        clock.appendChild(this.clock);
        this.getTime();
        setInterval(()=>this.getTime(),1000);//이렇게한이유
    }
    getTime(){
        const now = new Date();
        const hour = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        this.clock.innerText = `${hour<10?'0'+hour:hour}:${
            minutes<10?'0'+minutes:minutes}:${
                seconds<10?'0'+seconds:seconds}`;
    }
}

