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
    cur.execute("""Select patient.PatientId,concat(FirstName, LastName) as Name,DATEDIFF(patient.DOB, Now() / 365.25) as age,max(appointmentDateTime) as LastVisitDate,
Count(ServiceTaken) - Sum(ServiceTaken) as OpenTreatment,Now() as NextExepectedDate,4 as EngagementScore,Count(pc.CampaignID) as Campaigns From pareto.Patient patient
left outer join  pareto.appointment appointment on patient.PatientID = appointment.PatientID and appointment.Status not in ('Unconfirmed', 'Missed', 'Cancelled', 'Will Call')
left outer join  pareto.services on services.PatientID = patient.PatientID left outer join  pareto.patient_campaign as pc on patient.PatientID = pc.PatientID and pc.status = 'Active'
group by patient.PatientId;""")

    df = list(cur.fetchall())

    keys = ["pid", "name", "age", "lastvisitdate", "opentreatment", "nextexpecteddate", "engagementscore", "campaigns"]

    result = [dict(zip(keys, values)) for values in df]
    db.close()

#Return the series
    return {"response": result}