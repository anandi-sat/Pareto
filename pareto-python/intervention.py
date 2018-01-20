#!/usr/bin/python
#Rename the file to campigns.py
import MySQLdb

#Write the below statements into a method "interventionData"

def interventionData(patientId):
    db = connectdb()

# you must create a Cursor object. It will let
#  you execute all the queries you need
    cur = db.cursor()

    select_query = f"""SELECT p.PatientID,p.FirstName,p.LastName,p.DOB,p.Gender,pc.CampaignID,pc.Status, c.Name,c.NoOfEnrolledPatients,
    dp.TouchpointID, dp.ScheduledTime, dp.Message, dp.Contact, dp.Status FROM patient AS p, patient_campaign AS pc, delivery_planner as dp, campaign as c 
    where p.PatientID=pc.PatientID and p.PatientID = dp.PatientID and c.CampaignID = pc.CampaignID and p.PatientID = '{patientId}';"""
# Use all the SQL you like
    cur.execute(select_query)

    df = list(cur.fetchall())

    #keys = [ "Id", "fname", "lname", "dob", "gender", "Id2", "CId", "CStatus", "CEDate", "CId2", "CName", "CEPat", "CEStatus", "Touchpoint", "TimeStamp", "Message", "Contact", "Status"]
    keys = ["Id", "fname", "lname", "dob", "gender", "CId", "Pcstatus", "Cname", "cenrollpatients", "dptouchpoint", "dpstime", "dpmsg", "dpcontact","status"]
    result = [dict(zip(keys, values)) for values in df]
    db.close()

#Return the series
    return {"response": result}

def patientcampaignsData(patientId):
    db = connectdb()

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

def patientvisitsData(patientId):
    db = connectdb()

# you must create a Cursor object. It will let
#  you execute all the queries you need
    cur = db.cursor()

    select_query = f"select AppointmentDateTime,Status from appointment where PatientID ='{patientId}';"
# Use all the SQL you like
    cur.execute(select_query)

    df = list(cur.fetchall())

    #keys = [ "Id", "fname", "lname", "dob", "gender", "Id2", "CId", "CStatus", "CEDate", "CId2", "CName", "CEPat", "CEStatus", "Touchpoint", "TimeStamp", "Message", "Contact", "Status"]
    keys = ["appdate", "pvstatus"]
    result = [dict(zip(keys, values)) for values in df]
    db.close()

#Return the series
    return {"response": result}

def diagnosisData(patientId):
    db = connectdb()
# you must create a Cursor object. It will let
#  you execute all the queries you need
    cur = db.cursor()

    select_query = f"select c.CodeID, c.Description, s.ServiceTaken  from services as s, code as c where " \
                   f"c.CodeID = s.CodeID and PatientID ='{patientId}';"
# Use all the SQL you like
    cur.execute(select_query)

    df = list(cur.fetchall())

    #keys = [ "Id", "fname", "lname", "dob", "gender", "Id2", "CId", "CStatus", "CEDate", "CId2", "CName", "CEPat", "CEStatus", "Touchpoint", "TimeStamp", "Message", "Contact", "Status"]
    keys = ["diagid", "diagdes", "diagst"]
    result = [dict(zip(keys, values)) for values in df]
    db.close()

#Return the series
    return {"response": result}

def detailsData(patientId):
    db = connectdb()

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

def connectdb():
    db = MySQLdb.connect(host="13.126.123.18",  # your host, usually localhost
                         user="root",  # your username
                         passwd="password",  # your password
                         db="pareto")  # name of the data base

    # you must create a Cursor object. It will let
    #  you execute all the queries you need
    return db
