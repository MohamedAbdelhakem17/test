
const panorama = new PANOLENS.ImagePanorama('../WhatsApp Image 2023-02-03 at 03.57.54.jpg');
const container = document.getElementById("img")
const viewer = new PANOLENS.Viewer({
    container: container,
});
viewer.add(panorama);
