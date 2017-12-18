#!/usr/bin/python
#Rename the file to campigns.py
import MySQLdb

#Write the below statements into a method "deliveryData"

def programoverviewData():
    db = MySQLdb.connect(host="13.126.123.18",      # your host, usually localhost
                     user="root",           # your username
                     passwd="password",             # your password
                     db="pareto")            # name of the data base


# you must create a Cursor object. It will let
#  you execute all the queries you need
    cur = db.cursor()

# Use all the SQL you like
    cur.execute("select ts.TouchpointName, ts.Interval from touchpoint_story as ts where CampaignID = '2000';")

    df = list(cur.fetchall())

    keys = [ "pftname", "pfinterval"]

    result = [dict(zip(keys, values)) for values in df]
    db.close()

#Return the series
    return {"response": result}