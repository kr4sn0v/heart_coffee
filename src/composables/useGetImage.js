const getImage = (id) => {
  let images = {
    1: '../../public/espresso.svg',
    2: '../../public/americano.svg',
    3: '../../public/filter.svg',
    4: '../../public/funnel.svg',
    5: '../../public/cappuccino.svg',
    6: '../../public/latte.svg',
    7: '../../public/flat-white.svg',
    8: '../../public/raf.svg',
    9: '../../public/cocoa.svg',
    10: '../../public/matcha-latte.svg',
    11: '../../public/ginger-tea.svg',
    12: '../../public/buckthorn-tea.svg',
    13: '../../public/black-tea.svg',
    14: '../../public/apple-tea.svg',
    15: '../../public/cedar-tea.svg',
    16: '../../public/milkshake.svg',
    default: '',
  }
  return images[id] || images['default']
}

export { getImage }
