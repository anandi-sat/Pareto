import MySQLdb

def enrollselectedData(patientIds, campaignId):
    connection = db = MySQLdb.connect(host="13.126.123.18", # your host, usually localhost
    user="root", # your username
    passwd="password", # your password
    db="pareto") # name of the data base
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