
var tasksListObj = [];

function startTaskObject() {
    var task_name = document.getElementById('new-task-name').value;

    if (!task_name) {
        alert('Por favor, digite o nome da tarefa');
        return;
    }

    tasksListObj.push({
        name: task_name,
        taskTime: '',
        taskCalcTime: ''
    });

    console.log(tasksListObj);
}


var addTaskBtn = document.getElementById('add-task-btn');
addTaskBtn.addEventListener('click', startTask);
function startTask() {

    var task_name = document.getElementById('new-task-name').value;

    if (!task_name) {
        alert('Por favor, digite o nome da tarefa');
        return;
    }

    tasksListObj.push({
        name: task_name,
        taskTime: '',
        taskCalcTime: ''
    });

    var taskBlock = ``;
    var taskList = document.getElementById('task-list');
    var taskName = `Nome da Task`;
    var taskTime = `00:00:00`;
    var taskCalcTime = `0`;

    for (let index = 0; index < tasksListObj.length; index++) {
        // console.log(index);
        taskBlock = `<div class="timer_block">
            <div class="task_name">
                <p class="timer_text">${tasksListObj[index].name}</p>
            </div>
            <div class="timer_display">
                <p id="stopwatch-${index}" class="timer_text">${taskTime}</p>
                <p class="timer_text">Final:  ${taskCalcTime}</p>
            </div>
            <div class="timer_menu">
                <button class="start_button" onclick="startTimer(${index})">Start</button>
                <button class="stop_button" onclick="stopTimer(${index})">Stop</button>
                <button class="reset_button" onclick="resetTimer(${index})">Reset</button>
            </div>
        </div>`;
        taskList.innerHTML += taskBlock;
    }

}


function addTask(task) {
    var taskList = document.getElementById('task-list');
    var taskName = `UM TESTE`;
    var taskTime = `01:33:38`;
    var taskCalcTime = `3`;
    var taskItem = `<div class="task_block">
            <p class="task_name">${taskName}</p>
            <p class="task_time">${taskTime}</p>
            <p class="task_time_calculated">${taskCalcTime}</p>
        </div>`;

    taskList.innerHTML += taskItem;
}
var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;

function startTimer(index) {
    if (stoptime == true) {
        stoptime = false;
        timerCycle(index);
    }
}
function stopTimer(index) {
    if (stoptime == false) {
        stoptime = true;
    }
}

function timerCycle(index) {
    const timer = document.getElementById(`stopwatch-${index}`);
    if (stoptime == false) {
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);

        sec = sec + 1;

        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
        if (min == 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }

        if (sec < 10 || sec == 0) {
            sec = '0' + sec;
        }
        if (min < 10 || min == 0) {
            min = '0' + min;
        }
        if (hr < 10 || hr == 0) {
            hr = '0' + hr;
        }

        timer.innerHTML = hr + ':' + min + ':' + sec;

        setTimeout("timerCycle()", 1000);
    }
}

function resetTimer(index) {
    timer.innerHTML = '00:00:00';
}