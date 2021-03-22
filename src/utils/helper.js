export const getLanguage = (code) => {
  switch (code) {
    case 'en':
      return 'English';
    case 'tr':
      return 'Turkish';
    case 'az':
      return 'Azerbaijani';
    case 'ar':
      return 'Arabic';
    case 'es':
      return 'Spanish';
    case 'ja':
      return 'Japanese';
    case 'cs':
      return 'Czech';
    case 'bg':
      return 'Bulgarian';
    case 'bs':
      return 'Bosnian';
    case 'be':
      return 'Belarusian';
    case 'et':
      return 'Estonian';
    case 'fi':
      return 'Finnish';
    case 'fr':
      return 'French';
    case 'he':
      return 'Hebrew';
    case 'hu':
      return 'Hungarian';
    case 'de':
      return 'German';
    case 'el':
      return 'Greek';
    case 'is':
      return 'Icelandic';
    case 'it':
      return 'Italian';
    case 'id':
      return 'Indonesian';
    case 'hi':
      return 'Hindi';
    case 'mn':
      return 'Mongolian';
    case 'mk':
      return 'Macedonian';
    case 'no':
      return 'Norwegian';
    case 'ne':
      return 'Nepali';
    case 'ru':
      return 'Russian';
    case 'th':
      return 'Thai';
    case 'tk':
      return 'Turkmen';
    case 'uk':
      return 'Ukrainian';
    case 'fa':
      return 'Persian';
    case 'ko':
      return 'Korean';
    case 'ga':
      return 'Irish';
    case 'pa':
      return 'Panjabi';
    case 'pl':
      return 'Polish';
    case 'pt':
      return 'Portuguese';
    case 'ka':
      return 'Georgian';
    case 'ku':
      return 'Kurdish';
    case 'ky':
      return 'Kyrgyz';
    case 'kk':
      return 'Kazakh';
    case 'lv':
      return 'Latvian';
    case 'lt':
      return 'Lithuanian';
    case 'ro':
      return 'Romanian';
    case 'sr':
      return 'Serbian';
    case 'sv':
      return 'Swedish';
    case 'sk':
      return 'Slovak';
    case 'hy':
      return 'Armenian';
    case 'ur':
      return 'Urdu';
    case 'uz':
      return 'Uzbek';
    case 'vi':
      return 'Vietnamese';
    case 'yi':
      return 'Yiddish';
    case 'zh':
      return 'Chinese';

    default:
      return code;
  }
};

export const createDates = (start) => {
  const today = new Date();
  const currentYear = parseInt(today.getFullYear());
  const dates = [];

  for (let i = start; i < currentYear + 1; i++) {
    const datesObj = {};
    datesObj.id = `year-${i}`;
    datesObj.value = parseInt(i);
    datesObj.text = i.toString();
    dates.push(datesObj);
  }

  return dates;
};

export const getLanguages = () => {};
