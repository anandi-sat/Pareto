#!/usr/bin/python
#Rename the file to campigns.py
import MySQLdb

#Write the below statements into a method "interventionData"

def detailsData(patientId):
    db = MySQLdb.connect(host="13.126.123.18",      # your host, usually localhost
                     user="root",           # your username
                     passwd="password",             # your password
                     db="pareto")            # name of the data base


# you must create a Cursor object. It will let
#  you execute all the queries you need
    cur = db.cursor()

    select_query = f"select FirstName, LastName, DOB, PatientId, Gender, Phone1, Email from pareto.patient where PatientId = '{patientId}';"
# Use all the SQL you like
    cur.execute(select_query)

    df = list(cur.fetchall())

    #keys = [ "Id", "fname", "lname", "dob", "gender", "Id2", "CId", "CStatus", "CEDate", "CId2", "CName", "CEPat", "CEStatus", "Touchpoint", "TimeStamp", "Message", "Contact", "Status"]
    keys = ["defname", "delname", "dedob", "depid", "degender", "dephone", "demail"]
    result = [dict(zip(keys, values)) for values in df]
    db.close()

#Return the series
    return {"response": result}