import MySQLdb

def enrollselectedData(patientId, campaignId):
    connection = db = MySQLdb.connect(host="13.126.123.18", # your host, usually localhost
    user="root", # your username
    passwd="password", # your password
    db="pareto") # name of the data base
    cur = connection.cursor()

    try:

        insert_query=f"insert into patient_campaign (PatientID, CampaignID, Status, EnrollmentDate) values ('{patientId}','{campaignId}','Active',now());"
        affected_count = cur.execute(insert_query)

        print("query ", cur._last_executed)
        connection.commit()
        print("count: ", affected_count)
        return affected_count
    except MySQLdb.IntegrityError:
        print("failed to insert values", cur._last_executed)
    finally:
        cur.close()