import admin from "firebase-admin";

try {
  // Load local service account for development
  const serviceAccount = require("../moodflow-key.json");
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
} catch (error) {
  // Fallback to Application Default Credentials in production (Cloud Run)
  admin.initializeApp();
}

export const db = admin.firestore();
export const auth = admin.auth();
export const storage = admin.storage();