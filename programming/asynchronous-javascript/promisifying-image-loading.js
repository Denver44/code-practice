// Browser-only: needs a real DOM with a `.images` container element.

function createImage(imagePath) {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.src = imagePath;
    img.style.maxWidth = '100%';

    img.addEventListener('load', () => {
      document.querySelector('.images').append(img);
      resolve(img);
    });

    img.addEventListener('error', () => {
      reject(new Error('Image not found'));
    });
  });
}

function wait(seconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
}

let currentImg;

createImage('https://picsum.photos/id/1015/400/300')
  .then((img) => {
    currentImg = img;
    console.log('Image 1 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('https://picsum.photos/id/1016/400/300');
  })
  .then((img) => {
    currentImg = img;
    console.log('Image 2 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch((error) => console.error(error.message));
