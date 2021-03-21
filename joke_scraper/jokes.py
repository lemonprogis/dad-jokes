import requests, json


def jokes_from_payload(payload):
  return [{"q": joke['attributes']['field_joke_opener'], "a": joke['attributes']['field_joke_response']} for joke in payload['data']]


def get_joke_set(url, all_jokes):
  resp = requests.get(url)
  payload = resp.json()

  if 'next' not in payload['links']:
    return

  next_link = payload['links']['next']['href']
  print(next_link)
  jokes = jokes_from_payload(payload)
  all_jokes.extend(jokes)
  return get_joke_set(next_link, all_jokes)


if __name__ == '__main__':
  start_url = 'https://fatherhood.gov/jsonapi/node/dad_jokes'
  all_jokes = []
  get_joke_set(start_url, all_jokes)
  with open('jokes.json', 'w') as outfile:
    json.dump(all_jokes, outfile, indent=4)
