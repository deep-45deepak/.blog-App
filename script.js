    // Dark mode toggle
    const darkModeBtn = document.querySelector("#darkMode");

    darkModeBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const toggleElements = [
            document.querySelector("nav"),
            document.body,
            document.querySelector("#S1"),
            document.querySelector("#S2"),
            document.querySelector(".ControlPanel"),
            ...document.querySelectorAll(".rBtn")
        ];

        // Toggle classes for dark/light mode
        toggleElements.forEach(el => {
            el.classList.toggle("bg-black");
            el.classList.toggle("text-white");
            el.classList.toggle("bg-ghostwhite");
            el.classList.toggle("text-black");
        });

        // Toggle logo image
        const image = document.querySelector("#themeImage");
        const isDarkMode = document.body.classList.contains("bg-black");
        image.src = isDarkMode ? "./Images/darkLogo.jpg" : "./Images/logo.png";
    });



    // Go to top button
    const topBtn = document.querySelector("#goto");
    topBtn.addEventListener("click", () => {
        window.scrollTo(0, 0);
    });

    // Page navigation
    document.querySelector("#inbox").addEventListener("click", () => {
        window.location.href = "./msg/msg.html";
    });
    document.querySelector("#blogs").addEventListener("click", () => {
        window.location.href = "./blogs/blogs.html";
    });
    document.querySelector("#blogsTask").addEventListener("click", () => {
        window.location.href = "./blogs/blogs.html";
    });
    document.querySelector("#blogsSec").addEventListener("click", () => {
        window.location.href = "./blogs/blogs.html";
    });
    document.querySelector("#login").addEventListener("click", () => {
        window.location.href = "./login/login.html";
    });
    document.getElementById("add").addEventListener("click", () => {
        window.location.href = "./Add/add.html";
    });
    document.getElementById("addTask").addEventListener("click", () => {
        window.location.href = "./Add/add.html";
    });

    // Control Panel toggle
    function openControlPanel() {
        const controlPanel = document.getElementById("controlPanel");
        controlPanel.classList.add("active");
    }

    function closeControlPanel() {
        const controlPanel = document.getElementById("controlPanel");
        controlPanel.classList.remove("active");
    }

    // Typing effect
    document.addEventListener("DOMContentLoaded", function (e) {
        const headingText = "A beautiful website starts here";
        const typingHeading = document.getElementById("typing-heading");

        let index = 0;

        function type() {
            if (index < headingText.length) {
                typingHeading.textContent += headingText.charAt(index);
                index++;
                setTimeout(type, 100); // Adjust speed here (100ms per character)
            }
        }

        typingHeading.textContent = ""; // Clear the h1 content initially
        type(); // Start typing
    });

    document.addEventListener("DOMContentLoaded", () => {
        loadBlogs();
    });

    function addBlog() {
        const title = document.getElementById("title").value;
        const content = document.getElementById("content").value;
        const imageInput = document.getElementById("image");

        if (!title || !content) {
            alert("Please fill in all fields.");
            return;
        }

        const blogPost = {
            title,
            content,
            date: new Date().toLocaleDateString(),
            image: imageInput.files[0] ? URL.createObjectURL(imageInput.files[0]) : null
        };

        let blogs = JSON.parse(localStorage.getItem("blogs")) || [];
        blogs.push(blogPost);
        localStorage.setItem("blogs", JSON.stringify(blogs));

        // Clear input fields
        document.getElementById("title").value = "";
        document.getElementById("content").value = "";
        imageInput.value = "";

        loadBlogs();
    }

    function loadBlogs() {
        const blogList = document.getElementById("blogList");
        blogList.innerHTML = "";
        let blogs = JSON.parse(localStorage.getItem("blogs")) || [];

        blogs.forEach((blog, index) => {
            const blogElement = document.createElement("div");
            blogElement.className = "p-6 border rounded-lg bg-gray-50 shadow-md transition hover:shadow-lg";

            blogElement.innerHTML = `
${blog.image ? `<img src="${blog.image}" class="w-full h-48 object-cover rounded-md mb-4" alt="Blog Image">` : ""}
<h3 class="text-2xl font-bold text-gray-800">${blog.title}</h3>
<p class="text-gray-600 mt-2">${blog.content}</p>
<span class="text-sm text-gray-500">${blog.date}</span>
<button onclick="deleteBlog(${index})" 
class="text-red-500 float-right mt-2 hover:underline">🗑 Delete</button>
`;
            blogList.appendChild(blogElement);
        });
    }

    function deleteBlog(index) {
        let blogs = JSON.parse(localStorage.getItem("blogs")) || [];
        blogs.splice(index, 1);
        localStorage.setItem("blogs", JSON.stringify(blogs));
        loadBlogs();
    }


//  open inbox page of the website.
document.querySelector("#inbox").addEventListener("click", () => {
  window.location.href = "./msg/msg.html";
});

//  open blogs page of the website.
document.querySelector("#blogs").addEventListener("click", () => {
  window.location.href = "./blogs/blogs.html";
});
document.querySelector("#blogsTask").addEventListener("click", () => {
  window.location.href = "./blogs/blogs.html";
});
document.querySelector("#blogsSec").addEventListener("click", () => {
  window.location.href = "./blogs/blogs.html";
});
//  open login page of the website.
document.querySelector("#login").addEventListener("click", () => {
  window.location.href = "./login/login.html";
});
//  open add page of the website.
document.getElementById("add").addEventListener("click", () => {
  window.location.href = "./Add/add.html";
});
document.getElementById("addTask").addEventListener("click", () => {
  window.location.href = "./Add/add.html";
});

//  Notification pop Up

const notifyBtn = document.getElementById("notify-btn");
const notificationContainer = document.getElementById("notification-container");
const closeBtn = document.getElementById("close-btn");

notifyBtn.addEventListener("click", function () {
  if (notificationContainer.style.display === "none") {
    notificationContainer.style.display = "block";
  } else {
    notificationContainer.style.display = "none";
  }
});

closeBtn.addEventListener("click", function () {
  notificationContainer.style.display = "none";
});



// // typing effect in the second section of the website

// document.addEventListener("DOMContentLoaded", function (e) {
//   e.preventDefault();
//   const headingText = "A beautiful website starts here";
//   const typingHeading = document.getElementById("typing-heading");

//   let index = 0;

//   function type() {
//     if (index < headingText.length) {
//       typingHeading.textContent += headingText.charAt(index);
//       index++;
//       setTimeout(type, 100); // Adjust speed here (100ms per character)
//     }
//   }

//   typingHeading.textContent = ""; // Clear the h1 content initially
//   type(); // Start typing
// });
