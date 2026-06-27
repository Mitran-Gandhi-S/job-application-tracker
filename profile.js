const profileImage =
    document.getElementById("profileImage");

const imageInput =
    document.getElementById("imageInput");

const nameInput =
    document.getElementById("name");

const emailInput =
    document.getElementById("email");

const phoneInput =
    document.getElementById("phone");

const collegeInput =
    document.getElementById("college");

const degreeInput =
    document.getElementById("degree");

const aboutInput =
    document.getElementById("about");

const saveBtn =
    document.getElementById("saveProfileBtn");


// Load Profile
function loadProfile() {

    const profile =
        JSON.parse(
            localStorage.getItem("profile")
        ) || {};

    nameInput.value =
        profile.name || "";

    emailInput.value =
        profile.email || "";

    phoneInput.value =
        profile.phone || "";

    collegeInput.value =
        profile.college || "";

    degreeInput.value =
        profile.degree || "";

    aboutInput.value =
        profile.about || "";

    if (profile.image) {
        profileImage.src =
            profile.image;
    }
}


// Save Profile
saveBtn.onclick = function () {

    const profile = {
        name:
            nameInput.value.trim(),

        email:
            emailInput.value.trim(),

        phone:
            phoneInput.value.trim(),

        college:
            collegeInput.value.trim(),

        degree:
            degreeInput.value.trim(),

        about:
            aboutInput.value.trim(),

        image:
            profileImage.src
    };

    localStorage.setItem(
        "profile",
        JSON.stringify(profile)
    );

    alert(
        "Profile saved successfully!"
    );
};


// Upload Image
imageInput.addEventListener(
    "change",
    function () {

        const file =
            this.files[0];

        if (!file)
            return;

        const reader =
            new FileReader();

        reader.onload =
            function (e) {

                profileImage.src =
                    e.target.result;
            };

        reader.readAsDataURL(file);
    }
);


// Load on Page Open
document.addEventListener(
    "DOMContentLoaded",
    loadProfile
);
// DARK MODE

const darkBtn =
document.getElementById("darkBtn");

if (
    localStorage.getItem("theme") === "dark"
) {
    document.body.classList.add("dark");

    darkBtn.innerHTML =
        "☀️ Light Mode";
}

darkBtn.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "dark"
        );

        if (
            document.body.classList.contains(
                "dark"
            )
        ) {

            localStorage.setItem(
                "theme",
                "dark"
            );

            darkBtn.innerHTML =
                "☀️ Light Mode";
        }
        else {

            localStorage.setItem(
                "theme",
                "light"
            );

            darkBtn.innerHTML =
                "🌙 Dark Mode";
        }
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