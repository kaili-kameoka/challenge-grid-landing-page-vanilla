import './stat-card.css'

import iconGraduation from '../assets/icons/stat-graduation.svg'
import iconSchools from '../assets/icons/stat-schools.svg'
import iconStudents from '../assets/icons/stat-students.svg'
import iconTeachers from '../assets/icons/stat-teachers.svg'

/** Level for the card's title, so callers control document outline. */
export type StatCardHeadingLevel = 2 | 3 | 4

export interface StatCardOptions {
  /** URL of the 32x32 icon shown top-left. Decorative. */
  icon: string
  /** Headline figure shown top-right, e.g. "2.4M". */
  value: string
  /** What the figure counts, e.g. "Students reached". */
  title: string
  /** Supporting line beneath the title. */
  detail: string
  /** Renders the highlighted state that hover also produces. */
  active?: boolean
  headingLevel?: StatCardHeadingLevel
}

export function createStatCard(options: StatCardOptions): HTMLElement {
  const { icon, value, title, detail, active = false, headingLevel = 2 } = options

  const card = document.createElement('article')
  card.className = active ? 'stat-card stat-card--active' : 'stat-card'

  const icon_ = document.createElement('img')
  icon_.className = 'stat-card__icon'
  icon_.src = icon
  icon_.alt = ''
  icon_.width = 32
  icon_.height = 32

  const valueEl = document.createElement('p')
  valueEl.className = 'stat-card__value'
  valueEl.textContent = value

  const header = document.createElement('div')
  header.className = 'stat-card__header'
  header.append(icon_, valueEl)

  const titleEl = document.createElement(`h${headingLevel}`)
  titleEl.className = 'stat-card__title'
  titleEl.textContent = title

  const detailEl = document.createElement('p')
  detailEl.className = 'stat-card__detail'
  detailEl.textContent = detail

  const description = document.createElement('div')
  description.className = 'stat-card__description'
  description.append(titleEl, detailEl)

  card.append(header, description)
  return card
}

/** The four stats as authored in the design. */
export const statCards: readonly StatCardOptions[] = [
  {
    icon: iconStudents,
    value: '2.4M',
    title: 'Students reached',
    detail: 'Across 31 countries since 2011.',
  },
  {
    icon: iconSchools,
    value: '1,284',
    title: 'Schools partnered',
    detail: 'In 14 countries, from Kenya to Guatemala.',
  },
  {
    icon: iconTeachers,
    value: '38K',
    title: 'Teachers trained',
    detail: 'Equipped with modern tools and methodology.',
  },
  {
    icon: iconGraduation,
    value: '3.1×',
    title: 'Graduation lift',
    detail: 'Partner schools outperform national averages 3x.',
  },
]
