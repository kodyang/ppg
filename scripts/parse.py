from os import listdir
from os.path import isfile, join
from collections import namedtuple, defaultdict
from datetime import datetime
import json

POSTS_RELATIVE_PATH = '../pandemicpregnancyguide'

def parse_file_name(fname):
  '''
  Takes the file name and returns the date and 
  '''
  date, *ftype = fname.split('.')
  if len(ftype) != 1:
    return None, None, None
  number = 0
  if date[-1].isnumeric():
    number = int(date.split('_')[-1])
    date = '_'.join(date.split('_')[:-1])

  try:
    date = datetime.strptime(date, "%Y-%m-%d_%H-%M-%S_%Z")
  except Exception as e:
    print(f"{fname} has error {e}")
  return date, ftype[0], number

if __name__ == '__main__':
  onlyfiles = [f for f in listdir(POSTS_RELATIVE_PATH) if isfile(join(POSTS_RELATIVE_PATH, f))]

  '''
  {
    "date": dt,
    "caption": str,
    "tags": str[],
    "pictures": str[],
  }
  '''

  dates = defaultdict(list)
  '''
  [date]: (index, filepath, type)
  '''
  for f in onlyfiles:
    d, t, n = parse_file_name(f)
    if not (d and t and n != None):
      continue
    dates[d].append((n, f, t))

  posts = []
  # pictures = [] # (index, filepath)[]
  for key, values in dates.items():
    post = {"date": key, "pictures": []}
    for value in values:
      if value[2] == 'txt':
        with open(join(POSTS_RELATIVE_PATH, value[1])) as f:
          caption = f.read()
          post["caption"] = caption
          post["tags"] = list({t.strip("#") for t in caption.split() if t.startswith('#')})
      elif value[2] == 'jpg':
        post["pictures"].append((value[0], value[1]))
    post["pictures"].sort()
    posts.append(post)

  with open("posts.json", 'w') as f:
    f.write(json.dumps(posts, indent=4, default=str))