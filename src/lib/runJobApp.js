const { connectDB, closeDB } = require("../db");
const { createJobApplication } = require("./jobApplication");

async function run(jobApplicationData) {
  try {
    // Connect to the database first
    await connectDB();

    // call the jobApplication to insert data into the db
    const newJobApplication = await createJobApplication(jobApplicationData);

    console.log("new job application created: ", newJobApplication);
  } catch (error) {
    console.log("Error creating job application: ", error.message);
  } finally {
    // close the db connection
    closeDB();
  }
}

// execute the code
run();
