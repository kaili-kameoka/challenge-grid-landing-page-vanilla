import './style.css'

const toggle = document.querySelector<HTMLButtonElement>('.navbar__toggle')
const panel = document.querySelector<HTMLElement>('.navbar__panel')
const scrim = document.querySelector<HTMLElement>('.navbar__scrim')

if (toggle && panel) {
  const setOpen = (open: boolean) => {
    toggle.setAttribute('aria-expanded', String(open))
    panel.classList.toggle('navbar__panel--open', open)
    scrim?.classList.toggle('navbar__scrim--open', open)
    document.body.classList.toggle('is-scroll-locked', open)
  }

  const isOpen = () => toggle.getAttribute('aria-expanded') === 'true'

  toggle.addEventListener('click', () => setOpen(!isOpen()))

  scrim?.addEventListener('click', () => setOpen(false))

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isOpen()) {
      setOpen(false)
      toggle.focus()
    }
  })
}
