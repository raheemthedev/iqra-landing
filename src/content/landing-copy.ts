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
  body: 'Iqra is a small sprite that lives on your Mac desktop. It offers short Arabic checks when you want them, and opens a compact study space for Qur’an reading, your classes, Hadith and duʿāʾ.',
  facts: ['Sits above your other windows', 'Local progress, no account', 'Your schedule, your rules'],
}

export const features = {
  title: 'Everything you study, one small companion away',
  intro: 'Not another tab to remember. Iqra stays on your desktop and puts the next useful step within reach.',
  tiles: [
    { id: 'companion', icon: 'sparkle', wide: true, title: 'A companion that lives on your desktop', body: 'A movable sprite stays above your other windows. Its eyes follow your pointer, and it reacts when you answer a check. Click it to open your study space.' },
    { id: 'checks', icon: 'practice', title: 'Short Arabic checks', body: 'Reveal-first checks pop up on your schedule: every few minutes, every minute in fast mode, or off.' },
    { id: 'today', icon: 'today', title: 'A daily plan', body: 'One clear next step across your lesson, Qur’an reading and practice.' },
    { id: 'quran', icon: 'quran', wide: true, title: 'The Qur’an, by page', body: 'All 6,236 āyāt across 114 sūrahs in the standard 604-page layout, with translation, transliteration, bookmarks and word-by-word audio. Start recitation from any āyah.' },
    { id: 'classes', icon: 'learn', title: 'Classes and your own materials', body: 'Track Nurul Bayan lessons, keep private notes, and add your own PDFs, videos, audio and links.' },
    { id: 'hadith', icon: 'hadith', title: 'Hadith and duʿāʾ', body: 'Selected, source-linked Hadith readings and a small selection of Qur’anic duʿāʾ.' },
    { id: 'local', icon: 'lock', title: 'Progress stays yours', body: 'Saved on your device. Export a backup any time.' },
  ],
}

export const mac = {
  title: 'Built for the Mac desktop',
  intro: 'Iqra is a real desktop app, not a website in a tab. It behaves like something that lives on your Mac.',
  items: [
    { icon: 'pin', title: 'Stays above your other apps', body: 'Keep the sprite in view while you work, or tuck it away.' },
    { icon: 'move', title: 'Drag it anywhere', body: 'Place it where it suits you. Resize the sprite and the lesson text to taste.' },
    { icon: 'bell', title: 'Reminders and notifications', body: 'Morning, afternoon and evening reminders, with optional macOS notifications.' },
    { icon: 'power', title: 'Opens when you log in', body: 'Optional. Turn it on and Iqra is there when your day starts.' },
    { icon: 'chart', title: 'Quiet when you need it', body: 'Change lesson timing, use fast mode, or switch pop-up lessons off.' },
    { icon: 'lock', title: 'Local first', body: 'Your progress is stored on your Mac. Streamed recitation and online lessons still need internet.' },
  ],
}

export const download = {
  title: 'Get Iqra Companion for Mac',
  status: 'The macOS app is built and tested. The public download is being finalized.',
  steps: [
    { title: 'Download the disk image', body: 'One file, made for Mac.' },
    { title: 'Drag Iqra to Applications', body: 'The usual Mac install.' },
    { title: 'Open it and pick a starting point', body: 'Choose your level and goals. That’s the setup.' },
  ],
  requirements: 'Requirements and version details are published with each release.',
}

export const why = {
  title: 'Knowing what to study is one thing. Coming back is another.',
  body: 'A course playlist gets saved. A reading goal gets set. Then a busy day takes over. Iqra brings the next small step closer, so returning to your study takes less effort.',
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
  title: 'A familiar face. A gentle invitation to return.',
  lines: [
    'Iqra’s companion sits on your desktop and can be moved wherever suits you. Its eyes follow your pointer, and it reacts when you answer a check.',
    'It’s part of the experience, not the whole of it: the real value is the study space it opens.',
  ],
  note: 'Provisional illustration. Final character art is still to be confirmed.',
}

export const sources = {
  title: 'Keep the source close. Keep your progress local.',
  left: {
    title: 'Sources stay visible.',
    body: 'Qur’an and word-practice content are connected to their sources. Selected Hadith readings retain references and grading attribution. Personal resources remain clearly separate.',
  },
  right: {
    title: 'Your routine stays yours.',
    body: 'Iqra stores your progress locally without requiring an account. Export a backup when you need one. Online lessons and streamed recitation still connect to their respective providers.',
  },
  links: [
    { label: 'Quran Foundation', href: 'https://quran.foundation', what: 'QPC Hafs text, transliteration, and word-level content' },
    { label: 'Saheeh International', href: 'https://quran.com', what: 'English Qur’an translation' },
    { label: 'Quranic Arabic Corpus', href: 'https://corpus.quran.com', what: 'A smaller morphology-rich card set' },
    { label: 'Sunnah.com', href: 'https://sunnah.com', what: 'Selected Hadith references and grading attribution' },
  ],
  disclaimer: 'Iqra is a study aid. Learn recitation with a qualified teacher, and consult the linked sources for full context.',
}

export const routine = {
  title: 'Start with a routine you can return to.',
  body: 'An example, not a target: one lesson segment, a few āyāt, a short review. Do what fits the day.',
  items: [
    { label: 'Learn', text: 'One lesson segment' },
    { label: 'Read', text: 'A few āyāt' },
    { label: 'Practice', text: 'A short review' },
  ],
}

export const faq = [
  { q: 'Is Iqra a desktop app?', a: 'Yes. The current tested native build is for macOS. This website explains the product; it isn’t the desktop overlay itself.' },
  { q: 'Do I need an account?', a: 'No. Local study progress does not require one.' },
  { q: 'Does it work offline?', a: 'Bundled reading text and local progress are stored on your device. Online lessons, streamed recitation, and external source pages need internet access. Not every exercise’s audio is guaranteed offline.' },
  { q: 'Can I control the pop-up lessons?', a: 'Yes. Lesson timing is configurable, with a fast mode and options to disable or quiet lessons.' },
  { q: 'Can I use my own course or PDF?', a: 'Iqra accepts personal study resources, including supported local files and web links. They stay distinct from source-linked content.' },
  { q: 'Can recitation continue from the verse I choose?', a: 'In the current Qur’an reader, yes: it plays from the selected āyah to the end of that sūrah. It doesn’t continue automatically into the next sūrah, and streamed audio needs internet.' },
  { q: 'Does it include full Hadith collections?', a: 'Not currently. It offers a small selection of readings across six collection entries, with links to the full sources.' },
  { q: 'Does Iqra replace a teacher?', a: 'No. It supports practice and routine. Recitation and rulings should be learned with qualified instruction.' },
  { q: 'Is Windows available?', a: 'Not yet announced. Platform information will be confirmed with releases.' },
  { q: 'Is it free?', a: 'Pricing hasn’t been decided or announced yet.' },
]

export const finalCta = {
  title: 'Your next small step can be closer.',
  body: 'Make space for practice, reading, and the lesson you meant to return to.',
}
