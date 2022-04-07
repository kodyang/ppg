## Refreshing image catalogue
refresh the "db" using python 3.8.12
```
cd ppg/public
instaloader --filename-pattern={date_utc}_{shortcode} --login=kodyyyang --fast-update pandemicpregnancyguide

cd ppg/scripts
python3.8 parse.py
```

Not done automatically on a virtual machine to eliminate need for a dedicated server to keep costs low 😢
