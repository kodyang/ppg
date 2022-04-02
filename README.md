## Screenshot
![image](https://user-images.githubusercontent.com/19780117/161340442-5c4d9ef8-8886-4731-89d2-313ca4702725.png)

using python 3.8.12

## Refreshing image catalogue
refresh the "db"
```
instaloader --login=kodyyyang --fast-update pandemicpregnancyguide

cd ppg/public
instaloader --filename-pattern={date_utc}_{shortcode} --login=kodyyyang --fast-update pandemicpregnancyguide
python3.8 parse.py
```

Designed by Kellie Kim, 2t25 uToronto MD
