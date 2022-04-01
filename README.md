using python 3.8.12

## Refreshing image catalogue
refresh the "db"
```
instaloader --login=kodyyyang --fast-update pandemicpregnancyguide

cd ppg/src
instaloader --filename-pattern={date_utc}_{shortcode} --login=kodyyyang --fast-update pandemicpregnancyguide
python3.8 parse.py
```

Designed by Kellie Kim, 2t25 uToronto MD
