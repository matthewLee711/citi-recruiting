
`docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres`
`docker run --name some-redis -p 6379:6379 -d redis`

Scenario:
1pm - 6pm schedule

60 mins in an hour

1 recruiter

INIT:
const time: 300 minutes
- time is not allowed to change
result time
- used to calculate available time

Everytime a user joins the queue, 10 is added

Initialize time start to time end (unix)



## Direct Queue add
1. Check to see if enough time is available based on result time is less than const time.

2. If enough time is available, add user to queue and add plus five to result time

3. return recommended time to come back on based on ____


## Complete interview
1. on press, remove user from queue

2. Check interview time 
- If a user goes overtime, (overtime time - 5) - result time
- If a user goes undertime, (5 - undertime) + result time

## Exit queue 
1. on press, remove user from queue

2. subtract 5 from result time

## Frontend side
If queue time is less than 25mins, recommend go into line
















## Direct Queue add

1. Check time see enough time is available based on (total time) 

2. If enough time is available, add user to queue and add to result time

3. return recommended time to come back based on _____

## Scheduled queue add

1. Get available times based on queue + scheduled times. total time - result time = available times.

2. Convert available time into variations of 10 mins. 250 = 2p, OR 267 = 2:12pm

3. User will select 2:12pm which will be like 267

## Completed interview
1. on press, remove user from queue

2. Check interview time 
- If a user goes overtime, (overtime time - 10) - result time
- If a user goes undertime, (10 - undertime) + result time

3. update all scheduled times + direct queue times

## Interesting twists
- If a user goes overtime, (overtime time - 10) + total time
- If a user goes undertime, (10 - ubertime) + total time