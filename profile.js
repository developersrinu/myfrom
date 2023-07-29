document.getElementById("logoutButton").addEventListener("click", function () {
    // Clear user data from local storage
    localStorage.removeItem("user");
  
    // Redirect to the signup page
    window.location.href = "index.html";
  });
  
  // Check if the user is logged in (access token is present in local storage)
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user || !user.accessToken) {
    // If the user is not logged in, redirect to the signup page
    window.location.href = "index.html";
  } else {
    // If the user is logged in, display their details on the profile page
    const profileDataDiv = document.getElementById("profileData");
    profileDataDiv.innerHTML = `
      <p><class="p1"strong>Username:</class=strong> ${user.username}</p>
      <p><strong class = 'p2'>Email:</strong> ${user.email}</p>
      <p><strong class = 'p3'> Access Token:</strong> ${user.accessToken}</p>
    `;

  }
  