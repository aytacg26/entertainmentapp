export const getLanguage = (code) => {
  switch (code) {
    case 'en':
      return 'English';
    case 'tr':
      return 'Turkish';
    case 'az':
      return 'Azerbaijani';
    case 'es':
      return 'Spanish';
    case 'ja':
      return 'Japanese';
    case 'fr':
      return 'French';
    case 'et':
      return 'Estonian';
    case 'fi':
      return 'Finnish';
    case 'de':
      return 'German';
    case 'el':
      return 'Greek';
    case 'hi':
      return 'Hindi';
    case 'no':
      return 'Norwegian';
    case 'ru':
      return 'Russian';
    case 'th':
      return 'Thai';
    case 'uk':
      return 'Ukrainian';
    case 'fa':
      return 'Persian';
    case 'ko':
      return 'Korean';
    case 'it':
      return 'Italian';
    case 'ga':
      return 'Irish';
    case 'pl':
      return 'Polish';
    case 'ro':
      return 'Romanian';
    case 'sr':
      return 'Serbian';
    case 'hy':
      return 'Armenian';

    default:
      return code;
  }
};
