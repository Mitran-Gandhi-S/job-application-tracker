// ==========================
// LOAD APPLICATIONS
// ==========================

let applications =
JSON.parse(
    localStorage.getItem("applications")
) || [];

// ==========================
// UPDATE CARDS
// ==========================

let total =
applications.length;

let offers =
applications.filter(
    a => a.status === "Offer"
).length;

let success =
total > 0
? Math.round((offers / total) * 100)
: 0;

document.getElementById(
    "successRate"
).innerText =
success + "%";

document.getElementById(
    "totalApplications"
).innerText =
total;

// ==========================
// STATUS COUNTS
// ==========================

let applied =
applications.filter(
    a => a.status === "Applied"
).length;

let interview =
applications.filter(
    a => a.status === "Interview"
).length;

let rejected =
applications.filter(
    a => a.status === "Rejected"
).length;

// ==========================
// STATUS PIE CHART
// ==========================

const statusCanvas =
document.getElementById(
    "statusChart"
);

if (statusCanvas) {

    new Chart(statusCanvas, {
        type: "pie",
        data: {
            labels: [
                "Applied",
                "Interview",
                "Offer",
                "Rejected"
            ],
            datasets: [{
                data: [
                    applied,
                    interview,
                    offers,
                    rejected
                ],
                backgroundColor: [
                    "#3b82f6",
                    "#f59e0b",
                    "#10b981",
                    "#ef4444"
                ]
            }]
        },
        options: {
            responsive: true
        }
    });

}

// ==========================
// MONTHLY APPLICATIONS
// ==========================

let months =
new Array(12).fill(0);

applications.forEach(app => {

    if (app.date) {

        let month =
        new Date(app.date)
        .getMonth();

        months[month]++;
    }
});

// ==========================
// MONTHLY BAR CHART
// ==========================

const monthlyCanvas =
document.getElementById(
    "monthlyChart"
);

if (monthlyCanvas) {

    new Chart(monthlyCanvas, {
        type: "bar",
        data: {
            labels: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec"
            ],
            datasets: [{
                label:
                "Applications",
                data: months,
                backgroundColor:
                "#2563eb"
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

}

// ==========================
// DARK MODE
// ==========================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const darkBtn =
        document.getElementById(
            "darkBtn"
        );

        if (!darkBtn) return;

        // Load saved theme
        if (
            localStorage.getItem(
                "theme"
            ) === "dark"
        ) {

            document.body
            .classList.add(
                "dark"
            );

            darkBtn.innerHTML =
            "☀️ Light Mode";
        }

        // Toggle Dark Mode
        darkBtn.addEventListener(
            "click",
            () => {

                document.body
                .classList.toggle(
                    "dark"
                );

                if (
                    document.body
                    .classList.contains(
                        "dark"
                    )
                ) {

                    localStorage.setItem(
                        "theme",
                        "dark"
                    );

                    darkBtn.innerHTML =
                    "☀️ Light Mode";

                } else {

                    localStorage.setItem(
                        "theme",
                        "light"
                    );

                    darkBtn.innerHTML =
                    "🌙 Dark Mode";
                }
            }
        );
    }
);
document.getElementById(
    "offers"
).innerText = offers;

document.getElementById(
    "interviews"
).innerText = interview;
if (
    localStorage.getItem("theme")
    === "dark"
) {
    document.body.classList.add(
        "dark"
    );
}