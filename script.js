const avatar = document.querySelector('.profile-avatar');
const profileName = document.querySelector('.profile-name');
const profileUsername = document.querySelector('.profile-username');
const repositoriesCount = document.querySelector('.numbers-repositories .repositories-number');
const followersCount = document.querySelector('.numbers-followers .followers-number');
const followingCount = document.querySelector('.numbers-following .following-number');
const link = document.querySelector('.profile-link');

fetch('https://api.github.com/users/EmersonAraujonb')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        avatar.src = data.avatar_url;
        profileName.innerText = data.name;
        profileUsername.innerText = data.login;
        repositoriesCount.innerText = data.public_repos;
        followersCount.textContent = data.followers;
        followingCount.innerText = data.following;
        link.href = data.html_url;
    })
    .catch(error => console.error('Error fetching GitHub data:', error));