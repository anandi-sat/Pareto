import MySQLdb

def insert(msg_txt, mobile_number, status, delivery_time, response_id):
    connection = db = MySQLdb.connect(host="13.126.123.18", # your host, usually localhost
    user="root", # your username
    passwd="password", # your password
    db="pareto") # name of the data base
    cur = connection.cursor()
    print(delivery_time)
    try:
        affected_count = cur.execute("INSERT INTO `delivery_planner`(`PatientID`, `CampingID`, `TouchpointStoryID`, "
                                     "`TouchpointID`, `Message`, `ScheduledTime`, `Status`, `Contact`, `VendorResponceID`, "
                                     "`DeliveryTime`) VALUES ('ALMNA001','239','310','451',%s,'0000-00-00 00:00:00',%s,%s,%s,%s);",
                                     (msg_txt, status, mobile_number,response_id, delivery_time))
        print("query ", cur._last_executed)
        connection.commit()
        print("count: ", affected_count)
        return affected_count
    except MySQLdb.IntegrityError:
        print("failed to insert values", cur._last_executed)
    finally:
        cur.close()
		
def insertEmail(email_txt, Email, status, delivery_time, response_id):
    connection = db = MySQLdb.connect(host="13.126.123.18", # your host, usually localhost
    user="root", # your username
    passwd="password", # your password
    db="pareto") # name of the data base
    cur = connection.cursor()
    print(delivery_time)
    try:
        affected_count = cur.execute("INSERT INTO `delivery_planner`(`PatientID`, `CampingID`, `TouchpointStoryID`, "
                                     "`TouchpointID`, `Message`, `ScheduledTime`, `Status`, `Contact`, `VendorResponceID`, "
                                     "`DeliveryTime`) VALUES ('ALMNA001','239','310','451',%s,'0000-00-00 00:00:00',%s,%s,%s,%s);",
                                     (email_txt, status, Email,response_id, delivery_time))
        print("query ", cur._last_executed)
        connection.commit()
        print("count: ", affected_count)
        return affected_count
    except MySQLdb.IntegrityError:
        print("failed to insert values", cur._last_executed)
    finally:
        cur.close()
