import requests
from flask import jsonify

def setIVR(mobilenumber):

    user = 'paretohealthcare'
    url = "http://voiceapi.smscountry.com/api"
    api_key = "1AhH8esDzYiyGb6pFJE2"
    access_key="wUffJXBzn5nZci8Z91vbdwMCCVngwW8V9iZyVBb5"
    message = """Hello Mister Hosam. Good Morning! We are from Awazen Clinic.
    You have an appointment booked at 10:30 AM tomorrow with Doctor Sameer.
    Please press 1 to confirm, 2 to cancel. Please enter your choice followed by # key"""
    xml = f"""api_key={api_key}&access_key={access_key}&xml=<request action='http://13.126.123.18:9090/ivr/' method="POST"><getkeys validkeys=”12” tkey=”#” timeout=”10”><speak>{message}</speak><timeout type=”speak”>Thanks for your input</timeout></getkeys></request>"""
    print(xml)
    headers = {'Content-Type': 'application/x-www-form-urlencoded'}
    response = requests.post(url,data=xml, headers= headers).text


    #msgresp = (response.read().decode('utf-8'))
    print(response)


    return response

setIVR("9916363368")