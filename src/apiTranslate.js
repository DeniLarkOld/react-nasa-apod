const API_KEY = "trnsl.1.1.20200312T092126Z.6180d5ea72f95270.67fe793f14678160d2fe57a742bc0c345aec2063";

export const translateText = async (text = 'hello') => {
  const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?lang=en-ru&key=${API_KEY}`;

  const data = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `text=${text}`
  }).then(response => response.text());

  const resultText = await JSON.parse(data).text[0];

  return resultText;
}