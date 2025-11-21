const getImage = (id) => {
  let images = {
    1: '../../public/svg/espresso.svg',
    2: '../../public/svg/americano.svg',
    3: '../../public/svg/filter.svg',
    4: '../../public/svg/funnel.svg',
    5: '../../public/svg/cappuccino.svg',
    6: '../../public/svg/latte.svg',
    7: '../../public/svg/flat-white.svg',
    8: '../../public/svg/raf.svg',
    9: '../../public/svg/cocoa.svg',
    10: '../../public/svg/matcha-latte.svg',
    11: '../../public/svg/ginger-tea.svg',
    12: '../../public/svg/buckthorn-tea.svg',
    13: '../../public/svg/black-tea.svg',
    14: '../../public/svg/apple-tea.svg',
    15: '../../public/svg/cedar-tea.svg',
    16: '../../public/svg/milkshake.svg',
    default: '',
  }
  return images[id] || images['default']
}

export { getImage }
