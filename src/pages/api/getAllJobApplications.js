import { getAllJobApplications } from "@/lib/jobApplication";

export default async function getJobs(req, res) {
  try {
    const applications = await getAllJobApplications();
    res.status(200).json(applications);
    return;
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch applications" });
  }
}
