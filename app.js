document.addEventListener(
  "DOMContentLoaded",
  loadDashboard
);

function loadDashboard() {

  const applications =
    JSON.parse(
      localStorage.getItem("applications")
    ) || [];

  const profile =
    JSON.parse(
      localStorage.getItem("profile")
    ) || {};

  updateGreeting(profile);
  updateDate();
  updateCards(applications);
  loadRecentApplications(applications);
  loadProfilePicture(profile);
}

function updateGreeting(profile) {

  const greeting =
    document.getElementById("greeting");

  if (profile.name) {
    greeting.innerText =
      `Welcome, ${profile.name}!`;
  }
}

function updateDate() {

  document.getElementById(
    "today"
  ).innerText =
    new Date().toLocaleString();
}

function updateCards(applications) {

  document.getElementById(
    "totalApps"
  ).innerText =
    applications.length;

  document.getElementById(
    "interviews"
  ).innerText =
    applications.filter(
      app => app.status === "Interview"
    ).length;

  document.getElementById(
    "rejections"
  ).innerText =
    applications.filter(
      app => app.status === "Rejected"
    ).length;

  document.getElementById(
    "offers"
  ).innerText =
    applications.filter(
      app => app.status === "Offer"
    ).length;

  document.getElementById(
    "pendingInterviews"
  ).innerText =
    applications.filter(
      app =>
        app.status === "Applied" ||
        app.status === "Interview"
    ).length;
}

function loadRecentApplications(
  applications
) {

  const table =
    document.getElementById(
      "recentApplications"
    );

  table.innerHTML = "";

  const recent =
    applications
      .slice(-5)
      .reverse();

  if (recent.length === 0) {

    table.innerHTML = `
      <tr>
        <td colspan="3">
          No applications yet
        </td>
      </tr>
    `;

    return;
  }

  recent.forEach(app => {

    table.innerHTML += `
      <tr>
        <td>${app.company}</td>
        <td>${app.role}</td>
        <td>${app.status}</td>
      </tr>
    `;
  });
}

function loadProfilePicture(profile) {

  const img =
    document.getElementById(
      "topProfile"
    );

  if (
    profile.image &&
    img
  ) {
    img.src = profile.image;
  }
}

document
  .getElementById("darkBtn")
  ?.addEventListener(
    "click",
    () => {
      document.body.classList.toggle(
        "dark"
      );
    }
  );
  if (
    localStorage.getItem("theme")
    === "dark"
) {
    document.body.classList.add(
        "dark"
    );
}