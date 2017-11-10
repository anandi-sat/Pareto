#!/usr/bin/python
#Rename the file to campigns.py
import MySQLdb

#Write the below statements into a method "interventionData"

def interventionData():
    db = MySQLdb.connect(host="13.126.123.18",      # your host, usually localhost
                     user="root",           # your username
                     passwd="password",             # your password
                     db="pareto")            # name of the data base


# you must create a Cursor object. It will let
#  you execute all the queries you need
    cur = db.cursor()

    select_query = f"""SELECT p.PatientID,p.FirstName,p.LastName,p.DOB,p.Gender,pc.CampaignID,pc.Status, c.Name,c.NoOfEnrolledPatients,
    dp.TouchpointID, dp.ScheduledTime, dp.Message, dp.Contact, dp.Status FROM patient AS p, patient_campaign AS pc, delivery_planner as dp, campaign as c 
    where p.PatientID=pc.PatientID and p.PatientID = dp.PatientID and c.CampaignID = pc.CampaignID and p.PatientID = 'ALMNA001';"""
# Use all the SQL you like
    cur.execute(select_query)

    df = list(cur.fetchall())

    #keys = [ "Id", "fname", "lname", "dob", "gender", "Id2", "CId", "CStatus", "CEDate", "CId2", "CName", "CEPat", "CEStatus", "Touchpoint", "TimeStamp", "Message", "Contact", "Status"]
    keys = ["Id", "fname", "lname", "dob", "gender", "CId", "Pcstatus", "Cname", "cenrollpatients", "dptouchpoint", "dpstime", "dpmsg", "dpcontact","status"]
    result = [dict(zip(keys, values)) for values in df]
    db.close()

#Return the series
    return {"response": result}