import urllib,urllib.request,urllib.parse


def sendSMS(mobilenumber, message):

    user = 'paretohealthcare'
    url = "http://www.smscountry.com/smscwebservice_bulk.aspx"
    values = {'user' : user,
    'passwd' : '64405124',
    'message' : message,
    'mobilenumber':mobilenumber,
    'mtype':'N',
    'DR':'Y'
    }
    data = urllib.parse.urlencode(values)
    data = data.encode('utf-8')
    print (data)
    request = urllib.request.Request(url,data)
    response = urllib.request.urlopen(request)

    msgresp = (response.read().decode('utf-8'))
    print(msgresp)

    return msgresp

def multiSMS(mno_msg):
    user = 'paretohealthcare'
    url = "http://api.smscountry.com/SMSCWebservice_MultiMessages.asp"
    values = {'user' : user,
    'passwd' : '64405124',
    'mno_msg' : mno_msg,
    'mtype':'N',
    'DR':'Y'
    }
    data = urllib.parse.urlencode(values)
    data = data.encode('utf-8')
    print (data)
    request = urllib.request.Request(url,data)
    response = urllib.request.urlopen(request)

    msgresp = (response.read().decode('utf-8'))
    print(msgresp)
    return msgresp

def report(fromdate,todate):
    user = 'paretohealthcare'
    url = "http://api.smscountry.com/smscwebservices_bulk_reports.aspx"
    values = {'user' : user,
    'passwd' : '64405124',
    'fromdate' : fromdate,
    'todate':todate,
    }
    data = urllib.parse.urlencode(values)
    data = data.encode('utf-8')
    print (data)
    request = urllib.request.Request(url,data)
    response = urllib.request.urlopen(request)

    msgresp = (response.read().decode('utf-8'))
    print(msgresp)
    resp = getSMSHistory(msgresp)
    print(resp)
    return resp

from InsertDelivery import insert
from datetime import datetime
def getSMSHistory(delivery):

    msgStatus = {'0': 'Message In Queue', '1': 'Submitted To Carrier', '2': 'Un Delivered', '3': 'Delivered',
             '4': 'Expired', '8': 'Rejected', '9': 'Message Sent', '10': 'Opted Out Mobile Number',
             '11': 'Invalid Mobile Number'}
    msges = delivery.split('#')

    msgDetails = [msg.split('~') for msg in msges]
    print("msg count: ", len(msgDetails))

    if len(msgDetails) == 0:
        print("no messages")
    else:
        resp = [insert(msgDetail[5], msgDetail[1],msgStatus.get(msgDetail[2]),
                    datetime.strptime(msgDetail[3],'%d/%m/%Y %H:%M:%S').strftime("%Y-%m-%d %H:%M:%S"), msgDetail[0])
                    for msgDetail in msgDetails if(len(msgDetail))>=3]
               # [print (datetime.strptime(msgDetail[3],'%d/%m/%Y %H:%M:%S').strftime("%Y-%m-%d %H:%M:%S")) for msgDetail in msgDetails if(len(msgDetail))>=3]
        return resp
