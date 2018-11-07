class Doctor {

    constructor(firstName, lastName, specialty) {
        // this.patients = [];
        this.firstName = firstName;
        this.lastName = lastName;
        this.specialty = specialty
    }

    addPatient(patient) {
        var patients = [];
        this.patient = patient;
        patients.push(this.patient);
        console.log("Pacijenti koje ovaj doktor ima:", patients);
    }

    scheduleSugar(doctor, patient) {
        const scheduled = new Sugar(doctor, patient, '01-01-2018', '01-01-2018');
        return scheduled;
    }

    schedulePresure(doctor, patient) {
        const scheduled = new Pressure(doctor, patient, '02-02-2018');
        return scheduled;
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

    static performSugar() {
        const perform = new Sugar(patient, doctor,'01-01-2018', '01-01-2018');
        return perform.simulate();
    }

    static performPressure() {
        const perform = new Pressure(patient, doctor, '02-02-2018');
        perform.simulate();
        const results = [perform.getLowerValue(), perform.getUpperValue(), perform.getPulse()];
        return results;
    }

}

class Examination {

    constructor(patient, doctor, scheduleTime) {
        this.patient = patient;
        this.doctor = doctor;
        this.scheduleTime = scheduleTime;
    }

}

class Sugar extends Examination {

    constructor(patient, doctor, scheduleTime, lastMealAt ) {
        super(patient, doctor, scheduleTime);
        this.lastMealAt = lastMealAt;
    }


    simulate() {
        return this.value = Math.round(Math.random() * (30 + 60)) / 10;
    }

}

class Pressure extends Examination {
    constructor(patient, doctor, scheduleTime ) {
        super(patient, doctor, scheduleTime);
    }

    simulate() {
        this.lowerValue = Math.floor(Math.random() * 110) + 60;
        this.upperValue = Math.floor(Math.random() * 140) + 110;
        this.pulse = Math.round(Math.random() * (60 + 120)) / 10;
    }

    getLowerValue() {
        return this.lowerValue;
    }

    getUpperValue() {
        return this.upperValue;
    }

    getPulse() {
        return this.pulse;
    }
}