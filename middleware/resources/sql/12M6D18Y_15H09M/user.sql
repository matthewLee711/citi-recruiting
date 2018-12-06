-- USE THIS SQL FILE FOR TESTING YOUR SQL

CREATE TABLE users (
  id serial NOT NULL,
  userid VARCHAR(128),
  interviewed BOOLEAN,
  queuenumber INT,
  createdate TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  scheduledtime TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

INSERT INTO users (userid, interviewed, queuenumber, createdate, scheduledtime) VALUES ('bob', FALSE, 5, current_timestamp, current_timestamp);
