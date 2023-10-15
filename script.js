// script.js
document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // You can implement your authentication logic here.
    if (username === "your_username" && password === "your_password") {
      // Successful login, you can redirect or perform other actions.
      alert("Login successful!");
    } else {
      // Display an error message for an unsuccessful login.
      const errorMessage = document.getElementById("error-message");
      errorMessage.textContent = "Invalid username or password";
    }
  });

// script.js
document.addEventListener("DOMContentLoaded", function () {
  const eventList = document.getElementById("event-list");
  const eventNameInput = document.getElementById("event-name");
  const eventDateInput = document.getElementById("event-date");
  const addEventButton = document.getElementById("add-event");

  addEventButton.addEventListener("click", function () {
    const eventName = eventNameInput.value;
    const eventDate = eventDateInput.value;

    if (eventName && eventDate) {
      const eventItem = document.createElement("li");
      eventItem.innerHTML = `${eventName} - ${eventDate}`;
      eventList.appendChild(eventItem);

      eventNameInput.value = "";
      eventDateInput.value = "";
    }
  });
});
//new code
function addAnnouncement() {
  const title = document.getElementById("announcement-title").value;
  const timestamp = new Date().toLocaleString(); // Current timestamp
  const place = document.getElementById("announcement-place").value;
  const content = document.getElementById("announcement-content").value;

  if (title.trim() !== "" && content.trim() !== "") {
    const announcementsList = document.getElementById("announcements");
    const listItem = document.createElement("li");

    // Create an announcement element to hold title, timestamp, place, and content.
    const announcementElement = document.createElement("div");
    announcementElement.className = "announcement";

    const titleElement = document.createElement("h3");
    titleElement.textContent = title;

    const timestampElement = document.createElement("p");
    timestampElement.textContent = `Timestamp: ${timestamp}`;

    const placeElement = document.createElement("p");
    placeElement.textContent = `Place: ${place}`;

    const contentElement = document.createElement("p");
    contentElement.textContent = content;

    // Add each element to the announcement.
    announcementElement.appendChild(titleElement);
    announcementElement.appendChild(timestampElement);
    announcementElement.appendChild(placeElement);
    announcementElement.appendChild(contentElement);

    // Add a delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button";
    deleteButton.addEventListener("click", function () {
      announcementsList.removeChild(listItem);
    });

    // Add the announcement and the delete button to the list item.
    listItem.appendChild(announcementElement);
    listItem.appendChild(deleteButton);

    announcementsList.appendChild(listItem);

    // Clear the input fields.
    document.getElementById("announcement-title").value = "";
    document.getElementById("announcement-place").value = "";
    document.getElementById("announcement-content").value = "";
  }
}
