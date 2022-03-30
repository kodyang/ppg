using python 3.8.12

`source venv/bin/activate`

## Refreshing image catalogue
refresh the "db"
```
instaloader --login=kodyyyang --fast-update pandemicpregnancyguide

cd ppg/public
instaloader --filename-pattern={date_utc}_{shortcode} --login=kodyyyang --fast-update pandemicpregnancyguide
python3.8 parse.py
```