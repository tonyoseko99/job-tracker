import React from "react";

function AddJobForm() {
  return (
    <form action="post" class="max-w-md mx-auto accent-transparent">
        <h1 className="text-white text-lg font-bold font-weight-700 text-center py-10">Add an Application</h1>
      <div class="mb-4">
        <label for="company" class="block font-medium mb-2">
          Company
        </label>
        <input
          type="text"
          name="company"
          id="company"
          class="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-3"
        />
      </div>
      <div class="mb-4">
        <label for="position" class="block font-medium mb-2">
          Position
        </label>
        <input
          type="text"
          name="position"
          id="position"
          class="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-3"
        />
      </div>
      <div class="mb-4">
        <label for="status" class="block font-medium mb-2">
          Status
        </label>
        <select
          name="status"
          id="status"
          class="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-3"
        >
          <option value="applied">Applied</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <div class="mb-4">
        <label for="dateApplied" class="block font-medium mb-2">
          Date Applied
        </label>
        <input
          type="date"
          name="dateApplied"
          id="dateApplied"
          class="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-3"
        />
      </div>
      <div class="mb-4">
        <label for="location" class="block font-medium mb-2">
          Location
        </label>
        <input
          type="option"
          name="location"
          id="location"
          class="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-3"
        />
      </div>
      <div class="mb-4">
        <label for="description" class="block font-medium mb-2">
          Description
        </label>
        <textarea
          name="description"
          id="description"
          class="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-3"
        ></textarea>
      </div>
      <div class="mt-6">
        <button
          type="submit"
          class="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
        >
          Add Application
        </button>
      </div>
    </form>
  );
}

export default AddJobForm;
