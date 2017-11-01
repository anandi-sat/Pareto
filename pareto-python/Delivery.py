#!/usr/bin/python
#Rename the file to campigns.py
import MySQLdb

#Write the below statements into a method "deliveryData"

def deliveryData():
    db = MySQLdb.connect(host="13.126.123.18",      # your host, usually localhost
                     user="root",           # your username
                     passwd="password",             # your password
                     db="pareto")            # name of the data base


# you must create a Cursor object. It will let
#  you execute all the queries you need
    cur = db.cursor()

# Use all the SQL you like
    cur.execute("""SELECT patient.PatientID,patient.FirstName,patient.LastName,patient.DOB, patient.Gender,delivery_planner.TouchpointID,delivery_planner.DeliveryTime, delivery_planner.Message, delivery_planner.Contact, delivery_planner.Status
                    FROM patient
                    INNER JOIN delivery_planner ON delivery_planner.PatientID=patient.PatientID;""")

    df = list(cur.fetchall())

    keys = [ "Id", "fname", "lname", "dob", "gender", "Touchpoint", "TimeStamp", "Message", "Contact", "Status"]

    result = [dict(zip(keys, values)) for values in df]
    db.close()

#Return the series
    return {"response": result}