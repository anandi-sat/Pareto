#!/usr/bin/python
#Rename the file to Patients.py
import MySQLdb

#Write the below statements into a method "patientData"

def patientData():
    db = MySQLdb.connect(host="localhost",      # your host, usually localhost
                     user="root",           # your username
                     passwd="",             # your password
                     db="pareto")           # name of the data base


# you must create a Cursor object. It will let
#  you execute all the queries you need
    cur = db.cursor()

# Use all the SQL you like
    cur.execute("SELECT * FROM patients")

    df = list(cur.fetchall())

    keys = ["sno", "name", "age", "sex", "opengaps", "mobile", "email", "address"]

    result = [dict(zip(keys, values)) for values in df]
    db.close()

#Return the series
    return {"response": result}