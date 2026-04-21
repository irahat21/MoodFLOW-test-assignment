# MoodFLOW Architecture

## high-level component diagram
<img width="4961" height="1699" alt="Web Client Authentication-2026-04-20-233428" src="https://github.com/user-attachments/assets/c2af3be9-f811-40c0-a665-f8c85c52bb92" />

The web client makes HTTP requests to the frontend, which authenticates users through Firebase Auth and reads and writes mood entries to Firestore. When a user submits a mood entry, the frontend sends the text and emoji rating to the Express backend, which runs it through a Transformers.js model and returns a mood score that gets saved alongside the entry in Firestore.
