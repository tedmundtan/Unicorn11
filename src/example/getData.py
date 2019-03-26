import requests
import json
import datetime 
url = "http://api-gateway-dbs-techtrek.ap-southeast-1.elasticbeanstalk.com/transactions/10"

querystring = {"from":"01-01-2019","to":"01-31-2019"}

payload = ""
headers = {
    'identity': "Group11",
    'token': "bf38d9ac-fade-40ef-b7d2-eabdb183acce",
    'cache-control': "no-cache",
    'Postman-Token': "7cd5530c-91e6-4038-86cb-6ccb857a2d4b"
    }

response = requests.request("GET", url, data=payload, headers=headers, params=querystring)

json_data = response.text
python_obj = json.loads(json_data)
item_dict = {} 

for trans in python_obj:
    if trans['tag'] not in item_dict:
        item_dict[trans['tag']] = float(trans['amount'])
    else:
        item_dict[trans['tag']] += float(trans['amount'])
total = 0
for cat, amount in item_dict.items():
    total += amount

final = {} 
for cat, amount in item_dict.items():
    final[cat] = round(amount/total,2) * 100
print(final)

