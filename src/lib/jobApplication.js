// jobApplication.js
const { getDB } = require("../db");

async function createJobApplication(jobApplicationData) {
  try {
    const db = await getDB();
    const jobApplicationsCollection = db.collection("jobApplications");

    // Insert the job application data into the MongoDB collection
    const result = await jobApplicationsCollection.insertOne(
      jobApplicationData
    );

    console.log("Result of insertOne:", result);
    // Check if the result.ops array exists and contains elements
    if (result && result.ops && result.ops.length > 0) {
      // Return the first element of the result.ops array
      return result.ops[0];
    }

    // Return null if the result is falsy or does not have a result.ops array
    return null;

    // return the newly created job application
    return result.ops[0];
  } catch (error) {
    // Log the error message to identify the issue
    console.error("Failed to create job application:", error.message);
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
    console.log("Failed to fetch job applications");
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
      console.log("Job application not found or data not modified");
    }

    // Successful update
    return true;
  } catch (error) {
    console.log("Failed to update job");
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
      console.log("Job application not found or already deleted");
    }

    // successful deletion
    return true;
  } catch (error) {
    console.log("Failed to delete job application");
  }
}

module.exports = {
  createJobApplication,
  getAllJobApplications,
  updateJobApplication,
  deleteJobApplication,
};
