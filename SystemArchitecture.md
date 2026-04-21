# MoodFLOW Architecture

## high-level component diagram
<img width="4961" height="1699" alt="Web Client Authentication-2026-04-20-233428" src="https://github.com/user-attachments/assets/c2af3be9-f811-40c0-a665-f8c85c52bb92" />
<br>
The web client makes HTTP requests to the frontend, which authenticates users through Firebase Auth and reads and writes mood entries to Firestore. When a user submits a mood entry, the frontend sends the text and emoji rating to the Express backend, which runs it through a Transformers.js model and returns a mood score that gets saved alongside the entry in Firestore.

## entity diagram
<img width="1088" height="3566" alt="Web Client Authentication-2026-04-21-022010" src="https://github.com/user-attachments/assets/6a6c7c7b-8eef-4d8b-911c-bfa18089bb00" />
<br>
MoodFLOW uses two Firestore document types to model user data. A User document stores profile information including uid, username, email, first and last name, bio, verification status, and the time the account was created. Each User has a subcollection of MoodEntry documents, where each entry stores the emoji rating chosen by the user, an AI-generated mood score, a text note, and the date it was logged. A single user can have many mood entries, forming a one-to-many relationship between User and MoodEntry.
