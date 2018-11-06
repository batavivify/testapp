// new doctor
const doctor = new Doctor('Milan','Milanovic','ORL');

//new patient
const patient = new Patient('Dragan', 'Draganovic', '123', '321');

// doctor and patient created log
console.log("Doktor:", doctor.firstName , "je uspesno kreiran!");
console.log("Pacijent", patient.firstname, "je uspesno kreiran!");


// patient choose doctor
const chooseDoctor = patient.chooseDoctor(doctor);
console.log("Pacijent", patient.firstname, "je izabrao", chooseDoctor, "za svog lekara");


// new bloodSugarExam
const bloodSugarExam = doctor.scheduleBloodSugarExamination(doctor, patient);
console.log(bloodSugarExam);
