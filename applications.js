let applications =
JSON.parse(
localStorage.getItem("applications")
) || [];

const modal =
document.getElementById("modal");

document.getElementById("addBtn")
.onclick = () => {
    modal.style.display = "flex";
};

document.getElementById("closeBtn")
.onclick = () => {
    modal.style.display = "none";
};

document.getElementById("saveBtn")
.onclick = () => {

    const app = {
        company:
            document.getElementById(
                "company"
            ).value,

        role:
            document.getElementById(
                "role"
            ).value,

        date:
            document.getElementById(
                "date"
            ).value,

        status:
            document.getElementById(
                "status"
            ).value
    };

    applications.push(app);

    localStorage.setItem(
        "applications",
        JSON.stringify(applications)
    );

    modal.style.display = "none";

    renderTable();
    updateCards();
};

function renderTable(){

    const table =
    document.getElementById(
        "tableBody"
    );

    table.innerHTML = "";

    applications.forEach(
        (app,index) => {

        table.innerHTML += `
        <tr>
            <td>${app.company}</td>
            <td>${app.role}</td>
            <td>${app.date}</td>
            <td>${app.status}</td>
            <td>
                <button
                onclick="deleteApp(${index})">
                Delete
                </button>
            </td>
        </tr>
        `;
    });
}

function deleteApp(index){

    applications.splice(index,1);

    localStorage.setItem(
        "applications",
        JSON.stringify(applications)
    );

    renderTable();
    updateCards();
}

function updateCards(){

    document.getElementById(
        "totalApps"
    ).innerText =
    applications.length;

    document.getElementById(
        "interviews"
    ).innerText =
    applications.filter(
        a=>a.status==="Interview"
    ).length;

    document.getElementById(
        "rejections"
    ).innerText =
    applications.filter(
        a=>a.status==="Rejected"
    ).length;

    document.getElementById(
        "offers"
    ).innerText =
    applications.filter(
        a=>a.status==="Offer"
    ).length;
}

/* DARK MODE */

const darkBtn =
document.getElementById(
    "darkBtn"
);

if(
localStorage.getItem("theme")
=== "dark"
){
    document.body.classList.add(
        "dark"
    );

    darkBtn.innerHTML =
    "☀️ Light Mode";
}

darkBtn.onclick = () => {

    document.body.classList.toggle(
        "dark"
    );

    if(
    document.body.classList.contains(
        "dark"
    )
    ){
        localStorage.setItem(
            "theme",
            "dark"
        );

        darkBtn.innerHTML =
        "☀️ Light Mode";
    }
    else{
        localStorage.setItem(
            "theme",
            "light"
        );

        darkBtn.innerHTML =
        "🌙 Dark Mode";
    }
};
if (
    localStorage.getItem("theme")
    === "dark"
) {
    document.body.classList.add(
        "dark"
    );
}
renderTable();
updateCards();