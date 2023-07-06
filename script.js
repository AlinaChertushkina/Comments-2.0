const button = document.querySelector('.button');

const userNameElement = document.querySelector('.user_name');
const profilePicLinkElement = document.querySelector('.link');
const commentElement = document.getElementById('comment');

button.addEventListener('click', function () {
    //Код с прошлой недели

    const userName = userNameElement.value || "Username";
    const userNameToLowerCase = userName.toLowerCase();
    const userNameModified = (userNameToLowerCase.charAt(0).toUpperCase() + userNameToLowerCase.slice(1)).trim();

    const chatField = document.getElementById('chat_field');
    chatField.innerHTML = userNameModified;

    const profilePicLink = profilePicLinkElement.value;
    const profilePic = document.getElementById('profile_pic');
    let imageElement = document.createElement("img");
    imageElement.src = profilePicLink;
    profilePic.innerHTML = "";
    profilePic.appendChild(imageElement);

    const comment = commentElement.value;
    const commentToChat = document.getElementById('entered_comment');

    function checkSpam(str) {
        let spamDetection = /(viagra|XXX)/gi;
        return str.replace(spamDetection, '***');
    }

    let modifiedComment = checkSpam(comment);
    commentToChat.innerHTML = modifiedComment;

    userNameElement.value = "";
    profilePicLinkElement.value = "";
    commentElement.value = "";

    //Конец кода с прошлой недели


    //Новый код

    const currentDate = new Date();
    const dateString = currentDate.toLocaleDateString();
    const timeString = currentDate.toLocaleTimeString();

    const timeAndDate = document.getElementById('date');
    timeAndDate.innerHTML = dateString + " " + timeString;

    const standardAvatars = [
        '/images/pic1.jpg',
        '/images/pic2.jpg',
        '/images/pic3.jpg',
        '/images/pic4.jpg',
        '/images/pic5.jpg'
    ];

    function getRandomAvatar() {
        const randomIndex = Math.floor(Math.random() * standardAvatars.length);
        return standardAvatars[randomIndex];
    }

    let profilePicUrl;

    if (profilePicLink) {
        profilePicUrl = profilePicLink;
    } else {
        profilePicUrl = getRandomAvatar();
    }

    imageElement.style.maxWidth = '50px';
    imageElement.style.maxHeight = '60px';

    imageElement.src = profilePicUrl;

})

function toggleUserNameInput() {
    const hideNameCheckBox = document.getElementById('no');
    if (hideNameCheckBox.checked) {
        userNameElement.style.display = "none";
    } else {
        userNameElement.style.display = "block";
    }
}

