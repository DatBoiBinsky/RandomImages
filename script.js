const links = [
  'https://i.pinimg.com/474x/0a/87/d5/0a87d5c01fb10d29fda75f9b11ee446b.jpg',
  'https://i.pinimg.com/474x/57/b0/b8/57b0b8a328d52f2bebbbe6fc6386769e.jpg',
  'https://i.pinimg.com/474x/13/71/33/1371333f0457f751b6caea732684b807.jpg',
  'https://i.pinimg.com/474x/cc/da/7b/ccda7b0e996ddba0b92f2c8fe4c0baf6.jpg',
  'https://i.pinimg.com/474x/3b/5e/03/3b5e033583b0bfb659448a9e285a102c.jpg',
  'https://i.pinimg.com/474x/6a/e3/6f/6ae36f15c8de9b0c2f4b914033559ae4.jpg',
  'https://i.pinimg.com/474x/9d/53/ac/9d53acd18472b16c82d54a371f68c96c.jpg',
  'https://i.pinimg.com/474x/9a/6f/95/9a6f95c469984bedcfcc248f3b38f98f.jpg',
  'https://i.pinimg.com/474x/4d/d1/c4/4dd1c46c39bf8d59ad7b6c7735cbd6cb.jpg',
  'https://i.pinimg.com/474x/45/b7/35/45b735360b442344fc2f36b34871842d.jpg',
  'https://i.pinimg.com/474x/d9/91/48/d991482d5058bcf22869914bdc7a4224.jpg',
  'https://i.pinimg.com/474x/fd/f8/a6/fdf8a66eb76db607cff4d3edaf77bb5f.jpg',
  'https://i.pinimg.com/474x/56/59/ed/5659ed3f470a462aa954a2d7df6393b4.jpg',
  'https://i.pinimg.com/474x/31/a4/a8/31a4a8096785bf413257de917bc3104f.jpg',
  'https://i.pinimg.com/474x/ff/ab/d0/ffabd0c51078fdd3abfb07a0aa237b56.jpg',
  'https://i.pinimg.com/474x/59/54/0c/59540c177fd40051b35608ad40ccafe3.jpg',
  'https://i.pinimg.com/474x/e2/ed/eb/e2edeb1fa0c6289820b1bb29ad27355b.jpg',
  'https://i.pinimg.com/474x/10/7b/89/107b89ad808f02b49adccf3558a14399.jpg',
  'https://i.pinimg.com/474x/70/dc/f5/70dcf5baf62fc9df57f97b877b4162af.jpg',
  'https://i.pinimg.com/474x/6c/f0/ee/6cf0ee1d308e34206a64015d4a7da03a.jpg',
  'https://i.pinimg.com/474x/e8/06/30/e806309882fcfb3b41fcf143da607baa.jpg',
  'https://i.pinimg.com/474x/de/99/48/de99484650d3668bd6f0f60fb18c8fe2.jpg',
  'https://i.pinimg.com/474x/58/1f/15/581f15978c681dea5ed91303c14e6dff.jpg',
  'https://i.pinimg.com/474x/d3/7c/d2/d37cd224bff3569428026b689a655520.jpg',
  'https://i.pinimg.com/474x/f3/5c/d8/f35cd8fa9805f23396ac2334ced9e395.jpg',
  'https://i.pinimg.com/474x/6c/3b/cd/6c3bcd33ada7ffc5771b22b5fae23a58.jpg',
  'https://i.pinimg.com/474x/b2/9a/91/b29a91dbb0d3646f14ce02025cd8f328.jpg',
  'https://i.pinimg.com/474x/f6/1f/41/f61f4130cf28069a7b27f4f8bfe28bb0.jpg',
  'https://i.pinimg.com/474x/75/1c/c5/751cc560b13d9cb58aab28c9959c3980.jpg',
  'https://i.pinimg.com/474x/2d/c6/d5/2dc6d5e9f3877ca0d2b4238a6ebf4290.jpg',
  'https://i.pinimg.com/474x/cd/f8/3c/cdf83c409a4bb1a76fcdea9a55b3d2f2.jpg',
  'https://i.pinimg.com/474x/42/be/c8/42bec8673424b01babeae7578ca73b3c.jpg',
  'https://i.pinimg.com/474x/fd/70/a8/fd70a825c9d428879fee2b87e26b769c.jpg',
  'https://i.pinimg.com/474x/7b/c6/7a/7bc67afce57d04726d1e3f2d64f9962f.jpg',
  'https://i.pinimg.com/474x/bc/43/c7/bc43c7bfc7aa63f188c899b421e1dd66.jpg',
  'https://i.pinimg.com/736x/bd/a2/ff/bda2ffabf20afe7f22d0e0ad7aa2366f.jpg',
  'https://i.pinimg.com/474x/4d/8c/b4/4d8cb4b42cd34f1dea2cd508faf579ef.jpg',
  'https://i.pinimg.com/474x/f6/eb/68/f6eb68e877785883e0abe046f8a425fa.jpg',
];

const linksContainer = document.getElementById('links');
links.forEach((link, index) => {
  const linkElement = document.createElement('a');
  linkElement.href = link;
  linkElement.textContent = `Image ${index + 1}`;
  linksContainer.appendChild(linkElement);
});

const generateBtn = document.getElementById('generate-btn');
const randomImage = document.getElementById('random-image');

generateBtn.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * links.length);
  const randomImageUrl = links[randomIndex];
  randomImage.src = randomImageUrl;
});