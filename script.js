
function getGitHubUser() {
    const username = document.getElementById('username').value;
    if (!username) {
        alert('Please enter a GitHub username.');
        return;
    }

    const url = `https://api.github.com/users/${username}`;
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('User not found');
            }
            return response.json();
        })
        .then(data => {
            displayUserInfo(data);
        })
        .catch(error => {
            document.getElementById('user-info').innerHTML = `<p style="color: red;">${error.message}</p>`;
        });
}

function displayUserInfo(user) {
    const userInfoDiv = document.getElementById('user-info');
    userInfoDiv.innerHTML = `
        <img src="${user.avatar_url}" alt="${user.login}">
        <h2>${user.name || user.login}</h2>
        <p><strong>Bio:</strong> ${user.bio || 'No bio available'}</p>
        <p><strong>Followers:</strong> ${user.followers}</p>
        <p><strong>Following:</strong> ${user.following}</p>
        <p><a href="${user.html_url}" target="_blank">View Profile on GitHub</a></p>
    `;
}