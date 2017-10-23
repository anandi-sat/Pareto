#!/usr/bin/python
#Rename the file to campigns.py
import MySQLdb

#Write the below statements into a method "campignData"

def campignData():
    db = MySQLdb.connect(host="localhost",      # your host, usually localhost
                     user="root",           # your username
                     passwd="",             # your password
                     db="pareto")           # name of the data base


# you must create a Cursor object. It will let
#  you execute all the queries you need
    cur = db.cursor()

# Use all the SQL you like
    cur.execute("SELECT * FROM campigns")

    df = list(cur.fetchall())
    db.close()

#Return the series
    return df