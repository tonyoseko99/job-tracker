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

// fetch all job applications
async function getAllJobApplications() {
  try {
    const db = await getDB();
    const jobApplicationsCollection = db.collection("jobApplications");

    // find all job applications and convert the cursor to an array
    const jobApplications = await jobApplicationsCollection.find({}).toArray();

    // return the array
    return jobApplications;
  } catch (error) {
    throw new Error("Failed to fetch job applications");
  }
}

// Implement Update Operation:
async function updateJobApplication(applicationId, updatedData) {
  try {
    const db = await getDB();
    const jobApplicationsCollection = db.collection("jobApplications");

    // update the job application data
    const result = await jobApplicationsCollection.updateOne(
      { _id: applicationId },
      { $set: updatedData }
    );

    if (result.modifiedCount === 0) {
      throw new Error("Job application not found or data not modified");
    }

    // Successful update
    return true;
  } catch (error) {
    throw new Error("Failed to update job");
  }
}

// Delete job application
async function deleteJobApplication(applicationId) {
  try {
    const db = await getDB();
    const jobApplicationsCollection = db.collection("jobApplications");

    // Delete the job application from the db
    const result = await jobApplicationsCollection.deleteOne({
      _id: applicationId,
    });

    if (result.deletedCount === 0) {
      throw new Error("Job application not found or already deleted");
    }

    // successful deletion
    return true;
  } catch (error) {
    throw new Error("Failed to delete job application");
  }
}

export {
  createJobApplication,
  getAllJobApplications,
  updateJobApplication,
  deleteJobApplication,
};
