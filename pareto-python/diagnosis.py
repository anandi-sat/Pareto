#!/usr/bin/python
#Rename the file to campigns.py
import MySQLdb

#Write the below statements into a method "diagnosisData"

def diagnosisData(patientId):
    db = MySQLdb.connect(host="13.126.123.18",      # your host, usually localhost
                     user="root",           # your username
                     passwd="password",             # your password
                     db="pareto")            # name of the data base


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