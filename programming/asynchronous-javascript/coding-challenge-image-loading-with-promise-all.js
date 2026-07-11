// Browser-only: the DOM (image elements, document.querySelector) needs a
// real browser environment. Paste it into a browser console, or use the
// live editor on the matching blog post.

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

// Part 1: the post 16 slideshow, rebuilt with async/await instead of .then().
async function loadNPause() {
  try {
    let img = await createImage('https://picsum.photos/id/1027/400/300');
    console.log('Image 1 loaded');
    await wait(2);
    img.style.display = 'none';

    img = await createImage('https://picsum.photos/id/1028/400/300');
    console.log('Image 2 loaded');
    await wait(2);
    img.style.display = 'none';
  } catch (error) {
    console.error(`💥 ${error.message}`);
  }
}

loadNPause();

// Part 2: loadAll(imgArr), loading every image at once with .map() + Promise.all.
async function loadAll(imgArr) {
  try {
    // .map() with an async callback returns an array of Promises, not values,
    // since every async function returns a Promise regardless of what the
    // callback itself returns.
    const imgPromises = imgArr.map(async (path) => await createImage(path));
    const images = await Promise.all(imgPromises);

    images.forEach((img) => img.classList.add('parallel'));
  } catch (error) {
    console.error(`💥 ${error.message}`);
  }
}

loadAll([
  'https://picsum.photos/id/1015/200/150',
  'https://picsum.photos/id/1016/200/150',
  'https://picsum.photos/id/1018/200/150',
]);
