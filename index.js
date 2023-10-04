var task= new Array("brushing my teeth" , "washing my face" , "eating food", "eating food", "eating food", "eating food", "eating food",);
var current_edit_TaskId = 0;
console.log(task);
function addtask(){
    var newTask= document.getElementById("addTask_box").value
    task.push(newTask);
    console.log(task);
    updateUI();
}

function updateUI(){
    var task_contents="";
    for(let x = 0; x < task.length; x++){
        var TaskBox = `<div class="task_item">
                        <div>${task[x]}</div>
                        <div class ="maryam" >
                            <div onclick="StartEditTask(${x})"><img src="./assests/icons/pen-to-square.svg"></div>
                            <div onclick="StartEditTask(${x})"><img src="./assests/icons/user-check.svg"></div>
                            <div onclick="deleteTask(${x})"><img src="./assests/icons/trash-can.svg"></div>
                        </div>
                    </div>`
        task_contents = task_contents + TaskBox;
    }
    console.log(task_contents);
    console.log(TaskBox);

    
    document.getElementById("container").innerHTML = task_contents;
}
updateUI();

function deleteTask(task_Id){
    console.log(task_Id)
    // delete item
    task.splice(task_Id, 1)
    // updateUI
    updateUI();
}

function StartEditTask(task_Id){
    console.log(task_Id);
    current_edit_TaskId = task_Id
    document.getElementById("BlackCover").style.display="block";
    // openseditbox
}

function SaveEditTask(){
    let editContent = document.getElementById("editTask_box").value;
    task[current_edit_TaskId] = editContent;
    console.log(current_edit_TaskId);


    updateUI();
    CloseEditTask();

}
function CloseEditTask(){
    document.getElementById("BlackCover").style.display="none";
    // closeseditbox
}
function startAdd(){
    document.getElementById("BlackCover_ADD").style.display="block";
    // closeseditbox
}
function CloseAddTask(){
    document.getElementById("BlackCover_ADD").style.display="none";
    // closeseditbox
}
