/**
 * Small, hand-checked fixtures for the website demo only. They are not the app's
 * dataset. Verify against the sources named in each note before publishing changes.
 */
export interface Ayah {
  n: number
  ar: string
  tr: string
  en: string
}

// Al-Fātiḥah 1:1–7. Translation: Saheeh International.
export const fatihah: Ayah[] = [
  { n: 1, ar: 'بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ', tr: 'Bismi l-lāhi r-raḥmāni r-raḥīm', en: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.' },
  { n: 2, ar: 'ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ', tr: 'Al-ḥamdu lillāhi rabbi l-ʿālamīn', en: '[All] praise is [due] to Allah, Lord of the worlds -' },
  { n: 3, ar: 'ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ', tr: 'Ar-raḥmāni r-raḥīm', en: 'The Entirely Merciful, the Especially Merciful,' },
  { n: 4, ar: 'مَـٰلِكِ يَوْمِ ٱلدِّينِ', tr: 'Māliki yawmi d-dīn', en: 'Sovereign of the Day of Recompense.' },
  { n: 5, ar: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ', tr: 'Iyyāka naʿbudu wa iyyāka nastaʿīn', en: 'It is You we worship and You we ask for help.' },
  { n: 6, ar: 'ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ', tr: 'Ihdinā ṣ-ṣirāṭa l-mustaqīm', en: 'Guide us to the straight path -' },
  { n: 7, ar: 'صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ', tr: 'Ṣirāṭa lladhīna anʿamta ʿalayhim ghayri l-maghḍūbi ʿalayhim wa lā ḍ-ḍāllīn', en: 'The path of those upon whom You have bestowed favor, not of those who have earned [Your] anger or of those who are astray.' },
]

// Practice example: the word "rabbi" (Lord) from Al-Fātiḥah 1:2.
export const practiceWord = { ar: 'رَبِّ', context: 'Al-Fātiḥah 1:2', answer: 'Lord' }

export const hadithCollections = [
  { name: 'Bukhari', href: 'https://sunnah.com/bukhari' },
  { name: 'Muslim', href: 'https://sunnah.com/muslim' },
  { name: 'Abi Dawud', href: 'https://sunnah.com/abudawud' },
  { name: 'Tirmidhi', href: 'https://sunnah.com/tirmidhi' },
  { name: 'Nasaʾi', href: 'https://sunnah.com/nasai' },
  { name: 'Ibn Majah', href: 'https://sunnah.com/ibnmajah' },
]

// Sahih al-Bukhari 1: matn excerpt only.
export const hadithExample = {
  ar: 'إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ',
  en: 'Deeds are judged by intentions.',
  ref: 'Sahih al-Bukhari 1',
  href: 'https://sunnah.com/bukhari:1',
}

// Qur’an 2:201, Saheeh International.
export const duaExample = {
  ar: 'رَبَّنَآ ءَاتِنَا فِى ٱلدُّنْيَا حَسَنَةً وَفِى ٱلْـَٔاخِرَةِ حَسَنَةً وَقِنَا عَذَابَ ٱلنَّارِ',
  en: 'Our Lord, give us in this world [that which is] good and in the next world [that which is] good and protect us from the punishment of the Fire.',
  ref: 'Qur’an 2:201',
  href: 'https://quran.com/2/201',
}
