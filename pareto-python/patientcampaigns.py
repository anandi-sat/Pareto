#!/usr/bin/python
#Rename the file to campigns.py
import MySQLdb

#Write the below statements into a method "interventionData"

def patientcampaignsData(patientId):
    db = MySQLdb.connect(host="13.126.123.18",      # your host, usually localhost
                     user="root",           # your username
                     passwd="password",             # your password
                     db="pareto")            # name of the data base


# you must create a Cursor object. It will let
#  you execute all the queries you need
    cur = db.cursor()

    select_query = f"""select c.Name, c.Status from campaign AS c, patient_campaign AS pc
                   where c.CampaignID=pc.CampaignID and pc.PatientID ='{patientId}';"""
# Use all the SQL you like
    cur.execute(select_query)

    df = list(cur.fetchall())

    #keys = [ "Id", "fname", "lname", "dob", "gender", "Id2", "CId", "CStatus", "CEDate", "CId2", "CName", "CEPat", "CEStatus", "Touchpoint", "TimeStamp", "Message", "Contact", "Status"]
    keys = ["campname", "campstatus"]
    result = [dict(zip(keys, values)) for values in df]
    db.close()

#Return the series
    return {"response": result}