export const nav = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how' },
  { label: 'Inside Iqra', href: '#inside' },
  { label: 'Privacy', href: '#sources' },
  { label: 'FAQ', href: '#faq' },
]

export const hero = {
  pill: 'A study companion for your Mac desktop',
  title: ['Make a little room for learning.', 'Every day.'],
  body: 'A little desktop companion for Arabic, Qur’an, and the lessons you keep meaning to revisit.',
  facts: ['Sits above your other windows', 'Local progress, no account', 'Your schedule, your rules'],
}

export const features = {
  title: 'One small companion. Everything you study.',
  intro: 'No forgotten tabs. Your next lesson, reading session, or Arabic check stays within reach.',
  tiles: [
    { id: 'companion', icon: 'sparkle', title: 'A companion on your desktop', body: 'Drag your owl anywhere. It follows your pointer and reacts as you learn.', tags: ['Above your windows', 'Drag anywhere'] },
    { id: 'checks', icon: 'practice', title: 'Short Arabic checks', body: 'Reveal answers, rate your recall, and revisit words when they’re due. Always on your terms.', tags: ['Your schedule', 'Fast mode', 'Off switch'] },
    { id: 'today', icon: 'today', title: 'A daily plan', body: 'One clear next step across your lesson, your reading and your practice.', tags: ['Lesson', 'Read', 'Practice'] },
    { id: 'quran', icon: 'quran', title: 'The Qur’an, by page', body: 'Find a surah, read with translation, and hear recitation. Keep your place with bookmarks.', tags: ['6,236 āyāt', '114 sūrahs', '604 pages'] },
    { id: 'classes', icon: 'learn', title: 'Classes and your own materials', body: 'Follow Nurul Bayan, save private notes, and bring your own files and course links.', tags: ['Lesson notes', 'Your files'] },
    { id: 'hadith', icon: 'hadith', title: 'Hadith and duʿāʾ', body: 'Explore selected Hadith from six collections and Qur’anic duʿāʾ, with sources always close.', tags: ['Source-linked', 'Six collections'] },
  ],
}

export const mac = {
  title: 'Built for the Mac desktop',
  intro: 'A native companion that lives alongside your work, not another website to keep open.',
  items: [
    { icon: 'pin', title: 'Stays above your other apps', body: 'Keep the sprite in view while you work, or tuck it away.' },
    { icon: 'move', title: 'Drag it anywhere', body: 'Choose its spot, resize your owl, and adjust lesson text to suit you.' },
    { icon: 'bell', title: 'Reminders and notifications', body: 'Morning, afternoon and evening reminders, with optional macOS notifications.' },
    { icon: 'power', title: 'Opens when you log in', body: 'Optional. Turn it on and Iqra is there when your day starts.' },
    { icon: 'chart', title: 'Quiet when you need it', body: 'Change lesson timing, use fast mode, or switch pop-up lessons off.' },
    { icon: 'lock', title: 'Local first', body: 'Progress stays on your Mac. Online lessons and streamed audio need internet.' },
  ],
}

export const download = {
  title: 'Get Iqra Companion for Mac',
  status: 'The Mac app is built. We’re preparing the public download.',
  steps: [
    { title: 'Download the disk image', body: 'One file, made for Mac.' },
    { title: 'Drag Iqra to Applications', body: 'The usual Mac install.' },
    { title: 'Open it and pick a starting point', body: 'Choose your level and goals. That’s the setup.' },
  ],
  requirements: 'Requirements and version details are published with each release.',
}

export const why = {
  title: 'Life gets busy. Come back a little easier.',
  body: 'Saved courses and reading goals get buried. Iqra keeps your next small step nearby.',
  points: [
    'Fewer scattered materials',
    'A clear next action',
    'Room for short sessions and longer reading',
  ],
}

export const steps = [
  { title: 'Choose your starting point', body: 'Set your level and the study goals that matter to you.' },
  { title: 'Take the next small step', body: 'Open today’s plan or answer a short Arabic check.' },
  { title: 'Return and build on it', body: 'Keep your lesson notes, reading place, and review progress nearby.' },
]

export const companion = {
  title: 'A little owl. A reason to return.',
  lines: [
    'Move your companion anywhere. Its eyes follow your pointer; it reacts as you learn.',
    'Behind that little face: your lessons, reading, and practice, ready when you are.',
  ],
  note: 'Provisional illustration. Final character art is still to be confirmed.',
}

export const sources = {
  title: 'Keep the source close. Keep your progress local.',
  left: {
    title: 'Sources stay visible.',
    body: 'Qur’an and Hadith references stay visible. Your personal materials remain separate from source-linked readings.',
  },
  right: {
    title: 'Your routine stays yours.',
    body: 'No account needed. Progress stays on your Mac, with backups you can export.',
  },
  links: [
    { label: 'Quran Foundation', href: 'https://quran.foundation', what: 'QPC Hafs text, transliteration, and word-level content' },
    { label: 'Saheeh International', href: 'https://quran.com', what: 'English Qur’an translation' },
    { label: 'Quranic Arabic Corpus', href: 'https://corpus.quran.com', what: 'A smaller morphology-rich card set' },
    { label: 'Sunnah.com', href: 'https://sunnah.com', what: 'Selected Hadith references and grading attribution' },
  ],
  disclaimer: 'A study aid, not a teacher. Learn recitation with qualified guidance; check sources for context.',
}

export const routine = {
  title: 'Start with a routine you can return to.',
  body: 'One lesson, a few āyāt, a short review. An invitation, not a daily quota.',
  items: [
    { label: 'Learn', text: 'One lesson segment' },
    { label: 'Read', text: 'A few āyāt' },
    { label: 'Practice', text: 'A short review' },
  ],
}

export const faq = [
  { q: 'Is Iqra a desktop app?', a: 'Yes. Iqra runs natively on macOS. This website introduces it; the companion lives on your desktop.' },
  { q: 'Do I need an account?', a: 'No. Local study progress does not require one.' },
  { q: 'Does it work offline?', a: 'Bundled text and progress work offline. Online lessons, streamed recitation, and source links need internet; exercise audio may too.' },
  { q: 'Can I control the pop-up lessons?', a: 'Yes. Choose your timing, try fast mode, or turn pop-up lessons off whenever you like.' },
  { q: 'Can I use my own course or PDF?', a: 'Yes. Add supported files and course links. Personal materials stay separate from source-linked content.' },
  { q: 'Can recitation continue from the verse I choose?', a: 'Yes. Start at any āyah and listen through that surah’s end. Playback needs internet and stops before the next surah.' },
  { q: 'Does it include full Hadith collections?', a: 'Not yet. Browse selected readings from six collections, with links to their full sources.' },
  { q: 'Does Iqra replace a teacher?', a: 'No. Iqra supports your practice. Learn recitation and rulings with qualified instruction.' },
  { q: 'Is Windows available?', a: 'Not yet announced. Platform information will be confirmed with releases.' },
  { q: 'Is it free?', a: 'Pricing hasn’t been decided or announced yet.' },
]

export const finalCta = {
  title: 'Your next small step can be closer.',
  body: 'Make space for practice, reading, and the lesson you meant to return to.',
}
