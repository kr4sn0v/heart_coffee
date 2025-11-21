const getHeader = (route) => {
  let headers = {
    'sign-in': ['Рады вас', 'видеть ^-^'],
    'sign-up': ['Давайте', 'дружить ;)'],
    cart: ['Корзина'],
    'documents/terms': ['Условия использования', 'сервиса HEART COFFEE'],
    'documents/processing': ['Условия обработки', 'персональных данных'],
    'documents/promo': ['Условия проведения', 'акции'],
    default: '',
  }
  return headers[route] || headers['default']
}

export { getHeader }
