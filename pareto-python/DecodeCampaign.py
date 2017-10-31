campaign = '50-email-5-sms-10-email'

temp = campaign.split('-')
campaign_programs = {}
oddList = []
evenList = []
count = len(temp)
i=0

while(i < count):
    if(i%2 ==0):
        evenList.append(i)
    else:
        oddList.append(i)
    i+=1


if(count%2==0):
    while(count>1):
        for e,o in zip(evenList,oddList):
            if(temp[e].isnumeric() or  not temp[e]):
                if (temp[o].isnumeric() or  not temp[o]):
                    print("exitting, Incorrect campaign")
                    break
                else:
                    campaign_programs[temp[e]] = temp[o]
                    count = count - 2
            else:
                print("exitting, Incorrect campaign")
                break
    print(campaign_programs)
else:
    print("Campaign is not complete. Please check")