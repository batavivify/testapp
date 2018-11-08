// new doctor
const doctor = new Doctor('Milan','Milanovic','ORL');

//new patient
const patient = new Patient('Dragan', 'Draganovic', '123', '321');

// doctor and patient created log
console.log("Doktor:", doctor.firstName , "je uspesno kreiran!");
console.log("Pacijent", patient.firstname, "je uspesno kreiran!");


// patient choose doctor
const chooseDoctor = patient.chooseDoctor(doctor);
console.log("Pacijent", patient.firstName, "je izabrao", chooseDoctor, "za svog lekara");


// new bloodSugarExam
const bloodSugarExam = doctor.scheduleSugar(doctor, patient);
console.log("Predled merenja secera u krvi je zakazan:", bloodSugarExam);


// new bloodPresureExam
const bloodPresureExam = doctor.schedulePresure(doctor, patient);
console.log("Predled merenja pritiska je zakazan:", bloodPresureExam);


// patient perform sugar exam
const sugarResults = Patient.performSugar();
console.log("Pacijent je obavio merenje secera u krvi. Rezultati su:", sugarResults);


// patient perform presure exam
const presureResults = Patient.performPressure();
console.log("Pacijent je obavio merenje krvnog pritiska. Rezultati su:", presureResults);


// generating log data
const doctorCreated = [ Logger.now() + " Kreiran je doktor: " + doctor.firstName + "\n"];
const patientCreated = [ Logger.now() + " Kreiran je pacijent " + patient.firstName + "\n"];
const doctorChoosen = [ Logger.now() + " Pacijent " + patient.firstName + " je izabrao doktora " + doctor.firstName + "\n"];
const patientExam = [ Logger.now() + " Pacijent " + patient.firstName + " je obavio lekarski pregled" + "\n"];
const data = [doctorCreated, patientCreated, doctorChoosen, patientExam];

// save to log file
Logger.makeLog(data);