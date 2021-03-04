FROM cypress/included:6.4.0

COPY . .


RUN npm install
RUN npm run triggerAllTests-apiTesting --browser chrome



