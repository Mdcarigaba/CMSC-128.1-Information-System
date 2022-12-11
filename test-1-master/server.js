const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
//const knex = require('knex');
const db = require('./local_modules/connection')
/*
const db = knex({
    client: 'pg',
    //connection: 'postgres://admin:2O1RLqA7UxAxFkWFnfqIhfxmztXY5JwT@dpg-cdj1c8kgqg433fdfdf20-a/main_qcvq'
    //make sure that you have a user 'postgres' with password '1234' and database 'postgres'
    //with port '5433' for the database to be connected
    
    connection: {
        host: 'localhost',
        user: 'postgres',
        port: '5432',
        password: '1234',
        //password: '1234',
        database: 'postgres'
    }
    //change connection 
})
*/
const table = require('./local_modules/migration')

table.generatetable(db)
//insert tables in the database
//check for presence of table first
//if not present, create a new table
//chain this with other has table check for all 32+ tables

const app = express();

let initialPath = path.join(__dirname, "public");

app.use(bodyParser.json());
app.use(express.static(initialPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(initialPath, "dashboard.html"));
})

/*app.get('/cif', (req, res) => {
    res.sendFile(path.join(initialPath, "cif.html"));
})*/

app.get('/login', (req, res) => {
    res.sendFile(path.join(initialPath, "loginPage.html"));
})

//for test
app.get('/register', (req, res) => {
    res.sendFile(path.join(initialPath, "register.html"));
})

app.get('/', (req, res) => {
    res.sendFile(path.join(initialPath, "dashboard.html"));
})

app.get('/search-patient', (req, res) => {
    res.sendFile(path.join(initialPath, "search-patient.html"));
})

app.get('/generate-forms', (req, res) => {
    res.sendFile(path.join(initialPath, "generate-forms.html"));
})

app.get('/cif', (req, res) => {
    res.sendFile(path.join(initialPath, "cif-entry.html"));
})

app.get('/DRUqueueing', (req, res) => {
    res.sendFile(path.join(initialPath, "DRUqueueing.html"));
})

//make some fx within post request of cif entry
//cut array into multiple entries

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
    })
})

// search request (not tested yet)
let joinSearch = ['cif.id', 'tests.lab_name', 'patient.lastname', 'patient.firstname',
 'patient.middlename', 'patient.sex', 'cif.date_interview', 'tests.date_collected']
app.get('/search-cif?', (req, res) => {
    db('cif').leftJoin('tests', 'cif.id', 'tests.lab_test_info_id')
    .leftJoin('patient', 'cif.patient_id', 'patient.id')
    .select(joinSearch)
    .where(req.query)
    .returning()
    .then((data) => {
        res.json(data);
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
            //added 
            employer_name, employer_occupation,
            //end added
            workplace_name, workplace_hn_bl_lot_buildno,
            workplace_barangay, workplace_muni_city, workplace_province,
            workplace_region, workplace_home_no, workplace_cell_no,
            workplace_email, works_in_closed_settings,
            
            informant_name, informant_contactno,
            
            
            //add here lang muna hihu
        
            relation_to_patient,
            
            health_facility_name, health_facility_address,
            
            date_interview, client_classification, testing_category, validation_status
            ,is_new_case, is_unknown, other,
            symptoms, health_status, case_classification, vaccination, lab_result, chest_image_findings, disposition, exposure
            ,date_of_onset_illness, is_pregnant, date_of_last_mensperiod, is_diagnosed_to_sari,
            have_gastrointestinal, have_hypertension, have_genito_urinary, have_diabetes, have_neuro_disease, have_heart_disease, have_cancer, have_lung_disease, comorbidities_other
            , is_active, is_recovered, date_recovered, is_dead, date_death, immediate_cause_death, underlying_cause_death, antecedent_cause_death, contributory_cause_death
            ,place_type, place_name, address, local_contact_travel_date_from, local_contact_travel_date_to, local_contact_have_ongoing_transmission
            ,transport_type, transport_number, origin, destination, local_transport_departure_date, local_transport_arrival_date,
            city_mun_origin, province_origin, is_lsi, is_apor_localtraveler,
            institution_name, institution_type,
            country_origin, // oh no d ito unique: health_facility_address
            
            /**cif_id ,
           
            city_mun_origin, province_origin, is_lsi, is_apor_localtraveler,
            institution_name, institution_type,
            country_origin, /* oh no d ito unique:*/ returning_overseas_filipino_country_origin, returning_overseas_filipino_health_facility_address,
            health_status_at_consult, case_classification_at_consult,
            date_of_consultation, consultation_facility_name,
            //cid_id sa disposition
            admitted_in, name_of_facility, datetime_admission_isolation, //other
            //cid din sa vaccination_info
            name_of_vaccine, vaccination_date, dose_number, vaccination_facility_name, vaccination_facility_region, adverse_effect,
            //cid din sa clinical_information
           
            //symptoms: cli_info_id
            is_asymptomatic, have_fever, fever_temp, have_cough, have_general_weakness, experiences_fatigue, have_headache, have_myalgia, have_sore_throat, have_coryza, have_dyspnea, experiences_nausea, exp_altered_mental_status, exp_anosmia, exp_ageusia, //other
            //comorbidities: cli_info_id
            
            //chest_imaging: cli_info_id
            done_chest_radiography, date_chest_radiography, result_chest_radiography, done_chest_ct, date_chest_ct, result_chest_ct, done_chest_ultrasound, date_chest_ultrasound, result_chest_ultrasound, other_findings, // what if other_chest_findings
            //lab_test: cli_info_id
            test_positive_before, date_specimen_collection, lab_name, test_count,
            //test: lab_test_info_id
            date_collected, date_released, tests_lab_name, is_ops, is_nps, is_antigen, reason_antigen, kit_brand, done_antibody, other_test,
            //outcome: cli_info_id
           
            //contact_tracing: cif_id
            has_exposure_people, date_of_contact, has_exposure_place,
            //international_contact: tracing_id
            have_ongoing_transmission, travel_date_from, travel_date_to, international_contact_country_origin, airline_vessel_name, airline_vessel_number, departure_date, arrival_date,
            //close_contact: tracing_id
            name, contact_number,
            //local_contact: tracing_id
            
            //local_transport: local_contact_id
            
            //dru_queue: 
            dru_id, entry_count, submission_from, submission_to
            
            } = req.body;
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
    })
    .then(
        async () => {
            await db('patient')
            .insert({
                philhealth_no: philhealth_no,
                firstname: firstname,
                middlename: middlename,
                lastname: lastname,
                age: age,
                sex: sex,
                birthday: birthday,
                occupation: occupation,
                civil_status: civil_status,
                nationality: nationality,
                permanent_hn_bl_lot_buildno: permanent_hn_bl_lot_buildno,
                permanent_barangay: permanent_barangay,
                permanent_muni_city: permanent_muni_city,
                permanent_province: permanent_province,
                permanent_region: permanent_region,
                permanent_home_no: permanent_home_no,
                permanent_cell_no: permanent_cell_no,
                permanent_email: permanent_email,
                current_hn_bl_lot_buildno: current_hn_bl_lot_buildno,
                current_barangay: current_barangay,
                current_muni_city: current_muni_city,
                current_province: current_province,
                current_region: current_region,
                current_home_no: current_home_no,
                current_cell_no: current_cell_no,
                current_email: current_email,
                workplace_name: workplace_name, 
                workplace_hn_bl_lot_buildno: workplace_hn_bl_lot_buildno,
                workplace_barangay: workplace_barangay, 
                workplace_muni_city: workplace_muni_city, 
                workplace_province: workplace_province,
                workplace_region: workplace_region, 
                workplace_home_no: workplace_home_no, 
                workplace_cell_no: workplace_cell_no,
                workplace_email: workplace_email, 
                works_in_closed_settings: works_in_closed_settings
            })
            .returning('id')
            .then((data) => {
                //res.json(data);
                patient_id = data[0].id;
                //console.log(data)
            })
        }
    )
    .then(
        async () => {
            if(informant_name.length != 0){
                await db('informant')
            .insert({
                name: informant_name,
                contact_no : informant_contactno
            })
            .returning('id')
            .then((data) => {
                informant_id = data[0].id
                //res.json(data)
            })
            }
        }
    )
    .then(
        async () => {
            await db('patient_informant')
            .insert({
                patient_id: patient_id,
                informant_id: informant_id,
                relation_to_patient: relation_to_patient
            })
            //.returning(['patient_id', 'informant_id', 'relation_to_patient'])
            /*.then((data) => {
                //res.json(data);
            })
            */
        }
    )
    //skipped hc_w to rof
    .then(
        async () => {
            await db('healthcare_worker')
            .insert({
                patient_id: patient_id,
                health_facility_name: health_facility_name,
                health_facility_address: health_facility_address,
            })
            /*
            .returning(['patient_id', 'health_facility_name', 'health_facility_address'])
            .then((data) => {
                res.json(data)
            })
            */
        }
    )
    .then(
        async () => {
            await db('lsi_apor_localtraveler')
            .insert({
                patient_id: patient_id,
                city_mun_origin: city_mun_origin,
                province_origin: province_origin,
                is_lsi: is_lsi,
                is_apor_localtraveler: is_apor_localtraveler,
            })
        }
    )
    .then(
        async () => {
            await db('living_in_close_settings')
            .insert({
                patient_id: patient_id,
                institution_name: institution_name,
                institution_type: institution_type,
            })
        }
    )
    .then(
        async () => {
            await db('returning_overseas_filipino')
            .insert({
                patient_id: patient_id,
                country_origin: returning_overseas_filipino_country_origin,
                health_facility_address: returning_overseas_filipino_health_facility_address,
            })
        }
    )
    .then(
        async () => {
            await db('cif')
            .insert({
                patient_id: patient_id,
                investigator_id: investigator_id,
                date_interview: date_interview,
                client_classification: client_classification,
                testing_category: testing_category,
                validation_status: validation_status
            })
            .returning('id')
            .then((data) => {
                cif_id = data[0].id;
            })
        }
    )
    .then(
        async () => {
            await db('cif_type')
            .insert({
                cif_id: cif_id,
                is_new_case: is_new_case,
                is_unknown: is_unknown,
                other: other
            })
            /*
            .returning(['cif_id', 'is_new_case', 'is_unknown','other'])
            .then((data) => {
                res.json(data);
            })
            */
        }
    )
    .then(
        async () => {
            await db('for_update')
            .insert({
                cif_id: cif_id,
                symptoms: symptoms,
                health_status: health_status,
                case_classification: case_classification,
                vaccination: vaccination,
                lab_result: lab_result,
                chest_image_findings:chest_image_findings,
                disposition: disposition,
                exposure: exposure
            })
        }   
    )
    .then(
        async () => {
            await db('case_investigation_details')
            .insert({
                cif_id: cif_id,
                health_status_at_consult: health_status_at_consult,
                case_classification_at_consult: case_classification_at_consult,
            })
            .returning('cif_id')
            .then((data)=> {
                cid_id = data[0].cif_id;
            })
        }
    )
    .then(
        async () => {
            await db('have_prev_consultation')
            .insert({
                cid_id: cid_id,
                date_of_consultation: date_of_consultation,
                consultation_facility_name: consultation_facility_name,
            })
        }
    )
    .then(
        async () => {
            await db('disposition')
            .insert({
                cid_id: cid_id,
                admitted_in: admitted_in,
                name_of_facility: name_of_facility,
                datetime_admission_isolation: datetime_admission_isolation,
            })
        }
    )

    .then(
        async () => {
            await db('vaccination_info')
            .insert({
                cid_id: cid_id,
                name_of_vaccine: name_of_vaccine,
                vaccination_date: vaccination_date,
                dose_number: dose_number,
                vaccination_facility_name: vaccination_facility_name,
                vaccination_facility_region: vaccination_facility_region,
                adverse_effect: adverse_effect,
            })
        }
    )
    .then(
        async () => {
            await db('clinical_information')
            .insert({
                cid_id: cid_id,
                date_of_onset_illness: date_of_onset_illness,
                is_pregnant: is_pregnant,
                date_of_last_mensperiod: date_of_last_mensperiod,
                is_diagnosed_to_sari: is_diagnosed_to_sari
            })
            .returning('cid_id')
            .then((data) => {
                cli_info_id = data[0].cid_id;
            })
        }
    )
    .then(
        async () => {
            await db('symptoms')
            .insert({
                cli_info_id: cli_info_id,
                is_asymptomatic: is_asymptomatic,
                have_fever: have_fever,
                fever_temp: fever_temp,
                have_cough: have_cough, 
                have_general_weakness: have_general_weakness,
                experiences_fatigue: experiences_fatigue,
                have_headache: have_headache,
                have_myalgia: have_myalgia,
                have_sore_throat: have_sore_throat,
                have_coryza: have_coryza,
                have_dyspnea: have_dyspnea,
                experiences_nausea: experiences_nausea,
                exp_altered_mental_status: exp_altered_mental_status,
                exp_anosmia: exp_anosmia,
                exp_ageusia: exp_ageusia,

            })
        }
    )
    .then(
        async () => {
            await db('comorbidities')
            .insert({
                cli_info_id: cli_info_id,
                have_gastrointestinal: have_gastrointestinal,
                have_hypertension: have_hypertension,
                have_genito_urinary: have_genito_urinary,
                have_diabetes: have_diabetes,
                have_neuro_disease: have_neuro_disease,
                have_heart_disease: have_heart_disease,
                have_cancer: have_cancer,
                have_lung_disease: have_lung_disease,
                other: comorbidities_other
            })
        }
    )
    .then(
        async () => {
            await db ('chest_imaging')
            .insert({
                cli_info_id: cli_info_id,
                done_chest_radiography: done_chest_radiography, 
                date_chest_radiography: date_chest_radiography, 
                result_chest_radiography: result_chest_radiography, 
                done_chest_ct: done_chest_ct, 
                date_chest_ct: date_chest_ct, 
                result_chest_ct: result_chest_ct, 
                done_chest_ultrasound: done_chest_ultrasound, 
                date_chest_ultrasound: date_chest_ultrasound, 
                result_chest_ultrasound: result_chest_ultrasound, 
                other_findings: other_findings,
            })
        }
    )
    .then(
        async () => {
            await db ('lab_test')
            .insert({
                cli_info_id: cli_info_id,
                test_positive_before: test_positive_before, 
                date_specimen_collection: date_specimen_collection, 
                lab_name: lab_name, 
                test_count: test_count,
            }).returning('cli_info_id')
            .then((data) => {
                lab_test_info_id = data[0].id
            })
        }
    )
    .then(
        async () => {
            await db ('tests')
            .insert({
                lab_test_info_id: lab_test_info_id,
                date_collected: date_collected, 
                date_released: date_released, 
                lab_name: tests_lab_name, 
                is_ops: is_ops, 
                is_nps: is_nps, 
                is_antigen: is_antigen,
                reason_antigen: reason_antigen, 
                kit_brand: kit_brand, 
                done_antibody: done_antibody, 
                other_test: other_test,
            })
        }
    )
    .then(
        async () => {
            await db('outcome')
            .insert({
                cli_info_id: cli_info_id,
                is_active: is_active,
                is_recovered: is_recovered,
                date_recovered: date_recovered,
                is_dead: is_dead,
                date_death: date_death,
                immediate_cause_death: immediate_cause_death,
                underlying_cause_death: underlying_cause_death,
                antecedent_cause_death: antecedent_cause_death,
                contributory_cause_death: contributory_cause_death
            })
        }
    )
    .then(
        async () => {
            await db('contact_tracing')
            .insert({
                cif_id: cif_id,
                has_exposure_people: has_exposure_people, 
                date_of_contact: date_of_contact, 
                has_exposure_place: has_exposure_place,
            })
            .returning('cif_id')
            .then((data)=> {
                tracing_id = data[0].tracing_id;
            })
        }
    )
    .then(
        async () => {
            await db('international_contact')
            .insert({
                tracing_id: tracing_id,
                have_ongoing_transmission: have_ongoing_transmission, 
                travel_date_from: travel_date_from,
                travel_date_to: travel_date_to, 
                country_origin: international_contact_country_origin,
                airline_vessel_name: airline_vessel_name, 
                airline_vessel_number: airline_vessel_number, 
                departure_date: departure_date, 
                arrival_date: arrival_date
            })
        }
    )
    .then(
        async () => {
            await db('close_contact')
            .insert({
                tracing_id: tracing_id,
                name: name, 
                contact_number: contact_number
            })
        }
    )
    .then(
        async () => {
            await db('local_contact')
            .insert({
                tracing_id: tracing_id,
                place_type: place_type,
                place_name: place_name,
                address: address,
                travel_date_from: local_contact_travel_date_from,
                travel_date_to: local_contact_travel_date_to,
                have_ongoing_transmission: local_contact_have_ongoing_transmission
            })
            .returning('tracing_id')
            .then((data) => {
                local_contact_id = data[0].tracing_id;
            })
        }
    )
    .then(
        async () => {
            await db('local_transport')
            .insert({
                local_contact_id: local_contact_id,
                transport_type: transport_type,
                transport_number: transport_number,
                origin: origin,
                departure_date: local_transport_departure_date,
                destination: destination,
                arrival_date: local_transport_arrival_date
            })
        }
    )
    .then(
        async () => {
            await db('dru_queue')
            .insert({
                dru_id: dru_id,
                entry_count: entry_count,
                submission_from: submission_from,
                submission_to: submission_to
            })
        }
    )
    .then(
        () => {
            res.json([{"dru_id": dru_id}])
        }
    )
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