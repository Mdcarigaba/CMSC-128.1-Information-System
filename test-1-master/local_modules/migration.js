const Papa = require('papaparse')
const fs = require('fs')
const dru_list = fs.createReadStream('DRU Directory - Sheet1.csv')
const CryptoJS = require('crypto-js');
require("dotenv").config();

var functions = {
    generatetable: async (db) => {
        await db.schema.hasTable('dru').then(async (e) => {
            if (!e) {
                await db.schema.createTable('dru', (t) => {
                    t.increments('id').primary();
                    t.string('name');
                    t.string('contact_person');
                    t.string('contact_details');
                    t.string('geamh');
                    t.string('telephone');
                })
                    .then(console.log('table created 1'))
                    //then enter initial values
                    .then(async () => {
                        Papa.parse(dru_list, {
                            header: true,
                            complete: async function(results, file) {
                                await db('dru').insert(results.data)
                            }
                        })           
                    })
            }
            else {
                //no code here, just for debugging 
                console.log('table already exists 1')
            }
        })
            .then(
                async () => {
                    await db.schema.hasTable('staff')
                        .then(async (e) => {
                            if (!e) {
                                await db.schema.createTable('staff', (t) => {
                                    t.increments('id').primary();
                                    t.string('username');
                                    t.string('firstname');
                                    t.string('middlename');
                                    t.string('lastname');
                                    t.integer('dru_id').unsigned();
                                    t.foreign('dru_id').references('dru.id');
                                    t.string('contact_number');
                                    t.string('email').unique();
                                    t.string('password');
                                    t.string('role');
                                })
                                    .then(console.log('table created 2'))
                                //then inset values
                                .then(async () => await db('staff').insert([
                                    {
                                        username: 'jmoraleja',
                                        firstname: 'Japeth',
                                        middlename: '',
                                        lastname: 'Moraleja',
                                        dru_id: 1,
                                        contact_number: '999999999',
                                        email: 'jmoraleja@gmail.com',
                                        password: CryptoJS.AES.encrypt('jmoraleja', process.env.KEY).toString(),
                                        role: 'system administrator'
                                    },
                                    {
                                        username: 'lmelon',
                                        firstname: 'Loisse',
                                        middlename: '',
                                        lastname: 'Melon',
                                        dru_id: 2,
                                        contact_number: '999999999',
                                        email: 'lcmelon@up.edu.ph',
                                        password: CryptoJS.AES.encrypt('lmelon', process.env.KEY).toString(),
                                        role: 'laboratory staff'
                                    },
                                    {
                                        username: 'ldiuco',
                                        firstname: 'Lindsey',
                                        middlename: '',
                                        lastname: 'Diuco',
                                        dru_id: 3,
                                        contact_number: '999999999',
                                        email: 'ldiuco@up.edu.ph',
                                        password: CryptoJS.AES.encrypt('ldiuco', process.env.KEY).toString(),
                                        role: 'pathologist'
                                    },
                                    {
                                        username: 'dmagsino',
                                        firstname: 'Dea',
                                        middlename: '',
                                        lastname: 'Magsino',
                                        dru_id: 4,
                                        contact_number: '999999999',
                                        email: 'dmagsino@up.edu.ph',
                                        password: CryptoJS.AES.encrypt('dmagsino', process.env.KEY).toString(),
                                        role: 'consultant'
                                    },
                                    {
                                        username: 'acarigaba',
                                        firstname: 'Anna',
                                        middlename: '',
                                        lastname: 'Carigaba',
                                        dru_id: 1,
                                        contact_number: '999999999',
                                        email: 'acarigaba@up.edu.ph',
                                        password: CryptoJS.AES.encrypt('acarigaba', process.env.KEY).toString(),
                                        role: 'laboratory manager'
                                    },
                                    {
                                        username: 'esalongsongan',
                                        firstname: 'Eron',
                                        middlename: '',
                                        lastname: 'Salongsongan',
                                        dru_id: 7,
                                        contact_number: '999999999',
                                        email: 'esalongsongan@up.edu.ph',
                                        password: CryptoJS.AES.encrypt('esalongsongan', process.env.KEY).toString(),
                                        role: 'quality assurance officer'
                                    },
                                    {
                                        username: 'smagboo',
                                        firstname: 'Sheila',
                                        middlename: '',
                                        lastname: 'Magboo',
                                        dru_id: 1,
                                        contact_number: '999999999',
                                        email: 'smagboo@up.edu.ph',
                                        password: CryptoJS.AES.encrypt('smagboo', process.env.KEY).toString(),
                                        role: 'health officer'
                                    },
                                    {
                                        username: 'mmarasigan',
                                        firstname: 'Marbert',
                                        middlename: '',
                                        lastname: 'Marasigan',
                                        dru_id: 9,
                                        contact_number: '999999999',
                                        email: 'mmarasigan@up.edu.ph',
                                        password: CryptoJS.AES.encrypt('mmarasigan', process.env.KEY).toString(),
                                        role: 'hospital staff'
                                    },
                                    {
                                        username: 'amilano',
                                        firstname: 'Alia',
                                        middlename: '',
                                        lastname: 'Milano',
                                        dru_id: 15,
                                        contact_number: '999999999',
                                        email: 'amilano@hotmail.com',
                                        password: CryptoJS.AES.encrypt('amilano', process.env.KEY).toString(),
                                        role: 'researcher'
                                    }
                                ]))
                            }
                            else {
                                console.log('table already exists 2')
                            }
                        })
                })
                .then(
                    async ()=>{
                        await db.schema.hasTable('patient')
                        .then(async (e) => {
                            if(!e){
                                await db.schema.createTable('patient', (t) => {
                                    t.increments('id').primary();
                                    t.string('philhealth_no');
                                    t.string('firstname');
                                    t.string('middlename');
                                    t.string('lastname');
                                    t.integer('age').unsigned();
                                    t.string('sex');
                                    t.date('birthday');
                                    t.string('occupation');
                                    t.string('civil_status');
                                    t.string('nationality');
                                    t.string('permanent_hn_bl_lot_buildno');
                                    t.string('permanent_barangay');
                                    t.string('permanent_muni_city');
                                    t.string('permanent_province');
                                    t.string('permanent_region');
                                    t.string('permanent_home_no');
                                    t.string('permanent_cell_no');
                                    t.string('permanent_email');
                                    t.string('current_hn_bl_lot_buildno');
                                    t.string('current_barangay');
                                    t.string('current_muni_city');
                                    t.string('current_province');
                                    t.string('current_region');
                                    t.string('current_home_no');
                                    t.string('current_cell_no');
                                    t.string('current_email');
                                    t.string('workplace_name');
                                    t.string('workplace_hn_bl_lot_buildno');
                                    t.string('workplace_barangay');
                                    t.string('workplace_muni_city');
                                    t.string('workplace_province');
                                    t.string('workplace_region');
                                    t.string('workplace_home_no');
                                    t.string('workplace_cell_no');
                                    t.string('workplace_email');
                                    t.string('works_in_closed_settings');
                                })
                                .then(console.log('created table 5'))
                            }
                            else{
                                console.log('table already exists')
                            }
                        })
                    }
                )
                .then(
                    async () => {
                        await db.schema.hasTable('informant')
                        .then(async (e) => {
                            if(!e){
                                await db.schema.createTable('informant', (t) => {
                                    t.increments('id').primary();
                                    t.string('name');
                                    t.string('contact_no');
                                })
                                .then(console.log('created table 6'))
                            }
                            else{
                                console.log('table already exists')
                            }
                        })
                    }
                )
                .then(
                    async () => {
                        await db.schema.hasTable('patient_informant')
                        .then(async (e) => {
                            if(!e){
                                await db.schema.createTable('patient_informant', (t) => {
                                    t.integer('patient_id').unsigned();
                                    t.foreign('patient_id').references('patient.id');
                                    t.integer('informant_id').unsigned();
                                    t.foreign('informant_id').references('informant.id');
                                    t.string('relation_to_patient');
                                    t.primary(['patient_id', 'informant_id']);
                                })
                                .then(console.log('created table 7'))
                            }
                            else{
                                console.log('table already exists')
                            }
                        })
                    }
                )
                .then(
                    async () => {
                        await db.schema.hasTable('healthcare_worker')
                        .then(async (e) => {
                            if(!e){
                                await db.schema.createTable('healthcare_worker', (t) => {
                                    t.integer('patient_id').unsigned().primary();
                                    t.foreign('patient_id').references('patient.id');
                                    t.string('health_facility_name');
                                    t.string('health_facility_address');
                                })
                                .then(console.log('created table 8'))
                            }
                            else{
                                console.log('table already exists')
                            }
                        })
                    }
                )
                .then(
                    async () => {
                        await db.schema.hasTable('lsi_apor_localtraveler')
                        .then(async (e) => {
                            if(!e){
                                await db.schema.createTable('lsi_apor_localtraveler', (t) => {
                                    t.integer('patient_id').unsigned().primary();
                                    t.foreign('patient_id').references('patient.id');
                                    t.string('city_mun_origin');
                                    t.string('province_origin');
                                    t.boolean('is_lsi');
                                    t.boolean('is_apor_localtraveler');
                                })
                                .then(console.log('table created 9'))
                            }
                            else{
                                console.log('table already exists')
                            }
                        })
                    }
                )
                .then(
                    async () => {
                        await db.schema.hasTable('living_in_close_settings')
                        .then(async (e) => {
                            if(!e){
                                await db.schema.createTable('living_in_close_settings', (t) => {
                                    t.integer('patient_id').unsigned().primary();
                                    t.foreign('patient_id').references('patient.id');
                                    t.string('institution_name');
                                    t.string('institution_type'); 
                                })
                                .then(console.log('table created 10'))
                            }
                            else{
                                console.log('table already exists')
                            }
                        })
                    }
                )
                .then(
                    async () => {
                        await db.schema.hasTable('returning_overseas_filipino')
                        .then(async (e) => {
                            if(!e){
                                await db.schema.createTable('returning_overseas_filipino', (t) => {
                                    t.integer('patient_id').unsigned().primary();
                                    t.foreign('patient_id').references('patient.id');
                                    t.string('country_origin');
                                    t.string('health_facility_address'); 
                                })
                                .then(console.log('table created 11'))
                            }
                            else{
                                console.log('table already exists')
                            }
                        })
                    }
                )
                .then(
                    async () => {
                        await db.schema.hasTable('cif')
                        .then(async (e) => {
                            if(!e){
                                await db.schema.createTable('cif', (t) => {
                                    t.increments('id').primary()
                                    t.integer('patient_id').unsigned();
                                    t.foreign('patient_id').references('patient.id');
                                    t.integer('investigator_id').unsigned();
                                    t.foreign('investigator_id').references('staff.id');
                                    t.date('date_interview');
                                    t.string('client_classification');
                                    t.string('testing_category');
                                    t.string('validation_status');
                                })
                                .then(console.log('created table 12'))
                            }
                            else{
                                console.log('table already exists')
                            }
                        })
                    }
                )
                .then(
                    async () => {
                        await db.schema.hasTable('cif_type')
                        .then(async (e) => {
                            if(!e){
                                await db.schema.createTable('cif_type', (t) => {
                                    t.integer('cif_id').unsigned().primary();
                                    t.foreign('cif_id').references('cif.id');
                                    t.boolean('is_new_case');
                                    t.boolean('is_unknown');
                                    t.string('other');
                                })
                                .then(console.log('created table 13'))
                            }
                            else{
                                console.log('table already exists')
                            }
                        })
                    }
                )
                .then(
                    async () => {
                        await db.schema.hasTable('for_update')
                        .then(async (e) => {
                            if(!e){
                                await db.schema.createTable('for_update', (t) => {
                                    t.integer('cif_id').unsigned().primary();
                                    t.foreign('cif_id').references('cif.id');
                                    t.boolean('symptoms');
                                    t.boolean('health_status');
                                    t.boolean('case_classification');
                                    t.boolean('vaccination');
                                    t.boolean('lab_result');
                                    t.boolean('chest_image_findings');
                                    t.boolean('disposition');
                                    t.boolean('exposure');
                                })
                                .then(console.log('created table 14'))
                            }
                            else{
                                console.log('table already exists 14')
                            }
                        })
                    }
                )
                .then(
                    async () => {
                        await db.schema.hasTable('case_investigation_details')
                        .then(async (e) => {
                            if(!e){
                                await db.schema.createTable('case_investigation_details', (t) => {
                                    t.integer('cif_id').unsigned().primary();
                                    t.foreign('cif_id').references('cif.id');
                                    t.string('health_status_at_consult');
                                    t.string('case_classification_at_consult');
                                })
                                .then(console.log('created table 15'))
                            }
                            else{
                                console.log('table already exists')
                            }
                        })
                    }
                )
                .then(
                    async () => {
                        await db.schema.hasTable('have_prev_consultation')
                        .then(async (e) => {
                            if(!e){
                                await db.schema.createTable('have_prev_consultation', (t) => {
                                    t.integer('cid_id').unsigned().primary();
                                    t.foreign('cid_id').references('case_investigation_details.cif_id');
                                    t.date('date_of_consultation');
                                    t.string('consultation_facility_name');
                                })
                                .then(console.log('created table 16'))
                            }
                            else{
                                console.log('table already exists')
                            }
                        })
                    }
                )
                .then(
                    async () => {
                        await db.schema.hasTable('disposition')
                        .then(async (e) => {
                            if(!e){
                                await db.schema.createTable('disposition', (t) => {
                                    t.integer('cid_id').unsigned().primary();
                                    t.foreign('cid_id').references('case_investigation_details.cif_id');
                                    t.string('admitted_in');
                                    t.string('name_of_facility');
                                    t.date('datetime_admission_isolation');
                                    t.string('other');
                                })
                                .then(console.log('created table 17'))
                            }
                            else{
                                console.log('table already exists')
                            }
                        })
                    }
                )
                .then(
                    async () => {
                        await db.schema.hasTable('vaccination_info')
                        .then(async (e) => {
                            if(!e){
                                await db.schema.createTable('vaccination_info', (t) => {
                                    t.integer('cid_id').unsigned();
                                    t.foreign('cid_id').references('case_investigation_details.cif_id');
                                    t.string('name_of_vaccine');
                                    t.date('vaccination_date');
                                    t.integer('dose_number').unsigned();
                                    t.string('vaccination_facility_name');
                                    t.string('vaccination_facility_region');
                                    t.string('adverse_effect');
                                })
                                .then(console.log('created table 18'))
                            }
                            else{
                                console.log('table already exists')
                            }
                        })
                    } 
                )
                .then(
                    async () => {
                        await db.schema.hasTable('clinical_information')
                        .then(async (e) => {
                            if(!e){
                                await db.schema.createTable('clinical_information', (t) => {
                                    t.integer('cid_id').unsigned().primary();
                                    t.foreign('cid_id').references('case_investigation_details.cif_id');
                                    t.date('date_of_onset_illness');
                                    t.boolean('is_pregnant');
                                    t.boolean('is_high_risk_pregnant');
                                    t.date('date_of_last_mensperiod');
                                    t.boolean('is_diagnosed_to_sari');
                                })
                                .then(console.log('created table 19'))
                            }
                            else {
                                console.log('table already exists')
                            }
                        })
                    }
                )
                .then(
                    async () => {
                        await db.schema.hasTable('symptoms')
                        .then(async (e) => {
                            if(!e){
                                await db.schema.createTable('symptoms', (t) => {
                                    t.integer('cli_info_id').unsigned().primary();
                                    t.foreign('cli_info_id').references('clinical_information.cid_id');
                                    t.boolean('is_asymptomatic');
                                    t.boolean('have_fever');
                                    t.integer('fever_temp').unsigned();
                                    t.boolean('have_cough');
                                    t.boolean('have_general_weakness');
                                    t.boolean('experiences_fatigue');
                                    t.boolean('have_headache');
                                    t.boolean('have_myalgia');
                                    t.boolean('have_sore_throat');
                                    t.boolean('have_coryza');
                                    t.boolean('have_dyspnea');
                                    t.boolean('experiences_nausea');
                                    t.boolean('exp_altered_mental_status');
                                    t.boolean('exp_anosmia');
                                    t.boolean('exp_ageusia');
                                    t.string('other');
                                })
                                .then(console.log('created table 20'))
                            }
                            else {
                                console.log('table already exists')
                            }
                        })
                    }
                )
                .then(
                    async () => {
                        await db.schema.hasTable('comorbidities')
                        .then(async (e) => {
                            if(!e){
                                await db.schema.createTable('comorbidities', (t) => {
                                    t.integer('cli_info_id').unsigned().primary();
                                    t.foreign('cli_info_id').references('clinical_information.cid_id');
                                    t.boolean('have_gastrointestinal');
                                    t.boolean('have_hypertension');
                                    t.boolean('have_genito_urinary');
                                    t.boolean('have_diabetes');
                                    t.boolean('have_neuro_disease');
                                    t.boolean('have_heart_disease');
                                    t.boolean('have_cancer');
                                    t.boolean('have_lung_disease');
                                    t.string('other');
                                })
                                .then(console.log('created table 21'))
                            }
                            else {
                                console.log('table already exists')
                            }
                        })
                    }
                )
                .then(
                    async () => {
                        await db.schema.hasTable('chest_imaging')
                        .then(async (e) => {
                            if(!e){
                                await db.schema.createTable('chest_imaging', (t) => {
                                    t.integer('cli_info_id').unsigned().primary();
                                    t.foreign('cli_info_id').references('clinical_information.cid_id');
                                    t.boolean('done_chest_radiography');
                                    t.date('date_chest_radiography');
                                    t.string('result_chest_radiography');
                                    t.boolean('done_chest_ct');
                                    t.date('date_chest_ct');
                                    t.string('result_chest_ct');
                                    t.boolean('done_chest_ultrasound');
                                    t.date('date_chest_ultrasound');
                                    t.string('result_chest_ultrasound');
                                    t.string('other_findings');
                                })
                                .then(console.log('created table 22'))
                            }
                            else {
                                console.log('table already exists')
                            }
                        })
                    }
                )
                .then(
                    async () => {
                        await db.schema.hasTable('lab_test')
                        .then(async (e) => {
                            if(!e){
                                await db.schema.createTable('lab_test', (t) => {
                                    t.integer('cli_info_id').unsigned().primary();
                                    t.foreign('cli_info_id').references('clinical_information.cid_id');
                                    t.boolean('test_positive_before');
                                    t.date('date_specimen_collection');
                                    t.string('lab_name');
                                    t.integer('test_count').unsigned();
                                })
                                .then(console.log('created table 23'))
                            }
                            else {
                                console.log('table already exists')
                            }
                        })
                    }
                )
                .then(
                    async () => {
                        await db.schema.hasTable('tests')
                        .then(async (e) => {
                            if(!e){
                                await db.schema.createTable('tests', (t) => {
                                    t.integer('lab_test_info_id').unsigned();
                                    t.foreign('lab_test_info_id').references('lab_test.cli_info_id');
                                    t.date('date_collected');
                                    t.date('date_released');
                                    t.string('lab_name');
                                    t.boolean('is_ops');
                                    t.boolean('is_nps');
                                    t.boolean('is_antigen');
                                    t.string('reason_antigen');
                                    t.string('kit_brand');
                                    t.boolean('done_antibody');
                                    t.string('other_test');
                                    t.string('result');
                                })
                                .then(console.log('created table 24'))
                            }
                            else {
                                console.log('table already exists')
                            }
                        })
                    }
                )
                .then(
                    async () => {
                        await db.schema.hasTable('outcome')
                        .then(async (e) => {
                            if(!e){
                                await db.schema.createTable('outcome', (t) => {
                                    t.integer('cli_info_id').unsigned().primary();
                                    t.foreign('cli_info_id').references('clinical_information.cid_id');
                                    t.boolean('is_active');
                                    t.boolean('is_recovered');
                                    t.date('date_recovered');
                                    t.boolean('is_dead');
                                    t.date('date_death');
                                    t.string('immediate_cause_death');
                                    t.string('underlying_cause_death');
                                    t.string('antecedent_cause_death');
                                    t.string('contributory_cause_death');
                                })
                                .then(console.log('created table 25'))
                            }
                            else {
                                console.log('table already exists')
                            }
                        })
                    }
                )
                .then(
                    async () => {
                        await db.schema.hasTable('contact_tracing')
                        .then(async (e) => {
                            if(!e){
                                await db.schema.createTable('contact_tracing', (t) => {
                                    t.integer('cif_id').unsigned().primary();
                                    t.foreign('cif_id').references('cif.id');
                                    t.boolean('has_exposure_people');
                                    t.date('date_of_contact');
                                    t.boolean('has_exposure_place');
                                })
                                .then(console.log('created table 26'))
                            }
                            else {
                                console.log('table already exists')
                            }
                        })
                    }
                )
                .then(
                    async () => {
                        await db.schema.hasTable('international_contact')
                        .then(async (e) => {
                            if(!e){
                                await db.schema.createTable('international_contact', (t) => {
                                    t.integer('tracing_id').unsigned();
                                    t.foreign('tracing_id').references('contact_tracing.cif_id');
                                    t.boolean('have_ongoing_transmission');
                                    t.date('travel_date_from');
                                    t.date('travel_date_to');
                                    t.string('country_origin');
                                    t.string('airline_vessel_name');
                                    t.string('airline_vessel_number');
                                    t.date('departure_date');
                                    t.date('arrival_date');
                                })
                                .then(console.log('created table 27'))
                            }
                            else {
                                console.log('table already exists')
                            }
                        })
                    }
                )
                .then(
                    async () => {
                        await db.schema.hasTable('close_contact')
                        .then(async (e) => {
                            if(!e){
                                await db.schema.createTable('close_contact', (t) => {
                                    t.integer('tracing_id').unsigned();
                                    t.foreign('tracing_id').references('contact_tracing.cif_id');
                                    t.string('name');
                                    t.string('contact_number');
                                })
                                .then(console.log('created table 28'))
                            }
                            else {
                                console.log('table already exists')
                            }
                        })
                    }
                )
                .then(
                    async () => {
                        await db.schema.hasTable('local_contact')
                        .then(async (e) => {
                            if(!e){
                                await db.schema.createTable('local_contact', (t) => {
                                    t.integer('tracing_id').unsigned();
                                    t.foreign('tracing_id').references('contact_tracing.cif_id');
                                    t.string('place_type');
                                    t.string('place_name');
                                    t.string('address');
                                    t.date('travel_date_from');
                                    t.date('travel_date_to');
                                    t.boolean('have_ongoing_transmission');
                                })
                                .then(console.log('created table 29'))
                            }
                            else {
                                console.log('table already exists')
                            }
                        })
                    }
                )
                .then(
                    async () => {
                        await db.schema.hasTable('local_transport')
                        .then(async (e) => {
                            if(!e){
                                await db.schema.createTable('local_transport', (t) => {
                                    t.integer('local_contact_id').unsigned();
                                    t.foreign('local_contact_id').references('contact_tracing.cif_id');
                                    t.string('transport_type');
                                    t.string('transport_number');
                                    t.string('origin');
                                    t.date('departure_date');
                                    t.string('destination');
                                    t.date('arrival_date');
                                })
                                .then(console.log('created table 30'))
                            }
                            else {
                                console.log('table already exists')
                            }
                        })
                    }
                )
                .then(
                    async () => {
                        await db.schema.hasTable('dru_queue')
                        .then(async (e) => {
                            if(!e){
                                await db.schema.createTable('dru_queue', (t) => {
                                    t.integer('dru_id').unsigned();
                                    t.foreign('dru_id').references('dru.id');
                                    t.integer('entry_count').unsigned();
                                    t.time('submission_from');
                                    t.time('submission_to');
                                })
                                .then(console.log('created table 31'))
                            }
                            else {
                                console.log('table already exists')
                            }
                        })
                    }
                )
    }
}

module.exports = functions;