import requests
from flask import jsonify
import Main

# from flask import Flask, g
# from flask_cors import CORS
# app = Flask(__name__)
# CORS(app)



def setIVR(mobilenumber):


    api_key = "1AhH8esDzYiyGb6pFJE2"
    access_key="wUffJXBzn5nZci8Z91vbdwMCCVngwW8V9iZyVBb5"
    message = """Hello Mister Hosam. Good Morning! We are from Awazen Clinic. You have an appointment booked at 10:30 AM tomorrow with Doctor Sameer. Please press 1 to confirm, 2 to cancel. Please enter your choice followed by # key"""
    xml = f"""api_key={api_key}&access_key={access_key}&xml=<request action="http://13.126.123.18:5000/Ivr" method="POST"><to>{mobilenumber}</to><getkeys validkeys="12" tkey="#" timeout="10"><speak>{message}</speak></getkeys></request>"""
    print(xml)

    response = callSMSCountry(xml)



    #msgresp = (response.read().decode('utf-8'))
    print(response)


    return response

def callSMSCountry(xml):
    url = "http://voiceapi.smscountry.com/api"
    headers = {'Content-Type': 'application/x-www-form-urlencoded'}

    response = requests.post(url, data=xml.encode('utf-8'), headers=headers).text

    return response

# if __name__ == "__main__":
#     filepath = 'pythonserver.properties'
#     propList = Main.read_properties_file(filepath)
#     if len(propList['host']) > 0:
#         if len(propList['port']) > 0:
#             app.run(host=propList['host'], port=int(propList['port']))
#         else:
#             #print('only host')
#             app.run(host=propList['host'])
#     elif len(propList['port']) > 0:
#         #print('only port')
#         app.run(port=int(propList['port']))
#     else:
#         #print('none')
#         app.run()

#setIVR('9986670960')
setIVR('9916363368')