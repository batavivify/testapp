// new doctor
const doctor = new Doctor('Milan','Milanovic','ORL');

//new patient
const patient = new Patient('Dragan', 'Draganovic', '123', '321');

// doctor and patient created log
console.log("Doktor:", doctor.getFirstName() , "je uspesno kreiran!");
console.log("Pacijent", patient.getFirstName(), "je uspesno kreiran!");


// patient choose doctor
const chooseDoctor = patient.chooseDoctor(doctor);
console.log("Pacijent", patient.getFirstName(), "je izabrao", chooseDoctor, "za svog lekara");


// new bloodSugarExam
const bloodSugarExam = new Sugar(patient,doctor,'10 Nov 2018', '08:00');
console.log("Predled merenja secera u krvi je zakazan", bloodSugarExam);


// new bloodPresureExam
const bloodPresureExam = new Pressure(patient,doctor,'10 Nov 2018');
console.log("Predled merenja pritiska je zakazan:", bloodPresureExam);


// patient perform sugar exam
const sugarResults = bloodSugarExam.performSugar();
console.log("Pacijent je obavio merenje secera u krvi. Rezultati su:", sugarResults);


// patient perform presure exam
const pressureResults = bloodPresureExam.performPressure();
console.log("Pacijent je obavio merenje krvnog pritiska. Rezultati su:", pressureResults);


// generating log data
const doctorCreated = doctor.logDoctorCreated();
const patientCreated = patient.logPatientCreated();
const doctorChoosen = doctor.logDoctorChoosen();
const patientExam = patient.logPatientExam();
const data = [doctorCreated, patientCreated, doctorChoosen, patientExam];

// save to log file
Logger.makeLog(data);