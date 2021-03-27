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

export const getLanguages = () => {
  return [
    {
      name: 'Arabic ',
      code: 'ar',
    },
    {
      name: 'Azerbaijani ',
      code: 'az',
    },
    {
      name: 'Belarusian ',
      code: 'be',
    },
    {
      name: 'Bulgarian ',
      code: 'bg',
    },
    {
      name: 'Bosnian ',
      code: 'bs',
    },
    {
      name: 'Czech ',
      code: 'cs',
    },
    {
      name: 'German ',
      code: 'de',
    },
    {
      name: 'Greek ',
      code: 'el',
    },
    {
      name: 'English',
      code: 'en',
    },
    {
      name: 'Spanish ',
      code: 'es',
    },
    {
      name: 'Estonian ',
      code: 'et',
    },
    {
      name: 'Persian ',
      code: 'fa',
    },
    {
      name: 'Finnish ',
      code: 'fi',
    },
    {
      name: 'French ',
      code: 'fr',
    },
    {
      name: 'Irish ',
      code: 'ga',
    },
    {
      name: 'Hebrew ',
      code: 'he',
    },
    {
      name: 'Hindi ',
      code: 'hi',
    },
    {
      name: 'Hungarian ',
      code: 'hu',
    },
    {
      name: 'Armenian ',
      code: 'hy',
    },
    {
      name: 'Indonesian ',
      code: 'id',
    },
    {
      name: 'Icelandic ',
      code: 'is',
    },
    {
      name: 'Italian ',
      code: 'it',
    },
    {
      name: 'Japanese ',
      code: 'ja',
    },
    {
      name: 'Georgian ',
      code: 'ka',
    },
    {
      name: 'Kazakh ',
      code: 'kk',
    },
    {
      name: 'Korean ',
      code: 'ko',
    },
    {
      name: 'Kurdish ',
      code: 'ku',
    },
    {
      name: 'Kyrgyz ',
      code: 'ky',
    },
    {
      name: 'Lithuanian ',
      code: 'lt',
    },
    {
      name: 'Latvian ',
      code: 'lv',
    },
    {
      name: 'Macedonian ',
      code: 'mk',
    },
    {
      name: 'Mongolian ',
      code: 'mn',
    },
    {
      name: 'Nepali ',
      code: 'ne',
    },
    {
      name: 'Norwegian ',
      code: 'no',
    },
    {
      name: 'Panjabi ',
      code: 'pa',
    },
    {
      name: 'Polish ',
      code: 'pl',
    },
    {
      name: 'Portuguese ',
      code: 'pt',
    },
    {
      name: 'Romanian ',
      code: 'ro',
    },
    {
      name: 'Russian ',
      code: 'ru',
    },
    {
      name: 'Slovak ',
      code: 'sk',
    },
    {
      name: 'Serbian ',
      code: 'sr',
    },
    {
      name: 'Swedish ',
      code: 'sv',
    },
    {
      name: 'Thai ',
      code: 'th',
    },
    {
      name: 'Turkmen ',
      code: 'tk',
    },
    {
      name: 'Turkish',
      code: 'tr',
    },
    {
      name: 'Ukrainian ',
      code: 'uk',
    },
    {
      name: 'Urdu ',
      code: 'ur',
    },
    {
      name: 'Uzbek ',
      code: 'uz',
    },
    {
      name: 'Vietnamese ',
      code: 'vi',
    },
    {
      name: 'Yiddish ',
      code: 'yi',
    },
    {
      name: 'Chinese ',
      code: 'zh',
    },
  ];
};

export const getSortBy = () => {
  return [
    {
      name: 'Point 10-0',
      value: 'vote_average.desc',
    },
    {
      name: 'Point 0-10',
      value: 'vote_average.asc',
    },
    {
      name: 'Newest to Oldest',
      value: 'release_date.desc',
    },
    {
      name: 'Oldest to Newest',
      value: 'release_date.asc',
    },
    {
      name: 'Name (Z to A)',
      value: 'original_title.desc',
    },
    {
      name: 'Name (A to Z)',
      value: 'original_title_asc',
    },
  ];
};

export const getPoints = () => {
  const points = [{ name: 'All Movies', value: 0 }];

  for (let i = 0; i < 10; i++) {
    const pointObj = {};
    pointObj.name = `Greater than   ${i}`;
    pointObj.value = i + 1;
    points.push(pointObj);
  }

  return points;
};

export const isMobile = () => {
  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  ) {
    return true;
  }

  return false;
};
