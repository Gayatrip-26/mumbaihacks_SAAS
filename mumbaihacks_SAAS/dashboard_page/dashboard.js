// Pomodoro Timer functionality
let timer;
let timeLeft = 1500; // 25 minutes in seconds

function startTimer() {
  if (timer) clearInterval(timer);
  timer = setInterval(() => {
    timeLeft--;
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    document.getElementById("time").textContent = `${minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      alert("Time's up!");
      resetTimer();
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  timeLeft = 1500;
  document.getElementById("time").textContent = "25:00";
}

// To-Do List functionality
function addToDo() {
  let input = document.getElementById("toDoInput").value;
  if (input) {
    let list = document.getElementById("toDoList");
    let li = document.createElement("li");
    li.textContent = input;
    list.appendChild(li);
    document.getElementById("toDoInput").value = "";
  }
}
async function classifyTask(task) {
  const response = await fetch("http://localhost:5000/classify", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ task }),
  });
  const data = await response.json();
  return data.priority;
}

async function addPriorityTask() {
  let input = document.getElementById("priorityTaskInput").value;
  if (input) {
    const priority = await classifyTask(input);

    // Append task to the correct priority section
    const taskElement = document.createElement("div");
    taskElement.className = "task";
    taskElement.textContent = input;

    if (priority === "high") {
      document.getElementById("highPriorityTasks").appendChild(taskElement);
    } else if (priority === "medium") {
      document.getElementById("mediumPriorityTasks").appendChild(taskElement);
    } else {
      document.getElementById("lowPriorityTasks").appendChild(taskElement);
    }

    // Clear input field
    document.getElementById("priorityTaskInput").value = "";
  }
}




