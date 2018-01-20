#!/usr/bin/python
#Rename the file to Patients.py
import MySQLdb

#Write the below statements into a method "patientData"

def patientData():
    db = connectdb()
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

def enrollselectedData(patientIds, campaignId):

    connection = connectdb()
    cur = connection.cursor()
    enrolled_Patients = []
    already_enrolled = []
    response = ''
    try:
        if len(patientIds) != 0:
            for patientId in patientIds:
                select_query=f"select * from patient_campaign where PatientID = '{patientId}' and CampaignID= '{campaignId}'"
                cur.execute(select_query)
                data = list(cur.fetchall())

                if len(data)==0:
                    insert_query=f"insert into patient_campaign (PatientID, CampaignID, Status, EnrollmentDate) values ('{patientId}','{campaignId}','Active',now());"
                    cur.execute(insert_query)
                    enrolled_Patients.append(patientId)

                    connection.commit()
                else:
                    already_enrolled.append((patientId))

            if len(already_enrolled) == 0:
                response = f"The patients enrolled to the campaign {campaignId} are " + ' '.join(enrolled_Patients)
            elif len(enrolled_Patients) == 0:
                response = f"The patients already enrolled are " + ' '.join(already_enrolled)
            else:
                response = f"The patients enrolled to the campaign {campaignId} are " + ' '.join(enrolled_Patients) +" and the patients already enrolled are " + ' '.join(already_enrolled)
        else:
            response = "Please select Patients to enroll"
        return {"response":response}
    except MySQLdb.IntegrityError:
        print("failed to insert values", cur._last_executed)
    finally:
        cur.close()

def connectdb():
    db = MySQLdb.connect(host="13.126.123.18",  # your host, usually localhost
                         user="root",  # your username
                         passwd="password",  # your password
                         db="pareto")  # name of the data base

    # you must create a Cursor object. It will let
    #  you execute all the queries you need
    return db