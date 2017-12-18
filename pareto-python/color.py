#!/usr/bin/python
#Rename the file to Patients.py
import MySQLdb

#Write the below statements into a method "patientData"

def colorData():
    db = MySQLdb.connect(host="13.126.123.18",      # your host, usually localhost
                     user="root",           # your username
                     passwd="password",             # your password
                     db="pareto")           # name of the data base


# you must create a Cursor object. It will let
#  you execute all the queries you need
    cur = db.cursor()

# Use all the SQL you like
    cur.execute("select c.color  from color as c, patient as p where c.EngagementScore = p.EngagementScore")

    df = list(cur.fetchall())

    keys = ["pid"]

    result = [dict(zip(keys, values)) for values in df]
    db.close()

#Return the series
    return {"response": result}