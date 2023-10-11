var task = [
    {
        name: 'Brushing my teeth',
        status: 'uncompleted',
    },
    {
        name: 'Washing my face',
        status: 'uncompleted',
    },
    {
        name: 'Eating food',
        status: 'completed',
    },
    {
        name: 'Washing Clothes',
        status: 'uncompleted',
    },
    {
        name: 'Watching Tv',
        status: 'uncompleted',
    },
    {
        name: 'Attending Lectures',
        status: 'uncompleted',
    },
    {
        name: 'Rock Climbing',
        status: 'uncompleted',
    },
]
// var task= new Array("brushing my teeth" , "washing my face" , "eating food", "Washing Clothes", "Watching Tv", "Attending Lectures", "Rock Climbing",);
var current_edit_TaskId = 0;
// console.log(task);

function updateUI(){
    var task_contents="";
    for(let x = 0; x < task.length; x++){
        var Status_Switch_Box
        if (task[x].status == "completed") {
            Status_Switch_Box = `<div onclick="MarkAsunDone(${x})"><img src="./assests/icons/square-check.svg"></div>`
        }
        else{
            Status_Switch_Box = ` <div onclick="MarkAsDone(${x})"><img src="./assests/icons/square.svg"></div>`
        }
        var TaskBox = `<div class="task_item">
        <div class="${task[x].status === 'completed'? 'strikeThrough': '' }">${task[x].name}</div>
                        <div class ="maryam" >
                            <div onclick="StartEditTask(${x})"><img src="./assests/icons/pen-to-square.svg"></div>
                            <span class="Status_Switch">
                                <div class="ToolTip">Click to change status of task</div>
                                ${Status_Switch_Box}
                            </span>
                            <div onclick="deleteTask(${x})"><img src="./assests/icons/trash-can.svg"></div>
                        </div>
                    </div>`
        task_contents = task_contents + TaskBox;
    }
    // console.log(task_contents);
    // console.log(TaskBox);
    
    
    document.getElementById("container").innerHTML = task_contents;
}
updateUI();
            
// delete functionality
function deleteTask(task_Id){
    console.log(task_Id)
    // delete item
    task.splice(task_Id, 1)
    // updateUI
    updateUI();
}

//add task functionality
    // open add popup
    function startAdd(){
        document.getElementById("BlackCover_ADD").style.display="block";
        // closeseditbox
    }
    //Close popup
    function CloseAddTask(){
        document.getElementById("BlackCover_ADD").style.display="none";
        // closeseditbox
    }

    //Add task
    function addtask(){
        var newTask_name= document.getElementById("addTask_box").value;
        var new_task= {
            name: newTask_name,
            status: "uncompleted" 
        }
        task.push(new_task);
        console.log(task);
        updateUI();
        CloseAddTask()
    }

//Edit task functionality
    //opens popup
    function StartEditTask(task_Id){
        console.log(task_Id);
        current_edit_TaskId = task_Id;
        document.getElementById("editTask_box").value = task[current_edit_TaskId].name;
        document.getElementById("BlackCover").style.display="block";
        // openseditbox
    }
    
    function SaveEditTask(){
        let editContent = document.getElementById("editTask_box").value;
        task[current_edit_TaskId].name = editContent;
        console.log(current_edit_TaskId);
    
    
        updateUI();
        CloseEditTask();
    
    }
    function MarkAsDone(task_Id){
        task[task_Id].status = "completed";
        console.log(task)

        updateUI();
    }
    function MarkAsunDone(task_Id){
        task[task_Id].status = "uncompleted";
        console.log(task)

        updateUI();
    }
     // closeseditbox
    function CloseEditTask(){
        document.getElementById("BlackCover").style.display="none";
       
    }
