/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║              🎯 YOUR PERSONAL TRACKER CONFIGURATION             ║
 * ║   Edit this file to fully personalize the tracker for yourself! ║
 * ╚══════════════════════════════════════════════════════════════════╝
 *
 * HOW TO CUSTOMIZE:
 *  1. Change OWNER to your name and sprint details.
 *  2. Add/remove/rename HABITS.
 *  3. Adjust your SCHEDULE (daily time blocks).
 *  4. Update WEEKS to outline your own weekly plans & goals.
 *  5. Edit QUOTES with your favorite motivational quotes.
 */

const CONFIG = {

  // ──────────────────────────────────────────────
  // 🧑 OWNER — Your basic details
  // ──────────────────────────────────────────────
  OWNER: {
    name: "[Your Name]",
    sprintTitle: "30-Day Sprint",
    sprintDays: 30,
    emoji: "🚀",
    tagline: "[Your Tagline: e.g., Build. Learn. Grow.]"
  },

  // ──────────────────────────────────────────────
  // ✅ HABITS — Your Daily Non-Negotiables
  // Each habit needs an 'id' (no spaces) and a 'label'
  // ──────────────────────────────────────────────
  HABITS: [
    { id: "habit1", label: "[Habit 1: e.g., Workout]", sub: "[Optional sub-text]" },
    { id: "habit2", label: "[Habit 2: e.g., Read 10 Pages]" },
    { id: "habit3", label: "[Habit 3: e.g., Journal]" },
  ],

  // ──────────────────────────────────────────────
  // 📅 DAILY TIME SCHEDULE
  // The daily time blocks shown under the "Daily Schedule" tab
  // ──────────────────────────────────────────────
  SCHEDULE: [
    {
      block: "Morning",
      items: [
        "7:00-8:00: [Morning Routine]",
        "8:00-9:00: [Breakfast & Plan]"
      ]
    },
    {
      block: "Focus Block 1",
      items: [
        "9:00-11:30: [Deep Work]"
      ]
    },
    {
      block: "Afternoon",
      items: [
        "1:00-3:00: [Meetings / Secondary Work]"
      ]
    },
    {
      block: "Evening",
      items: [
        "6:00-7:00: [Family / Relax]"
      ]
    }
  ],

  // ──────────────────────────────────────────────
  // 📆 WEEKLY FOCUS STRUCTURE (shown in Daily tab)
  // ──────────────────────────────────────────────
  WEEKLY_FOCUS: [
    { day: "Mon", focus: "[Focus for Monday]" },
    { day: "Tue", focus: "[Focus for Tuesday]" },
    { day: "Wed", focus: "[Focus for Wednesday]" },
    { day: "Thu", focus: "[Focus for Thursday]" },
    { day: "Fri", focus: "[Focus for Friday]" },
    { day: "Sat", focus: "[Focus for Saturday]" },
    { day: "Sun", focus: "[Focus for Sunday]" },
  ],

  // ──────────────────────────────────────────────
  // 🗓️ WEEKS — Your plan for each of the 4 weeks!
  // This is what shows up when you click "WEEK 1", "WEEK 2", etc.
  // ──────────────────────────────────────────────
  WEEKS: {
    week1: {
      subtitle: "Theme: [Week 1 Theme]",
      title: "Week 1 // [Main Objective]",
      goals: [
        { label: "Goal 1",     text: "[Describe your first goal]" },
        { label: "Goal 2",     text: "[Describe your second goal]" },
        { label: "Milestone",  text: "✅ [What counts as a win this week?]" },
      ],
      days: [
        { label: "Day 1", items: ["[Task A]", "[Task B]"] },
        { label: "Day 2", items: ["[Task A]", "[Task B]"] },
        { label: "Day 3", items: ["[Task A]", "[Task B]"] },
        { label: "Day 4", items: ["[Task A]", "[Task B]"] },
        { label: "Day 5", items: ["[Task A]", "[Task B]"] },
        { label: "Day 6 & 7", items: ["[Weekend Tasks]"] },
      ],
      extraCards: [
        {
          title: "🎯 [Optional Extra Category, e.g., Fitness]",
          items: ["[Sub-goal 1]", "[Sub-goal 2]"]
        }
      ],
      checklist: [
        "[Day 1 default checklist item]",
        "[Day 2 default checklist item]",
        "[Day 3 default checklist item]",
        "[Day 4 default checklist item]",
        "[Day 5 default checklist item]",
        "[Day 6 default checklist item]",
        "[Day 7 default checklist item]",
      ],
      dailySchedule: [
        "[Recurring daily task 1]",
        "[Recurring daily task 2]",
        "[Recurring daily task 3]",
      ],
    },

    week2: {
      subtitle: "Theme: [Week 2 Theme]",
      title: "Week 2 // [Main Objective]",
      goals: [
        { label: "Goal",      text: "[Week 2 Goal]" },
        { label: "Milestone", text: "✅ [Week 2 Win]" },
      ],
      checklist: [
        "[Plan Monday]", "[Plan Tuesday]", "[Plan Wednesday]", 
        "[Plan Thursday]", "[Plan Friday]", "[Plan Saturday]", "[Plan Sunday]"
      ]
    },

    week3: {
      subtitle: "Theme: [Week 3 Theme]",
      title: "Week 3 // [Main Objective]",
      goals: [
        { label: "Goal",      text: "[Week 3 Goal]" },
        { label: "Milestone", text: "✅ [Week 3 Win]" },
      ],
      checklist: [
        "[Plan Monday]", "[Plan Tuesday]", "[Plan Wednesday]", 
        "[Plan Thursday]", "[Plan Friday]", "[Plan Saturday]", "[Plan Sunday]"
      ]
    },

    week4: {
      subtitle: "Theme: [Week 4 Theme]",
      title: "Week 4 // [Main Objective]",
      goals: [
        { label: "Goal",      text: "[Week 4 Goal]" },
        { label: "Milestone", text: "✅ [Week 4 Win]" },
      ],
      checklist: [
        "[Plan Monday]", "[Plan Tuesday]", "[Plan Wednesday]", 
        "[Plan Thursday]", "[Plan Friday]", "[Plan Saturday]", "[Plan Sunday]"
      ]
    },
  },

  // ──────────────────────────────────────────────
  // 💧 DAYS PAGE — default negotiables and schedule
  // These are the defaults shown in days.html per day
  // ──────────────────────────────────────────────
  DAY_DEFAULTS: {
    negotiables: [
      "[Default Negotiable 1]",
      "[Default Negotiable 2]",
      "[Default Negotiable 3]",
    ],
    schedule: [
      "[Default Schedule Block 1]",
      "[Default Schedule Block 2]",
      "[Default Schedule Block 3]",
    ],
  },

  // ──────────────────────────────────────────────
  // 💌 SECRET LETTER — "Vent" section
  // The letter is hidden until the reveal date
  // ──────────────────────────────────────────────
  SECRET_LETTER: {
    title: "[Your Secret Letter Title]",
    description: "Write your thoughts here. They will be hidden until the date below.",
    unlockMonth: 11,   // 0 = Jan, 1 = Feb ... 11 = December
    unlockDay: 31,     // Day of the month
  },

  // ──────────────────────────────────────────────
  // ⏱️ POMODORO — Default timer durations (in minutes)
  // ──────────────────────────────────────────────
  POMODORO: {
    workMinutes:       25,
    shortBreakMinutes:  5,
    longBreakMinutes:  15,
    defaultSound: "classic",  
  },

  // ──────────────────────────────────────────────
  // 💬 MOTIVATIONAL QUOTES
  // ──────────────────────────────────────────────
  QUOTES: [
    { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "Small daily improvements over time lead to stunning results.", author: "Robin Sharma" },
  ],

};
