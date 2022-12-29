const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
<<<<<<< Updated upstream
const knex = require('knex');

const db = knex({
    client: 'pg',
    //connection: 'postgres://admin:2O1RLqA7UxAxFkWFnfqIhfxmztXY5JwT@dpg-cdj1c8kgqg433fdfdf20-a/main_qcvq'
    connection: {
        host: 'localhost',
        user: 'postgres',
        port: '5433',
        password: '1234',
        database: 'postgres'
    }
})
=======
//const knex = require('knex');
const db = require('./local_modules/connection')
const json2xls = require('json2xls');
const fs = require('fs');
const moment = require('moment');
const CryptoJS = require('crypto-js');
require("dotenv").config();

const PORT = process.env.PORT || 3000;

const table = require('./local_modules/migration')

table.generatetable(db)
>>>>>>> Stashed changes

const app = express();

let initialPath = path.join(__dirname, "public");

app.use(bodyParser.json());
app.use(express.static(initialPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(initialPath, "dashboard.html"));
})

app.get('/cif', (req, res) => {
    res.sendFile(path.join(initialPath, "cif.html"));
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(initialPath, "loginPage.html"));
})

//for test
app.get('/register', (req, res) => {
    res.sendFile(path.join(initialPath, "register.html"));
})

app.post('/register-user', (req, res) => {
    const{username, firstname, middlename, lastname, dru, contact, email, password, usertype} = req.body;
    if(!username.length || !firstname.length || !middlename.length || 
        !lastname.length || dru === null || !contact.length ||  !email.length || !password.length || !usertype.length){
        res.json('Fill all fields');
    } else{
        db('staff').insert({
            username: username,
            firstname: firstname,
            middlename: middlename,
            lastname: lastname,
            dru_id: dru,
            contact: contact,
            email: email,
            password: password,
            usertype: usertype
        })
        .returning(["username", "email", "usertype"])
        .then(data =>{
            res.json(data[0])
        })
        .catch(err => {
            if(err.detail.includes('already exists')){
                res.json('Email already exists');
            }
        })
    }
})

app.post('/login-user', (req,res) => {
    const {username, password} = req.body;
    
    db.select('username', 'email', 'usertype')
    .from('staff')
    .where({
        username: username,
        password: password
    })
    .then(data => {
        if(data.length){
            res.json(data[0]);
        } else{
            res.json('Username or password is incorrect');
        }
<<<<<<< Updated upstream
=======
        else if(req.query.to && req.query.from){
            builder.where('cif.date_interview', '>=', req.query.from)
            .andWhere('cif.date_interview', '<', req.query.to)
        }
    })
    .orderBy('cif.id', 'asc')
    .returning()
    .then((data) => {
        for (let key of data) {
            key.date_interview = (key.date_interview != null)? moment(key.date_interview).format('MM/DD/YYYY') : 'N/A'
            key.date_collected = (key.date_collected != null)? moment(key.date_collected).format('MM/DD/YYYY') : 'N/A'
        }
        res.json(data);
    })
})

let joinGenerate = ['cif.id', 'tests.lab_name', 'patient.lastname', 'patient.firstname',
 'patient.sex', 'patient.age', 'tests.date_collected', 'cif.date_interview', 'dru.name']
app.get('/filter-cif?', (req, res) => {
    //console.log(req.query)
    db('cif').leftJoin('tests', 'cif.id', 'tests.lab_test_info_id')
    .leftJoin('patient', 'cif.patient_id', 'patient.id')
    .leftJoin('staff', 'cif.investigator_id', 'staff.id')
    .leftJoin('dru', 'staff.dru_id', 'dru.id')
    .select(joinGenerate)
    .where((builder) => {
        if(req.query['staff.lastname'])
        builder.where('staff.lastname', req.query['staff.lastname'])

        if(req.query['tests.lab_name'])
        builder.where('tests.lab_name', req.query['tests.lab_name'])

        if(req.query['dru.name'])
        builder.where('dru.name', req.query['dru.name'])

        if(req.query.from && !req.query.to){
            builder.where('cif.date_interview', '>=', req.query.from)
        }
        else if(req.query.to && !req.query.from){
            builder.where('cif.date_interview', '<', req.query.to)
        }
        else if(req.query.to && req.query.from){
            builder.where('cif.date_interview', '>=', req.query.from)
            .andWhere('cif.date_interview', '<', req.query.to)
        }
    })
    .orderBy('cif.id', 'asc')
    .returning()
    .then((data) => {
        for (let key of data) {
            key.date_interview = (key.date_interview != null)? moment(key.date_interview).format('MM/DD/YYYY') : 'N/A'
            key.date_collected = (key.date_collected != null)? moment(key.date_collected).format('MM/DD/YYYY') : 'N/A'
        }
        res.json(data);
    })
})

const sel = ['dru.name as dru', 'patient.philhealth_no as philhealth', 'staff.lastname as interviewer_last', 'staff.firstname as interviewer_first', 'staff.contact_number as interviewer_number', 'cif.date_interview as interview_date'
            , 'informant.name as informant', 'patient_informant.relation_to_patient as relation', 'informant.contact_no as informant_contact', 'cif.testing_category as testing_category',
            'patient.lastname as patient_lastname', 'patient.firstname as patient_firstname', 'patient.middlename as patient_middlename', 
            'patient.birthday as patient_birthday', 'patient.age as patient_age', 'patient.sex as patient_sex', 'patient.civil_status as patient_civil_status',
            'patient.nationality as patient_nationality', 'patient.works_in_closed_settings as patient_works_in_closed_settings',
            'patient.permanent_hn_bl_lot_buildno as permanent_hn_bl_lot_buildno', 'patient.permanent_barangay as patient_permanent_barangay',
            'patient.permanent_muni_city as permanent_muni_city', 'patient.permanent_province as permanent_province', 'patient.permanent_home_no as permanent_home_no', 'patient.permanent_cell_no as permanent_cell_no', 'patient.permanent_email as permanent_email',
            'patient.current_hn_bl_lot_buildno as current_hn_bl_lot_buildno', 'patient.current_barangay as current_barangay',
            'patient.current_muni_city as current_muni_city', 'patient.current_province as current_province', 'patient.current_home_no as current_home_no', 'patient.current_cell_no as current_cell_no', 'patient.current_email as current_email',
            'patient.workplace_hn_bl_lot_buildno as workplace_hn_bl_lot_buildno', 'patient.workplace_barangay as workplace_barangay',
            'patient.workplace_muni_city as workplace_muni_city', 'patient.workplace_province as workplace_province', 'patient.workplace_name as workplace_name', 'patient.workplace_cell_no as workplace_cell_no', 'patient.workplace_email as workplace_email',
            'disposition.other as other_disposition', 'disposition.datetime_admission_isolation as date_of_admission', 'case_investigation_details.case_classification_at_consult as case_classification_at_consult',
            'clinical_information.date_of_onset_illness as date_of_onset_illness', 'clinical_information.is_pregnant as is_pregnant', 'clinical_information.is_high_risk_pregnant as is_high_risk_pregnant',
            'clinical_information.date_of_last_mensperiod as date_of_last_mens_period', 'symptoms.is_asymptomatic', 'symptoms.have_fever', 'symptoms.fever_temp', 'symptoms.have_fever', 'symptoms.have_cough', 'symptoms.have_general_weakness',
            'symptoms.experiences_fatigue', 'symptoms.have_headache', 'symptoms.have_myalgia', 'symptoms.have_sore_throat', 'symptoms.have_coryza', 'symptoms.have_dyspnea', 'symptoms.experiences_nausea', 'symptoms.exp_altered_mental_status', 'symptoms.exp_anosmia',
            'symptoms.exp_ageusia', 'clinical_information.is_pregnant', 'clinical_information.is_high_risk_pregnant', 'clinical_information.date_of_last_mensperiod', 'chest_imaging.done_chest_radiography as done_xray', 'chest_imaging.date_chest_radiography as date_xray',
            'chest_imaging.result_chest_radiography as result_xray', 'tests.date_collected', 'tests.date_released', 'tests.is_ops', 'tests.is_nps', 'tests.result',
            'outcome.is_active', 'outcome.is_recovered','outcome.is_dead', 'contact_tracing.has_exposure_people', 'contact_tracing.date_of_contact', 'contact_tracing.has_exposure_place', 'local_contact.place_type', 'local_contact.place_name', 'local_contact.travel_date_to'
            , 'close_contact.name as close_contact_name', 'close_contact.contact_number as close_contact_contact_number']
    app.get('/generate-pdf?', (req, res) => {
    db('cif')
    .leftJoin('patient', 'cif.patient_id', 'patient.id')
    .leftJoin('staff', 'cif.investigator_id', 'staff.id')
    .leftJoin('dru', 'staff.dru_id', 'dru.id')
    .leftJoin('patient_informant', 'patient.id', 'patient_informant.patient_id')
    .leftJoin('informant', 'patient_informant.informant_id', 'informant.id')
    .leftJoin('healthcare_worker', 'patient.id', 'healthcare_worker.patient_id')
    .leftJoin('lsi_apor_localtraveler', 'patient.id', 'lsi_apor_localtraveler.patient_id')
    .leftJoin('living_in_close_settings', 'patient.id', 'living_in_close_settings.patient_id')
    .leftJoin('returning_overseas_filipino', 'patient.id', 'returning_overseas_filipino.patient_id')  
    .leftJoin('cif_type', 'cif.id', 'cif_type.cif_id')
    .leftJoin('for_update', 'cif.id', 'for_update.cif_id')
    .leftJoin('case_investigation_details', 'cif.id', 'case_investigation_details.cif_id')
    .leftJoin('have_prev_consultation', 'case_investigation_details.cif_id', 'have_prev_consultation.cid_id')
    .leftJoin('disposition', 'case_investigation_details.cif_id', 'disposition.cid_id')
    .leftJoin('vaccination_info', 'case_investigation_details.cif_id', 'vaccination_info.cid_id')
    .leftJoin('clinical_information', 'case_investigation_details.cif_id', 'clinical_information.cid_id')
    .leftJoin('symptoms', 'clinical_information.cid_id', 'symptoms.cli_info_id')
    .leftJoin('comorbidities', 'clinical_information.cid_id', 'comorbidities.cli_info_id')
    .leftJoin('chest_imaging', 'clinical_information.cid_id', 'chest_imaging.cli_info_id')
    .leftJoin('lab_test', 'clinical_information.cid_id', 'lab_test.cli_info_id')
    .leftJoin('tests', 'lab_test.cli_info_id', 'tests.lab_test_info_id')
    .leftJoin('outcome', 'clinical_information.cid_id', 'outcome.cli_info_id')
    .leftJoin('contact_tracing', 'cif.id', 'contact_tracing.cif_id')
    .leftJoin('international_contact', 'contact_tracing.cif_id', 'international_contact.tracing_id')
    .leftJoin('close_contact', 'contact_tracing.cif_id', 'close_contact.tracing_id')
    .leftJoin('local_contact', 'contact_tracing.cif_id', 'local_contact.tracing_id')
    .leftJoin('local_transport', 'contact_tracing.cif_id', 'local_transport.local_contact_id')
    .select(sel)
    //put aliases to select array
    .where(req.query)
    .returning()

    // .then((data) => {
    //     console.log(data[0])
    //     const xlsx = json2xls(data[0])
    //     fs.writeFileSync('test.xlsx', xlsx,'binary', (err) => {
    //         if (err) {
    //               console.log("writeFileSync :", err);
    //          }
    //        console.log("file is saved!");
    //     });
    // })
    .then((data) => {
        res.json(data)
    })
})

// insert request (not tested yet)
app.post('/insert-cif', async (req, res) => {
    // const body
    const {investigator,
        
            philhealth_no,
            firstname, middlename, lastname,
            age, sex, birthday, occupation, civil_status, nationality,
            permanent_hn_bl_lot_buildno, permanent_barangay,
            permanent_muni_city, permanent_province, permanent_region,
            permanent_home_no, permanent_cell_no, permanent_email,
            current_hn_bl_lot_buildno, current_barangay, current_muni_city,
            current_province, current_region, current_home_no, current_cell_no,
            current_email, 
            
            employer_name, employer_occupation,
         
            workplace_name, workplace_hn_bl_lot_buildno,
            workplace_barangay, workplace_muni_city, workplace_province,
            workplace_region, workplace_home_no, workplace_cell_no, //region to country
            workplace_email, works_in_closed_settings,
            
           
            have_ongoing_transmission,  
            
           
            airline_vessel_name, airline_vessel_number, departure_date, arrival_date,
            has_exposure_people, date_of_contact, has_exposure_place, travel_date_from, travel_date_to, international_contact_country_origin, 

          
            name, contact_number,

            u_disposition, disposition,
            
            admitted_in, name_of_facility, datetime_admission_isolation, 

            fever_temp, is_asymptomatic, have_fever, have_cough, have_general_weakness, experiences_fatigue, have_headache, have_myalgia, have_sore_throat, have_coryza, have_dyspnea, experiences_nausea, exp_altered_mental_status, exp_anosmia, exp_ageusia, //other //no anorexia, diarrhea here
            
            
            done_chest_radiography, date_chest_radiography, result_chest_radiography, done_chest_ct, date_chest_ct, result_chest_ct, done_chest_ultrasound, date_chest_ultrasound, result_chest_ultrasound, other_findings, 
           
            is_pregnant, date_of_last_mensperiod, 

            informant_name, informant_contactno, 
        
            relation_to_patient,
            
            health_facility_name, health_facility_address,
            
            date_interview, client_classification, testing_category, validation_status
            ,is_new_case, is_unknown, other,
            symptoms, health_status, case_classification, vaccination, lab_result, chest_image_findings, exposure
            ,date_of_onset_illness, is_diagnosed_to_sari,
            have_gastrointestinal, have_hypertension, have_genito_urinary, have_diabetes, have_neuro_disease, have_heart_disease, have_cancer, have_lung_disease, comorbidities_other
            , is_active, is_recovered, date_recovered, is_dead, date_death, immediate_cause_death, underlying_cause_death, antecedent_cause_death, contributory_cause_death
            ,place_type, place_name, address, local_contact_travel_date_from, local_contact_travel_date_to, local_contact_have_ongoing_transmission
            ,transport_type, transport_number, origin, destination, local_transport_departure_date, local_transport_arrival_date,
            city_mun_origin, province_origin, is_lsi, is_apor_localtraveler,
            institution_name, institution_type,
            country_origin, 
            
           returning_overseas_filipino_country_origin, returning_overseas_filipino_health_facility_address,
            health_status_at_consult, case_classification_at_consult,
            date_of_consultation, consultation_facility_name, is_high_risk_pregnant,

            
            name_of_vaccine, vaccination_date, dose_number, vaccination_facility_name, vaccination_facility_region, adverse_effect,
            
           
            
           
            test_positive_before, date_specimen_collection, lab_name, test_count,
          
            date_collected, date_released, tests_lab_name, is_ops, is_nps, is_antigen, reason_antigen, kit_brand, done_antibody, other_test, result
            
            } = req.body;
            console.log(req.body)
    var investigator_id = 0;
    var patient_id = 0;
    var informant_id = 0;
    var cif_id = 0;
    var cid_id = 0;
    var cli_info_id = 0;
    var tracing_id = 0;
    var lab_test_info_id = 0;
   
    var local_contact_id = 0;
    await db
    .select('id')
    .from('staff')
    .where('lastname', `${investigator}`)
    .then((data) => {
        //res.json(data);
        investigator_id = data[0].id;
>>>>>>> Stashed changes
    })
})

//for testing
app.get('/fetch-dru', (req, res) => {
    db.select('name')
        .from('dru')
        .returning()
        .then(data => {
            res.json(data)
        })
})

app.listen(3000, (req, res) => {
    console.log('Listening on port 3000.')
})