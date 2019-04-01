/* DB tables (rough draft). Refer to migrations for final copy. */
CREATE TABLE host (
  id SERIAL PRIMARY KEY NOT NULL,
  name TEXT,
  email VARCHAR(50)
);

CREATE TABLE events (
  id SERIAL PRIMARY KEY NOT NULL,
  title TEXT,
  description TEXT,
  uniqueURL VARCHAR(255),
  location VARCHAR (50),
  host_id VARCHAR(50) NOT NULL REFERENCES host(id),
  notes_id VARCHAR(255) NOT NULL REFERENCES notes(id)
);

CREATE TABLE notes (
  id SERIAL PRIMARY KEY NOT NULL,
  event_id VARCHAR(255) NOT NULL REFERENCES events(id)
);

CREATE TABLE options_date (
  id SERIAL PRIMARY KEY NOT NULL,
  event_id VARCHAR(255) NOT NULL REFERENCES events(id),
  date_option1 DATE,
  date_option2 DATE,
  date_option3 DATE
);

CREATE TABLE options_time (
  id SERIAL PRIMARY KEY NOT NULL,
  event_id VARCHAR(255) NOT NULL REFERENCES events(id),
  time_option1 TIME,
  time_option2 TIME,
  time_option3 TIME,
  option_date DATE NOT NULL REFERENCES options_date(id)
);

CREATE TABLE options_date_time (
  id SERIAL PRIMARY KEY NOT NULL,
  option_date INTEGER NOT NULL REFERENCES options_date(id),
  option_time INTEGER NOT NULL REFERENCES options_time(id)
);

CREATE TABLE guests_choice (
  id SERIAL PRIMARY KEY NOT NULL,
  event_id INTEGER NOT NULL REFERENCES events_date(id),
  option_date_time INTEGER NOT NULL REFERENCES options_date_time(id)
);

CREATE TABLE guests (
  id SERIAL PRIMARY KEY NOT NULL,
  guest_name TEXT,
  guest_email VARCHAR(50)
);