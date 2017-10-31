import time
import SMS
from threading import Timer
import threading
from datetime import datetime, timedelta

def print_time():
    print("From print_time", time.time())

def scheduler(time):
    Timer(time, print_time, ()).start()

def seconds():
    return 1

def minutes():
    return 60

def hours():
    return 60*60

def days():
    return 60*60*24

def weeks():
    return 60*60*24*7

def months():
    return 60*60*24*30

#not used
def print_some_times():
    print(time.time())
    scheduler(5 * seconds())
    #time.sleep(100 * seconds())
     # sleep while time-delay events execute
    print(time.time())

def SMSReports():
    print(time.time())
    to_date = datetime.now()- timedelta(hours=24)
    from_date = to_date - timedelta(hours=24)
    from_date = from_date.strftime('%d/%m/%Y %H:%M:%S')
    to_date = to_date.strftime('%d/%m/%Y %H:%M:%S')
    print("dates: ", str(from_date), str(to_date))
    #Scheduled every 2 hours to take the SMS Reports
    threading.Timer(2 * hours(), SMSReports).start()
    SMS.report(str(from_date), str(to_date))

SMSReports()