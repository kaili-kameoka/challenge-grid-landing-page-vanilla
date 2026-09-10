import './style.css'
import { createStatCard, statCards } from './components/stat-card.ts'

const app = document.querySelector<HTMLDivElement>('#app')!

const preview = document.createElement('div')
preview.className = 'stats-preview'
preview.append(...statCards.map(createStatCard))

app.append(preview)
