# medi-book

Frontend URL : **https://medibook-dhaya.netlify.app/**
Project Walkthorugh Video : **https://www.loom.com/share/7869f10493bd4cd8844c0105acde498b**

**Medi-Book - Patient Portal System**

Medi-Book is a Mern Stack web application for booking medical lab tests. it has user registrations, test selection, booking and booking history.

**Approach**
    1. Frontend:
        It is built with React and it uses react router for navigation purpose and it communicates with backend via Axios (api.js) and it stored the JWT token in localStorage after registration. 
    2. Backend:
        The Backend part is built in Node js with Express and the data storage for all events are stored in MongoDB (patients,tests,bookings). The middleware part protects sensitive endpoints and the controllers handle the logic for registration, test listing, booking and history.


**SetUp Instructions:** 

    1. Clone the Repository
        git clone https://github.com/Dhayanithi-545/medi-book.git
        cd medi-book

    2. Backend Setup
        cd server
        npm install
        npm run dev

    3. Frontend Setup
        cd ../client
        npm install
        npm run dev

**API Endpoints**

    1. POST:
         Register a new Patient == /api/patients/register 
         body : {name, email, password}
         returns : {token,user}

         Book a test == /api/bookings/
         body: {testId}

    2. GET:

        Get all available test = /api/tests

        Get booking History = /api/bookings



    

