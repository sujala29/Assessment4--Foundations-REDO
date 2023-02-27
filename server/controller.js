module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = [
            "A beautiful, smart, and loving person will be coming into your life.",
            "Your life will be happy and peaceful.",
            "A fresh start will put you on your way.",
            "A good time to finish up old tasks.",
            "A lifetime of happiness lies ahead of you."
        ];

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
        res.status(200).send(randomFortune);
    },

    getBudhaquote: (req, res) => {
        const budhaquotes = ["Give even if you have little.", "Let the past make you Better not Bitter.", "Dont rush anything, when the time is right it will happen!."];
        const randomIndex = Math.floor(Math.random() * budhaquotes.length);
        const randomBudhaquote = budhaquotes[randomIndex];
        res.status(200).send(randomBudhaquote);
      },

      addGoal: (req, res) => {
        const { goal } = req.body;
        const newGoal = { id: goals.length + 1, goal };
        goals.push(newGoal);
        res.status(201).send({ message: "Goal added successfully", goal: newGoal });
      },

      getGoals: (req, res) => {
        res.status(200).send(goals);
      },

      deleteGoal: (req, res) => {
        const { id } = req.params;
        const goalIndex = goals.findIndex((goal) => goal.id === +id);
        if (goalIndex === -1) {
          res.status(404).send({ message: "Goal not found" });
        } else {
          goals.splice(goalIndex, 1);
          res.status(200).send({ message: "Goal deleted successfully" });
        }
      },

      updateGoal: (req, res) => {
        const { id } = req.params;
        const { goal } = req.body;
        const goalIndex = goals.findIndex((goal) => goal.id === +id);
        if (goalIndex === -1) {
          res.status(404).send({ message: "Goal not found" });
        } else {
          goals[goalIndex].goal = goal;
          res.status(200).send({ message: "Goal updated successfully" });
        }
      }
    };

    // Sample goals array for testing purposes
let goals = [
    { id: 1, goal: "Learn a new programming language" },
    { id: 2, goal: "Travel to a new country" },
    { id: 3, goal: "Run a marathon" },
    { id: 4, goal: "Read 50 books in a year" },
    { id: 5, goal: "Learn to cook a gourmet meal" }
  ];

      

