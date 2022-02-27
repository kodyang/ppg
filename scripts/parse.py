from os import listdir
from os.path import isfile, join
from collections import namedtuple, defaultdict
from datetime import datetime
import json

# POSTS_RELATIVE_PATH = '../pandemicpregnancyguide'
POSTS_RELATIVE_PATH = '../src/pandemicpregnancyguide'

def parse_file_name(fname):
  '''
  Takes the file name and returns
  (date as datetime, shortcode, file ending, picture number)
  '''
  # 2022-02-17_21-43-24_CaGAtrKJhbu_2.jpg
  # date = 2022-02-17_21-43-24_CaGAtrKJhbu_2
  # date[:19]                 _ date[20:31] _ date[32]
  date, *ftype = fname.split('.')
  if len(ftype) != 1 or len(date) < 30:
    # ignore .json.xz files and non-
    return None, None, None
  
  number = 0
  shortcode = date[20:31]

  if len(date) > 31:
    try:
      number = int(date[32:])
    except Exception as e:
      print(f"{fname} threw error: {e}")
      return None, None, None
    date = date[:19]

  try:
    date = datetime.strptime(date, "%Y-%m-%d_%H-%M-%S")
  except Exception as e:
    print(f"{fname} threw error: {e}")
    return None, None, None
  return date, shortcode, ftype[0], number

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
    d, shortcode, t, n = parse_file_name(f)
    if not (d and shortcode and t and n != None):
      continue
    dates[d].append((n, f, t, shortcode))

  posts = []
  # pictures = [] # (index, filepath)[]
  for ind, (key, values) in enumerate(dates.items()):
    post = {"date": key, "pictures": []}
    for value in values:
      if value[2] == 'txt':
        with open(join(POSTS_RELATIVE_PATH, value[1])) as f:
          caption = f.read()
          post["caption"] = caption
          post["tags"] = ', '.join(list({t.strip("#") for t in caption.split() if t.startswith('#')}))
          post["shortcode"] = p[3]
      elif value[2] == 'jpg':
        post["pictures"].append((value[0], value[1]))
    post["pictures"].sort()
    post["pictures"] = [p[1] for p in post["pictures"]]
    post["id"] = ind
    posts.append(post)

  with open("../src/posts.json", 'w+') as f:
    f.write(json.dumps(posts, indent=4, default=str))