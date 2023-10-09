export async function fetchApplications() {
  try {

    const response = await fetch("/api/getAllJobApplications");
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const applications = await response.json();
    return applications;
  } catch (error) {
    console.log(error);
    return [];
  }
}
