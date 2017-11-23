#import statements
import  os , configparser, io
from io import StringIO
from flask import Flask, request, json
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
from Patients import patientData

from campaigns import campaignData
from intervention import interventionData
from Delivery import deliveryData
from patientvisits import patientvisitsData
from patientcampaigns import patientcampaignsData
from diagnosis import diagnosisData
from programoverview import programoverviewData
#import the method defined 'patientData' in Patients.py

@app.route('/PatientData', methods=['GET'])
def retrievePatientDetails():
    patients = patientData()
# call the method and set a new series variable 'patientsData' here

#To set the response as JSON, use the below code
    response=json.dumps(patients)
    return response

#import the method defined 'campignData' in campigns.py

@app.route('/campaignData', methods=['GET'])
def retrievecampaignDetails():
    campaigns = campaignData()
# call the method and set a new series variable 'campignsData' here

#To set the response as JSON, use the below code
    response=json.dumps(campaigns)
    return response

#import the method defined 'deliveryData' in campigns.py

@app.route('/deliveryData', methods=['GET'])
def retrievedeliveryDetails():
    delivery = deliveryData()
# call the method and set a new series variable 'deliveryData' here

#To set the response as JSON, use the below code
    response=json.dumps(delivery)
    return response

#import the method defined 'deliveryData' in campigns.py

@app.route('/programoverviewData', methods=['GET'])
def retrieveprogramoverviewDetails():
    programoverview = programoverviewData()
# call the method and set a new series variable 'deliveryData' here

#To set the response as JSON, use the below code
    response=json.dumps(programoverview)
    return response


@app.route('/patientvisitsData', methods=['POST'])
def retrievepatientvisitsDetails():
    #patientvisits = patientvisitsData()
    input_query = request.get_json()
    print(input_query)
    patientId = input_query.get('patientId')
    print(patientId)
    patientvisits = patientvisitsData(patientId)

    # To set the response as JSON, use the below code
    response = json.dumps(patientvisits)
    return response


@app.route('/patientcampaignsData', methods=['POST'])
def retrievepatientcampaignsDetails():
    #patientcampaigns = patientcampaignsData()
    input_query = request.get_json()
    print(input_query)
    patientId = input_query.get('patientId')
    print(patientId)
    patientcampaigns = patientcampaignsData(patientId)

    # To set the response as JSON, use the below code
    response = json.dumps(patientcampaigns)
    return response

@app.route('/diagnosisData', methods=['POST'])
def retrievediagnosisDetails():
    #diagnosis = diagnosisData()
    input_query = request.get_json()
    print(input_query)
    patientId = input_query.get('patientId')
    print(patientId)
    diagnosis = diagnosisData(patientId)

    # To set the response as JSON, use the below code
    response = json.dumps(diagnosis)
    return response

@app.route('/interventionData', methods=['POST'])
def retrieveinterventionDetails():
    # intervention = interventionData()
    input_query = request.get_json()
    print(input_query)
    patientId = input_query.get('patientId')
    print(patientId)
    intervention = interventionData(patientId)



#To set the response as JSON, use the below code
    response=json.dumps(intervention)
    return response

def read_properties_file(file_path):
    with open(file_path) as f:
        config = io.StringIO()
        config.write('[dummy_section]\n')
        config.write(f.read().replace('%', '%%'))
        config.seek(0, os.SEEK_SET)

        cp = configparser.SafeConfigParser()
        cp.readfp(config)

        return dict(cp.items('dummy_section'))

#to host the server with port
if __name__ == "__main__":
    filepath = 'pythonserver.properties'
    propList = read_properties_file(filepath)
    if len(propList['host']) > 0:
        if len(propList['port']) > 0:
            app.run(host=propList['host'], port=int(propList['port']))
        else:
            #print('only host')
            app.run(host=propList['host'])
    elif len(propList['port']) > 0:
        #print('only port')
        app.run(port=int(propList['port']))
    else:
        #print('none')
        app.run()
