// =========================
// DARK MODE
// =========================

const darkBtn = document.getElementById("darkBtn");

// Load saved theme on page load
function loadTheme() {
    const theme =
        localStorage.getItem("theme");

    if (theme === "dark") {
        document.body.classList.add("dark");

        if (darkBtn) {
            darkBtn.innerHTML =
                "☀️ Light Mode";
        }
    } else {
        document.body.classList.remove("dark");

        if (darkBtn) {
            darkBtn.innerHTML =
                "🌙 Dark Mode";
        }
    }
}

loadTheme();

// Toggle theme
if (darkBtn) {
    darkBtn.addEventListener(
        "click",
        function () {

            document.body.classList.toggle(
                "dark"
            );

            const dark =
                document.body.classList.contains(
                    "dark"
                );

            localStorage.setItem(
                "theme",
                dark ? "dark" : "light"
            );

            darkBtn.innerHTML =
                dark
                    ? "☀️ Light Mode"
                    : "🌙 Dark Mode";
        }
    );
}

// =========================
// EXPORT CSV
// =========================

const exportBtn =
document.getElementById(
    "exportBtn"
);

if (exportBtn) {

    exportBtn.onclick =
    function () {

        const applications =
        JSON.parse(
            localStorage.getItem(
                "applications"
            )
        ) || [];

        if (
            applications.length === 0
        ) {

            alert(
                "No applications to export."
            );

            return;
        }

        let csv =
        "Company,Role,Date,Status\n";

        applications.forEach(
            app => {

                csv +=
                `"${app.company}","${app.role}","${app.date}","${app.status}"\n`;
            }
        );

        const blob =
        new Blob(
            [csv],
            {
                type:
                "text/csv"
            }
        );

        const link =
        document.createElement(
            "a"
        );

        link.href =
        URL.createObjectURL(
            blob
        );

        link.download =
        "applications.csv";

        link.click();

        alert(
            "CSV exported successfully."
        );
    };
}

// =========================
// BACKUP JSON
// =========================

const backupBtn =
document.getElementById(
    "backupBtn"
);

if (backupBtn) {

    backupBtn.onclick =
    function () {

        const data =
        localStorage.getItem(
            "applications"
        );

        if (!data) {

            alert(
                "No applications found."
            );

            return;
        }

        const blob =
        new Blob(
            [data],
            {
                type:
                "application/json"
            }
        );

        const link =
        document.createElement(
            "a"
        );

        link.href =
        URL.createObjectURL(
            blob
        );

        link.download =
        "applications-backup.json";

        link.click();

        alert(
            "Backup downloaded."
        );
    };
}

// =========================
// IMPORT BACKUP
// =========================

const importBtn =
document.getElementById(
    "importBtn"
);

const importFile =
document.getElementById(
    "importFile"
);

if (
    importBtn &&
    importFile
) {

    importBtn.onclick =
    () => {

        importFile.click();
    };

    importFile.onchange =
    function () {

        const file =
        this.files[0];

        if (!file) return;

        const reader =
        new FileReader();

        reader.onload =
        function (e) {

            try {

                const data =
                JSON.parse(
                    e.target.result
                );

                localStorage.setItem(
                    "applications",
                    JSON.stringify(
                        data
                    )
                );

                alert(
                    "Backup restored successfully."
                );

                location.reload();

            } catch {

                alert(
                    "Invalid backup file."
                );
            }
        };

        reader.readAsText(
            file
        );
    };
}

// =========================
// LOAD SAMPLE DATA
// =========================

const sampleBtn =
document.getElementById(
    "sampleBtn"
);

if (sampleBtn) {

    sampleBtn.onclick =
    function () {

        const sample = [

            {
                company:
                "Google",

                role:
                "Software Engineer Intern",

                date:
                "2026-06-20",

                status:
                "Interview"
            },

            {
                company:
                "Microsoft",

                role:
                "Frontend Developer",

                date:
                "2026-06-22",

                status:
                "Applied"
            },

            {
                company:
                "Amazon",

                role:
                "SDE Intern",

                date:
                "2026-06-24",

                status:
                "Offer"
            }
        ];

        localStorage.setItem(
            "applications",
            JSON.stringify(
                sample
            )
        );

        alert(
            "Sample applications loaded."
        );

        location.reload();
    };
}

// =========================
// DELETE APPLICATIONS
// =========================

const clearBtn =
document.getElementById(
    "clearBtn"
);

if (clearBtn) {

    clearBtn.onclick =
    function () {

        if (
            confirm(
                "Delete all applications?"
            )
        ) {

            localStorage.removeItem(
                "applications"
            );

            alert(
                "Applications deleted."
            );

            location.reload();
        }
    };
}

// =========================
// DELETE PROFILE
// =========================

const clearProfileBtn =
document.getElementById(
    "clearProfileBtn"
);

if (clearProfileBtn) {

    clearProfileBtn.onclick =
    function () {

        if (
            confirm(
                "Delete profile data?"
            )
        ) {

            localStorage.removeItem(
                "profile"
            );

            alert(
                "Profile deleted."
            );

            location.reload();
        }
    };
}

// =========================
// RESET ENTIRE WEBSITE
// =========================

const resetBtn =
document.getElementById(
    "resetBtn"
);

if (resetBtn) {

    resetBtn.onclick =
    function () {

        if (
            confirm(
                "This will delete ALL data. Continue?"
            )
        ) {

            localStorage.clear();

            alert(
                "Website reset successfully."
            );

            location.reload();
        }
    };
}

// =========================
// FIREBASE CHECK
// =========================

if (
    typeof firebase !==
    "undefined"
) {

    console.log(
        "Firebase Apps:",
        firebase.apps.length
    );
}
if (
    localStorage.getItem("theme")
    === "dark"
) {
    document.body.classList.add(
        "dark"
    );
}