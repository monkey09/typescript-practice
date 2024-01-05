const routes = <const T>(routes: T[]) => {
  const addRedirect = (from: T, to: T) => {}
  return {addRedirect}
}

const router = routes(['home', 'about'])

router.addRedirect('home', 'about')

