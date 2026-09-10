import './style.css'

const toggle = document.querySelector<HTMLButtonElement>('.navbar__toggle')
const panel = document.querySelector<HTMLElement>('.navbar__panel')

if (toggle && panel) {
  const setOpen = (open: boolean) => {
    toggle.setAttribute('aria-expanded', String(open))
    panel.classList.toggle('navbar__panel--open', open)
  }

  toggle.addEventListener('click', () => {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true')
  })

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false)
      toggle.focus()
    }
  })
}
