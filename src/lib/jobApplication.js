import { getDB } from "../db";

// create new job application
async function createJobApplication(jobApplicationData) {
  try {
    const db = await getDB();
    const jobApplicationsCollection = db.collection("jobApplications");

    // insert the job collection data into the mongodb collection
    const result = await jobApplicationsCollection.insertOne(
      jobApplicationData
    );

    // return the newly created job application document
    return result.ops[0];
  } catch (error) {
    throw new Error("Failed to create job application");
  }
}

export { createJobApplication };
