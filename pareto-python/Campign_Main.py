#import statements
import  os , configparser, io
from io import StringIO
from flask import Flask, request, json
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

from campigns import campignData

#import the method defined 'campignData' in campigns.py

@app.route('/campignData', methods=['GET'])
def retrievecampignDetails():
    campigns = campignData()
# call the method and set a new series variable 'campignsData' here

#To set the response as JSON, use the below code
    response=json.dumps(campigns)
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
            #print 'host and port'
            app.run(host=propList['host'], port=int(propList['port']))
        else:
            #print 'only host'
            app.run(host=propList['host'])
    elif len(propList['port']) > 0:
        #print 'only port'
        app.run(port=int(propList['port']))
    else:
        #print 'none'
        app.run()