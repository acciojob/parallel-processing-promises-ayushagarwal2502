//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");
const images = [
  "https://picsum.photos/id/237/200/300",
  "https://picsum.photos/id/238/200/300",
  "https://picsum.photos/id/239/200/300"
];

function downloadImage(url) {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.src = url;
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load image at url ${url}`));
  });
}

function downloadAllImages(urls) {
  let imagePromises = urls.map(downloadImage);
  return Promise.all(imagePromises);
}

downloadAllImages(images)
  .then(images => {
    images.forEach(img => document.body.appendChild(img));
  })
  .catch(err => {
    console.error(err);
  });