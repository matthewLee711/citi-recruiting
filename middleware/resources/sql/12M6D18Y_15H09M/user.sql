-- USE THIS SQL FILE FOR TESTING YOUR SQL

CREATE TABLE users (
  id serial NOT NULL,
  userid VARCHAR(128),
  interviewed BOOLEAN,
  queuenumber NUMBER,
  scheduledtime TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

INSERT INTO users (userid, upassword, interviewed, scheduledtime) VALUES ('bob@gmail.com', 'password', current_timestamp);
