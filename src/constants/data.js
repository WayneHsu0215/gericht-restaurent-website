import images from './images';

const soup = [
  {
    title: '三鮮豚骨',
    price: '$30',
    tags: 'Sansen Tonkotsu',
  },
  {
    title: '牛奶起司',
    price: '$45',
    tags: 'Milk cheese',
  },
  {
    title: '半斤蛤蠣',
    price: '$60',
    tags: 'Half a pound of clams',
  },
  {
    title: '酸菜魚',
    price: '$50',
    tags: 'Pickled Fish',
  },
  {
    title: '泰式冬蔭功',
    price: '$50',
    tags: 'Thai Tom Yum Kung',
  },
];

const hotpot = [
  {
    title: '五花牛肉鍋',
    price: '$190',
    tags: 'Pork belly beef hotpot',
  },
  {
    title: "拾吾雞肉鍋",
    price: '$210',
    tags: 'Shiwu Chicken Pot',
  },
  {
    title: '拾吾鯛魚鍋',
    price: '$200',
    tags: 'Shiwu sea bream hotpot',
  },
  {
    title: '深海草蝦鍋',
    price: '$230',
    tags: 'Deep sea grass shrimp pot',
  },
  {
    title: '肉肉雙拼\n（4選2）',
    price: '$220',
    tags: 'Meat and pork double combo',
  },
  {
    title: '海陸雙拼\n（6選2）',
    price: '$250',
    tags: 'Sea and land combination',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Fully Hygenic',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { soup, hotpot, awards };
