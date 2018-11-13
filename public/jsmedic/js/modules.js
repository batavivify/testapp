class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFirstName() {
        return this.firstName;
    }

}


class Doctor extends Person {

    constructor(firstName, lastName, specialty) {
        super(firstName, lastName);
        this.specialty = specialty;
    }

    addPatient(patient) {
        const patients = [];
        this.patient = patient;
        patients.push(this.patient);
        console.log("Pacijenti koje ovaj doktor ima:", patients);
    }

    logDoctorCreated() {
        return [ Logger.now() + " Kreiran je doktor: " + doctor.getFirstName() + "\n"];
    }

    logDoctorChoosen() {
        return [ Logger.now() + " Pacijent " + patient.getFirstName() + " je izabrao doktora " + doctor.getFirstName() + "\n"];
    }

}

class Patient extends Person {
    constructor(firstName, lastName, idNumber, idMedical) {
        super(firstName, lastName);
        this.idNumber = idNumber;
        this.idMedical = idMedical;
    }

    chooseDoctor(doctor) {
        this.doctor = doctor;
        this.doctor.addPatient(patient);
        return `${this.doctor.firstName}`
    }

    logPatientCreated() {
        return [ Logger.now() + " Kreiran je pacijent " + patient.getFirstName() + "\n"];
    }

    logPatientExam() {
        return [ Logger.now() + " Pacijent " + patient.getFirstName() + " je obavio lekarski pregled" + "\n"];
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

    performSugar() {
        return this.simulate();
    }

    simulate() {
        return this.value = Math.round(Math.random() * (30 + 60)) / 10;
    }

}

class Pressure extends Examination {
    constructor(patient, doctor, scheduleTime ) {
        super(patient, doctor, scheduleTime);
    }

    performPressure() {
        return this.simulate();
    }

    simulate() {
        this.lowerValue = Math.floor(Math.random() * 110) + 60;
        this.upperValue = Math.floor(Math.random() * 140) + 110;
        this.pulse = Math.round(Math.random() * (60 + 120)) / 10;

        return [this.lowerValue, this.upperValue, this.pulse];
    }

}

class Logger {

    static now() {
        const currentDate = new Date();

        const date = currentDate.getDate();
        const month = currentDate.getMonth();
        const year = currentDate.getFullYear();
        const hour = currentDate.getHours();
        const minutes = currentDate.getMinutes();

        const dateString = "[ " +date + "." +(month + 1) + "." + year + hour + ":" + minutes + " ]";

        return dateString;
    }

    static makeLog(data) {

        let textFile = null,
            makeTextFile = function (text) {
                const data = new Blob([text], {type: 'text/plain'});

                if (textFile !== null) {
                    window.URL.revokeObjectURL(textFile);
                }

                textFile = window.URL.createObjectURL(data);
                return textFile;
            };

        // generate file
        const link = document.getElementById('downloadlink');
        link.href = makeTextFile(data.join(""));

    };

}