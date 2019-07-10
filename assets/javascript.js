let currentImage = 1;
let currentProject = 1;

function openPhoto(project, image) {
    currentImage = image;
    currentProject = project;
    changeImage();
    document.getElementById('myPhotoContainer').style.display = "block";
    document.getElementById('myGallery').style.display = "none";
    window.scrollTo(0, 0);
}

function closePhoto() {
    document.getElementById('myGallery').style.display = "block";
    document.getElementById('myPhotoContainer').style.display = "none";
    var position = getOffset(document.getElementsByClassName("thumbnail")[currentImage - 1])
    window.scrollTo(0, position - 50);
}

function changeImage() {
    document.getElementById("myPhoto").src = "assets/images/project" + currentProject + "/img" + currentImage + ".jpg";
    document.getElementById("myCaption").textContent = document.getElementsByClassName("caption")[currentImage - 1].children[0].textContent;
}

function getImage(i) {
    let maxImages = document.getElementsByClassName("caption").length - 1;
    currentImage += i;
    if (currentImage > maxImages) {
        currentImage = 1;
    }
    if (currentImage <= 0) {
        currentImage = maxImages;
    }
    changeImage();
}

function getOffset(element) {
    const rect = element.getBoundingClientRect();
    return rect.top + window.scrollY
}