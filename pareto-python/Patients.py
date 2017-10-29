#!/usr/bin/python
#Rename the file to Patients.py
import MySQLdb

#Write the below statements into a method "patientData"

def patientData():
    db = MySQLdb.connect(host="13.126.123.18",      # your host, usually localhost
                     user="root",           # your username
                     passwd="password",             # your password
                     db="pareto")           # name of the data base


# you must create a Cursor object. It will let
#  you execute all the queries you need
    cur = db.cursor()

# Use all the SQL you like
    cur.execute("SELECT * FROM patient")

    df = list(cur.fetchall())

    keys = ["sno", "fname", "lname", "dob", "sex", "nationality", "married", "ins1", "ins2", "mobile", "mobile2", "email", "guardian", "address"]

    result = [dict(zip(keys, values)) for values in df]
    db.close()

#Return the series
    return {"response": result}