var imgs = [
  {
    title: 'Sunset in Linshan Cape',
    url: 'https://drscdn.500px.org/photo/76504199/q%3D80_m%3D1500/b619a2a3056849c06947a7276026ac57',
    likeCount: 1
  },
  {
    title: 'Forest',
    url: 'https://drscdn.500px.org/photo/128096629/q%3D80_m%3D1500/ce612981364c807d85aef6d992f79562',
    likeCount: 2
  },
  {
    title: 'Sunset in Linshan Cape',
    url: 'https://drscdn.500px.org/photo/76382207/q%3D80_m%3D1500/66b2adbf7cd365ff5992fecba16d08c0',
    likeCount: 3
  },
  {
    title: 'Waterfall',
    url: 'https://drscdn.500px.org/photo/105906235/q%3D80_m%3D1500/f3985bb10e439b5b42268b929d8dc8d9',
    likeCount: 4
  }
];

export default class CardGalleryController {
  constructor() {
    this.likeCount = 0;
    this.imgs = imgs;
    
  }

  like(img) {
    img.likeCount++;
  }
}