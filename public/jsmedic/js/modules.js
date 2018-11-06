class Doctor {


    constructor(firstName, lastName, specialty) {
        this.patients = [];
        this.firstName = firstName;
        this.lastName = lastName;
        this.specialty = specialty
    }

    addPatient(patient) {
        this.patient = patient;
        var patients = []; // treba ovaj niz da popnem na nivo klase
        patients.push(this.patient);
        console.log(patients);
    }

    scheduleBloodSugarExamination(doctor, patient) {
        const BSExam = new BloodSugarExamination(doctor, patient, '01-01-2018', '01-01-2018')

    }
}

class Patient {
    constructor(firstName, lastName, idNumber, idMedical) {
        this.firstname = firstName;
        this.lastname = lastName;
        this.idNumber = idNumber;
        this.idMedical = idMedical;
    }

    chooseDoctor(doctor) {
        this.doctor = doctor;
        this.doctor.addPatient(patient);
        return `${this.doctor.firstName}`
    }

}

class Examination {

    constructor(patient, doctor, scheduleTime) {
        this.patient = patient;
        this.doctor = doctor;
        this.scheduleTime = scheduleTime;
    }

}

class BloodSugarExamination extends Examination {


    constructor(patient, doctor, scheduleTime, lastMealAt ) {
        super(patient, doctor, scheduleTime);
        this.lastMealAt = lastMealAt;
    }

    simulate() {
        this.value = Math.random() * (200 - 40) + 40;
    }

}