
# using SendGrid's Python Library
# https://github.com/sendgrid/sendgrid-python
import sendgrid
import urllib,urllib.request,urllib.parse
from flask import jsonify
import os
from sendgrid.helpers.mail import *

def sendemail():

    sg = sendgrid.SendGridAPIClient(apikey='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')
    from_email = Email("ananthm1327@gmail.com")
    to_email_add = "a1081993@gmail.com; sathappan84@gmail.com; anandi.ramannathan@gmail.com; madhusudanp98@gmail.com"
    to_email = Email(to_email_add)
    subject = "Sending with SendGrid is Very Much Fun"
    content = Content("text/html", """HI This is Also Test
    <html>
    <head>
    <title>Appointment Remainder</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <style>
    table {border-spacing: 0;}
    
    
    </style>
    </head>
    <body bgcolor="#FFFFFF" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
    <!-- Save for Web Slices (Appointment Remainder.pdf) -->
    <table id="Table_01" width="651" height="920" border="0" cellpadding="0" cellspacing="0">
        <tr>
            <td colspan="12">
                <img src="https://dentalimages.s3.amazonaws.com/Remainder/Appointment-Remainder_01.jpg" style="display:block" width="650" height="466" alt=""></td>
            <td>
                <img src="https://dentalimages.s3.amazonaws.com/Remainder/spacer.gif" style="display:block" width="1" height="466" alt=""></td>
        </tr>
        <tr>
            <td colspan="2" rowspan="3">
                <img src="https://dentalimages.s3.amazonaws.com/Remainder/Appointment-Remainder_02.jpg" style="display:block" width="62" height="326" alt=""></td>
            <td>
                <a href="http://13.126.123.18:9090/Awazen/confirmation.html" target="_blank">
                    <img src="https://dentalimages.s3.amazonaws.com/Remainder/Appointment-Remainder_03.jpg" style="display:block" width="147" height="106" border="0" alt=""></a></td>
            <td rowspan="8">
                <img src="https://dentalimages.s3.amazonaws.com/Remainder/Appointment-Remainder_04.jpg" style="display:block" width="42" height="453" alt=""></td>
            <td colspan="3">
                <a href="http://13.126.123.18:9090/Awazen/cancel.html" target="_blank">
                    <img src="https://dentalimages.s3.amazonaws.com/Remainder/Appointment-Remainder_05.jpg" style="display:block" width="151" height="106" border="0" alt=""></a></td>
            <td rowspan="2">
                <img src="https://dentalimages.s3.amazonaws.com/Remainder/Appointment-Remainder_06.jpg" style="display:block" width="39" height="186" alt=""></td>
            <td colspan="2">
                <a href="http://13.126.123.18:9090/Awazen/Reschedule.html" target="_blank">
                    <img src="https://dentalimages.s3.amazonaws.com/Remainder/Appointment-Remainder_07.jpg" style="display:block" width="152" height="106" border="0" alt=""></a></td>
            <td colspan="2" rowspan="2">
                <img src="https://dentalimages.s3.amazonaws.com/Remainder/Appointment-Remainder_08.jpg" style="display:block" width="57" height="186" alt=""></td>
            <td>
                <img src="https://dentalimages.s3.amazonaws.com/Remainder/spacer.gif" style="display:block" width="1" height="106" alt=""></td>
        </tr>
        <tr>
            <td rowspan="2">
                <img src="https://dentalimages.s3.amazonaws.com/Remainder/Appointment-Remainder_09.jpg" style="display:block" width="147" height="220" alt=""></td>
            <td colspan="3">
                <img src="https://dentalimages.s3.amazonaws.com/Remainder/Appointment-Remainder_10.jpg" style="display:block" width="151" height="80" alt=""></td>
            <td colspan="2">
                <img src="https://dentalimages.s3.amazonaws.com/Remainder/Appointment-Remainder_11.jpg" style="display:block" width="152" height="80" alt=""></td>
            <td>
                <img src="https://dentalimages.s3.amazonaws.com/Remainder/spacer.gif" style="display:block" width="1" height="80" alt=""></td>
        </tr>
        <tr>
            <td rowspan="6">
                <img src="https://dentalimages.s3.amazonaws.com/Remainder/Appointment-Remainder_12.jpg" style="display:block" width="94" height="267" alt=""></td>
            <td colspan="6" rowspan="2">
                <a href="https://www.google.co.in/maps/place/Awazen+Medical+Center/@24.47191,54.374353,15z/data=!4m5!3m4!1s0x0:0xdb9f3e265a62a645!8m2!3d24.47191!4d54.374353" target="_blank">
                    <img src="https://dentalimages.s3.amazonaws.com/Remainder/Appointment-Remainder_13.jpg" style="display:block" width="270" height="153" border="0" alt=""></a></td>
            <td rowspan="6">
                <img src="https://dentalimages.s3.amazonaws.com/Remainder/Appointment-Remainder_14.jpg" style="display:block" width="35" height="267" alt=""></td>
            <td>
                <img src="https://dentalimages.s3.amazonaws.com/Remainder/spacer.gif" style="display:block" width="1" height="140" alt=""></td>
        </tr>
        <tr>
            <td rowspan="5">
                <img src="https://dentalimages.s3.amazonaws.com/Remainder/Appointment-Remainder_15.jpg" style="display:block" width="35" height="127" alt=""></td>
            <td colspan="2" rowspan="3">
                <a href="http://www.awazen.com/" target="_blank">
                    <img src="https://dentalimages.s3.amazonaws.com/Remainder/Appointment-Remainder_16.jpg" style="display:block" width="174" height="103" border="0" alt=""></a></td>
            <td>
                <img src="https://dentalimages.s3.amazonaws.com/Remainder/spacer.gif" style="display:block" width="1" height="13" alt=""></td>
        </tr>
        <tr>
            <td colspan="6">
                <img src="https://dentalimages.s3.amazonaws.com/Remainder/Appointment-Remainder_17.jpg" style="display:block" width="270" height="83" alt=""></td>
            <td>
                <img src="https://dentalimages.s3.amazonaws.com/Remainder/spacer.gif" style="display:block" width="1" height="83" alt=""></td>
        </tr>
        <tr>
            <td rowspan="3">
                <img src="https://dentalimages.s3.amazonaws.com/Remainder/Appointment-Remainder_18.jpg" style="display:block" width="52" height="31" alt=""></td>
            <td colspan="3" rowspan="2">
                <a href="http://13.126.123.18:9090/Awazen/unsubscribe.html">
                    <img src="https://dentalimages.s3.amazonaws.com/Remainder/Appointment-Remainder_20.jpg" style="display:block" width="66" height="14" border="0" alt=""></a></td>
            <td colspan="2" rowspan="3">
                <img src="https://dentalimages.s3.amazonaws.com/Remainder/Appointment-Remainder_20-21.jpg" style="display:block" width="152" height="31" alt=""></td>
            <td>
                <img src="https://dentalimages.s3.amazonaws.com/Remainder/spacer.gif" style="display:block" width="1" height="7" alt=""></td>
        </tr>
        <tr>
            <td colspan="2" rowspan="2">
                <img src="https://dentalimages.s3.amazonaws.com/Remainder/Appointment-Remainder_21.jpg" style="display:block" width="174" height="24" alt=""></td>
            <td>
                <img src="https://dentalimages.s3.amazonaws.com/Remainder/spacer.gif" style="display:block" width="1" height="7" alt=""></td>
        </tr>
        <tr>
            <td colspan="3">
                <img src="https://dentalimages.s3.amazonaws.com/Remainder/Appointment-Remainder_22.jpg" style="display:block" width="66" height="17" alt=""></td>
            <td>
                <img src="https://dentalimages.s3.amazonaws.com/Remainder/spacer.gif" style="display:block" width="1" height="17" alt=""></td>
        </tr>
        <tr>
            <td>
                <img src="https://dentalimages.s3.amazonaws.com/Remainder/spacer.gif" style="display:block" width="35" height="1" alt=""></td>
            <td>
                <img src="https://dentalimages.s3.amazonaws.com/Remainder/spacer.gif" style="display:block" width="27" height="1" alt=""></td>
            <td>
                <img src="https://dentalimages.s3.amazonaws.com/Remainder/spacer.gif" style="display:block" width="147" height="1" alt=""></td>
            <td>
                <img src="https://dentalimages.s3.amazonaws.com/Remainder/spacer.gif" style="display:block" width="42" height="1" alt=""></td>
            <td>
                <img src="https://dentalimages.s3.amazonaws.com/Remainder/spacer.gif" style="display:block" width="94" height="1" alt=""></td>
            <td>
                <img src="https://dentalimages.s3.amazonaws.com/Remainder/spacer.gif" style="display:block" width="52" height="1" alt=""></td>
            <td>
                <img src="https://dentalimages.s3.amazonaws.com/Remainder/spacer.gif" style="display:block" width="5" height="1" alt=""></td>
            <td>
                <img src="https://dentalimages.s3.amazonaws.com/Remainder/spacer.gif" style="display:block" width="39" height="1" alt=""></td>
            <td>
                <img src="https://dentalimages.s3.amazonaws.com/Remainder/spacer.gif" style="display:block" width="22" height="1" alt=""></td>
            <td>
                <img src="https://dentalimages.s3.amazonaws.com/Remainder/spacer.gif" style="display:block" width="130" height="1" alt=""></td>
            <td>
                <img src="https://dentalimages.s3.amazonaws.com/Remainder/spacer.gif" style="display:block" width="22" height="1" alt=""></td>
            <td>
                <img src="https://dentalimages.s3.amazonaws.com/Remainder/spacer.gif" style="display:block" width="35" height="1" alt=""></td>
            <td></td>
        </tr>
    </table>
    <!-- End Save for Web Slices -->
    </body>
    </html>""")
    mail = Mail(from_email, subject, to_email, content)
    response = sg.client.mail.send.post(request_body=mail.get())
    print("Status_Code", response.status_code)
    print("Body", response.body)
    print("HEADERS", response.headers)
    delivery_time = response.headers.get('Date')
    response_id = response.headers.get('X-Message-Id')
    getEmailHistory(content, to_email_add, response.status_code, delivery_time, response_id)




from InsertEmailDelivery import insertEmail
from datetime import datetime
def getEmailHistory(emailcontent,to_email_add, status, delivery_time, message_id):

    emailStatus = {'200': 'OK', '202': 'ACCEPTED', '400': 'BAD REQUEST', '401': 'UNAUTHORIZED', '403': 'FORBIDDEN',
                   '404': 'NOT FOUND', '405': 'METHOD NOT ALLOWED', '413': 'PAYLOAD TOO LARGE',
                    '415': 'UNSUPPORTED MEDIA TYPE', '429': 'TOO MANY REQUESTS', '500': 'SERVER UNAVAILABLE',
                   '503': 'SERVICE NOT AVAILABLE'}

    from datetime import datetime
    from datetime import timedelta

    GMTTime = datetime.strptime(delivery_time, '%a, %d %b %Y %H:%M:%S %Z')

    IndiaTime = GMTTime + timedelta(minutes=330)

    dtime = IndiaTime.strftime("%Y-%m-%d %H:%M:%S")

    resp = insertEmail(emailcontent, to_email_add,emailStatus.get(status),
                    dtime, message_id)
               # [print (datetime.strptime(msgDetail[3],'%d/%m/%Y %H:%M:%S').strftime("%Y-%m-%d %H:%M:%S")) for msgDetail in msgDetails if(len(msgDetail))>=3]
    return resp
sendemail()