const complimentBtn = document.getElementById("complimentButton")

const fortuneBtn = document.getElementById("fortuneButton")

const budhaquoteBtn = document.getElementById("budhaquoteButton");

const goalForm = document.getElementById("goalForm");
const goalList = document.getElementById("goalList");




const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};



const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getBudhaquote = () => {
    axios.get("http://localhost:4000/api/budhaquote/")
      .then(res => {
        const data = res.data;
        outputDiv.innerText = data;
      });
  };




const addGoal = (event) => {
  event.preventDefault();
  const goalInput = document.getElementById("goal");
  const goal = goalInput.value;
  axios.post("http://localhost:4000/api/goals", { goal })
    .then(() => {
      getGoals();
      goalInput.value = "";
    })
    .catch((error) => console.error(error));
};

const deleteGoal = (id) => {
  axios.delete(`http://localhost:4000/api/goals/${id}`)
    .then(() => getGoals())
    .catch((error) => console.error(error));
};

const updateGoal = (id, goal) => {
  axios.put(`http://localhost:4000/api/goals/${id}`, { goal })
    .then(() => getGoals())
    .catch((error) => console.error(error));
};

const getGoals = () => {
  axios.get("http://localhost:4000/api/goals")
    .then((response) => {
      const goals = response.data;
      goalList.innerHTML = "";
      goals.forEach((goal) => {
        const li = document.createElement("li");
        li.innerText = goal.goal;
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.addEventListener("click", () => deleteGoal(goal.id));
        const updateBtn = document.createElement("button");
        updateBtn.innerText = "Update";
        updateBtn.addEventListener("click", () => {
          const newGoal = prompt("Enter new goal:", goal.goal);
          if (newGoal) {
            updateGoal(goal.id, newGoal);
          }
        });
        li.appendChild(deleteBtn);
        li.appendChild(updateBtn);
        goalList.appendChild(li);
      });
    })
    .catch((error) => console.error(error));
};

getGoals();




  


complimentBtn.addEventListener('click', getCompliment)

fortuneBtn.addEventListener('click', getFortune)

budhaquoteBtn.addEventListener('click', getBudhaquote);

goalForm.addEventListener("submit", addGoal);



