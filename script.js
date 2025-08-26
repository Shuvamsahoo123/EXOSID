const workoutPlan = [
      { day: "Day 1 – Chest & Triceps", exercises: [
        "Push-Ups – 3 × 12 (or to failure)",
        "Dumbbell Bench Press – 3 × 12",
        "Dumbbell Fly – 3 × 12",
        "Overhead Dumbbell Tricep Extension – 3 × 12"
      ]},
      { day: "Day 2 – Legs & Core", exercises: [
        "Goblet Squats – 3 × 12",
        "Dumbbell Lunges – 3 × 12 each leg",
        "Dumbbell Romanian Deadlift – 3 × 10",
        "Plank – 3 × 30–45 sec"
      ]},
      { day: "Day 3 – Back & Biceps", exercises: [
        "One-Arm Dumbbell Row – 3 × 12 per side",
        "Bent-Over Dumbbell Row – 3 × 12",
        "Dumbbell Shrugs – 3 × 12",
        "Dumbbell Bicep Curls – 3 × 12"
      ]},
      { day: "Day 4 – Shoulders & Abs", exercises: [
        "Dumbbell Overhead Press – 3 × 12",
        "Dumbbell Lateral Raises – 3 × 12",
        "Dumbbell Front Raises – 3 × 12",
        "Russian Twists (with dumbbell) – 3 × 20"
      ]},
      { day: "Day 5 – Chest & Arms", exercises: [
        "Incline Dumbbell Press – 3 × 12",
        "Dumbbell Floor Press – 3 × 12",
        "Concentration Curls – 3 × 12",
        "Dumbbell Overhead Extension – 3 × 12"
      ]},
      { day: "Day 6 – Legs & Back (Strength)", exercises: [
        "Dumbbell Squat to Press – 3 × 12",
        "Bulgarian Split Squat – 3 × 10 per leg",
        "Dumbbell Deadlift – 3 × 10",
        "Renegade Rows – 3 × 8 each side"
      ]},
      { day: "Day 7 – Rest 💤", exercises: [] }
    ];

    function getWorkoutDayIndex() {
      const today = new Date();
      const weekday = today.getDay();
      if (weekday === 0) return 6;
      return weekday - 1;
    }

    function renderDay() {
      const dayIndex = getWorkoutDayIndex();
      const today = workoutPlan[dayIndex];
      document.getElementById("day-title").innerText = today.day;

      const now = new Date();
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      document.getElementById("date-info").innerText = now.toLocaleDateString(undefined, options);

      const list = document.getElementById("exercise-list");
      list.innerHTML = "";

      if (today.exercises.length > 0) {
        today.exercises.forEach(ex => {
          const li = document.createElement("li");
          const checkbox = document.createElement("input");
          checkbox.type = "checkbox";
          checkbox.onchange = () => {
            li.classList.toggle("done", checkbox.checked);
          };
          li.appendChild(checkbox);
          li.appendChild(document.createTextNode(ex));
          list.appendChild(li);
        });
      } else {
        const restMsg = document.createElement("p");
        restMsg.innerText = "Rest day 💤";
        restMsg.style.textAlign = "center";
        restMsg.style.fontSize = "18px";
        list.appendChild(restMsg);
      }
    }

    renderDay();