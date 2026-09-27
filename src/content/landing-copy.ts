export const nav = [
  { label: 'How it works', href: '#how' },
  { label: 'Inside Iqra', href: '#inside' },
  { label: 'Sources & privacy', href: '#sources' },
  { label: 'FAQ', href: '#faq' },
]

export const hero = {
  eyebrow: 'A companion for your daily study',
  title: ['Make a little room for learning.', 'Every day.'],
  body: 'Bring Arabic practice, Qur’an reading, and your next lesson into a calmer routine—with a small companion beside you on your desktop.',
  support: 'Local progress. No account required.',
  strip: ['Desktop companion', 'Short Arabic checks', 'Qur’an page reading', 'Local progress'],
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
