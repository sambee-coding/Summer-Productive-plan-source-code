#  30-Day Sprint Tracker (Customizable Template)

A beautiful, static, and entirely customizable personal productivity dashboard built to track 30-day sprints. Keep track of your daily non-negotiable habits, manage your schedule, log your mood, track your hydration, and document your reading journey — all entirely from your browser!

##  Features

- **📊 Comprehensive Dashboard (`index.html`)**: Track your monthly/weekly progress, active streak, and mood.
- **⏱️ Integrated Pomodoro Timer**: Built-in, fully customizable Pomodoro timer with alert sounds and desktop notifications.
- **📆 Day-by-Day Scheduler (`days.html`)**: Dive into specific days to check off unique to-do lists and daily tasks.
- **📚 Book & Reflection Tracker (`books.html`)**: Log the books you read and write daily reflections (with image support!).
- **💧 Hydration & Sleep Trackers**: Monitor your daily water intake and log your sleep schedule.
- **💌 Secret Vent Letter**: Write a time-capsule letter to yourself that automatically unlocks on a date you choose!
- **💾 Local Storage**: 100% private. All your progress is saved directly to your browser's local storage. No database required. Includes Export/Import capabilities so you never lose your data.

## 🛠️ How to Customize (No Coding Required!)

You do not need to know HTML, CSS, or JavaScript to make this tracker your own! Everything is powered by a single configuration file.

1. Open the **`config.js`** file in any text editor.
2. Find the placeholders (like `[Your Name]`, `[Week 1 Theme]`, etc.) and replace them with your own text.
3. You can customize your name, the length of the sprint, your habits, your daily schedule template, and your motivational quotes.

*That's it! The HTML files will automatically read your `config.js` and build your custom website.*

## 🏃 How to Run the App

Since this app is entirely static (HTML/CSS/JS), it requires no backend or complicated build process.

**Option 1: The Easiest Way**
Simply open your File Explorer, find the folder, and double-click `index.html`. It will open in your browser and work perfectly!

**Option 2: The Developer Way (Local Server)**
If you want to run it like a real deployed site (e.g., to view on your mobile device on the same WiFi), you can run a local server:
```bash
npx serve .
```
Then open `http://localhost:3000` in your browser.

## 🎨 Technologies Used
- HTML5
- Vanilla JavaScript
- Tailwind CSS (via CDN)
- Glassmorphism UI Design

---
*Built to help you stay focused, disciplined, and motivated on your journey!*
