
var functions = {
    generatetable: (db) => {
        db.schema.hasTable('dru').then((e) => {
            if (!e) {
                db.schema.createTable('dru', (t) => {
                    t.increments('id').primary();
                    t.string('name');
                    t.string('region');
                    t.string('province');
                })
                    .then(console.log('table created'))
                    //then enter initial values
                    .then(() => db('dru').insert([
                        {
                            name: 'PGH',
                            region: 'NCR',
                            province: 'Manila'
                        },
                        {
                            name: 'PPL',
                            region: '4A',
                            province: 'Laguna'
                        },
                        {
                            name: 'HealthServe',
                            region: '4A',
                            province: 'Laguna'
                        }
                    ]))
            }
            else {
                //no code here, just for debugging 
                console.log('table already exists')
            }
        })
            .then(
                () => {
                    db.schema.hasTable('staff')
                        .then((e) => {
                            if (!e) {
                                db.schema.createTable('staff', (t) => {
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

                                })
                                    .then(console.log('table created'))
                                //then inset values
                            }
                            else {
                                console.log('table already exists')
                            }
                        })
                })
                .then(
                    () =>{
                        db.schema.hasTable('address_contactinfo')
                        .then((e) =>{
                            if (!e) {
                                db.schema.createTable('address_contactinfo', (t) => {
                                    t.increments('id').primary();
                                    t.string('hn_bl_lot_buildno');
                                    t.string('barangay');
                                    t.string('muni_city');
                                    t.string('province');
                                    t.string('region');
                                    t.string('home_no');
                                    t.string('cell_no');
                                    t.string('email');
                                })
                                .then(console.log('table created'))
                            }
                            else {
                                console.log('table already exists')
                            }
                        })
                    }
                )
                .then(
                    () => {
                        db.schema.hasTable('workplace')
                        .then((e) =>{
                            if(!e){
                                db.schema.createTable('workplace', (t) => {
                                    t.increments('id').primary();
                                    t.string('name');
                                    t.integer('address_contactinfo_id').unsigned();
                                    t.foreign('address_contactinfo_id').references('address_contactinfo.id');
                                })
                                .then(console.log('table created'))
                            }
                            else{
                                console.log('table already exists')
                            }
                        })
                        
                    }

                )
                .then(
                    ()=>{
                        db.schema.hasTable('patient')
                        .then((e) => {
                            if(!e){
                                db.schema.createTable('patient', (t) => {
                                    t.increments('id').primary();
                                    t.integer('philhealth_no').unsigned();
                                    t.string('firstname');
                                    t.string('middlename');
                                    t.string('lastname');
                                    t.integer('age').unsigned();
                                    t.string('sex');
                                    t.date('birthday');
                                    t.string('occupation');
                                    t.string('civil_status');
                                    t.string('nationality');
                                    t.integer('permanent_address_id').unsigned();
                                    t.foreign('permanent_address_id').references('address.id');
                                    t.integer('current_address_id').unsigned();
                                    t.foreign('current_address_id').references('address.id');
                                    t.integer('workplace_id').unsigned();
                                    t.foreign('workplace_id').references('workplace.id');
                                    t.string('works_in_closed_settings');
                                })
                                .then(console.log('created table'))
                            }
                            else{
                                console.log('table already exists')
                            }
                        })
                    }
                )
                .then(
                    () => {
                        db.schema.hasTable('informant')
                        .then((e) => {
                            if(!e){
                                db.schema.createTable('informant', (t) => {
                                    t.increments('id').primary();
                                    t.string('name');
                                    t.string('contact_no');
                                })
                                .then(console.log('created table'))
                            }
                            else{
                                console.log('table already exists')
                            }
                        })
                    }
                )
                .then(
                    () => {
                        db.schema.hasTable('patient_informant')
                        .then((e) => {
                            if(!e){
                                db.schema.createTable('patient_informant', (t) => {
                                    t.integer('patient_id').unsigned();
                                    t.foreign('patient_id').references('patient.id');
                                    t.integer('informant_id').unsigned();
                                    t.foreign('informant_id').references('informant.id');
                                    t.string('relation_to_patient');
                                    t.primary(['patient_id', 'informant_id']);
                                })
                                .then(console.log('created table'))
                            }
                            else{
                                console.log('table already exists')
                            }
                        })
                    }
                )
                .then(
                    () => {
                        db.schema.hasTable('healthcare_worker')
                        .then((e) => {
                            if(!e){
                                db.schema.createTable('healthcare_worker', (t) => {
                                    t.integer('patient_id').unsigned().primary();
                                    t.foreign('patient_id').references('patient.id');
                                    t.string('health_facility_name');
                                    t.string('health_facility_address');
                                })
                                .then(console.log('created table'))
                            }
                            else{
                                console.log('table already exists')
                            }
                        })
                    }
                )
                .then(
                    () => {
                        db.schema.hasTable('lsi_apor_localtraveler')
                        .then((e) => {
                            if(!e){
                                db.schema.createTable('lsi_apor_localtraveler', (t) => {
                                    t.integer('patient_id').unsigned().primary();
                                    t.foreign('patient_id').references('patient.id');
                                    t.string('city_mun_origin');
                                    t.string('province_origin');
                                    t.boolean('is_lsi');
                                    t.boolean('is_apor_localtraveler');
                                })
                                .then(console.log('table created'))
                            }
                            else{
                                console.log('table already exists')
                            }
                        })
                    }
                )
                .then(
                    () => {
                        db.schema.hasTable('living_in_close_settings')
                        .then((e) => {
                            if(!e){
                                db.schema.createTable('living_in_close_settings', (t) => {
                                    t.integer('patient_id').unsigned().primary();
                                    t.foreign('patient_id').references('patient.id');
                                    t.string('institution_name');
                                    t.string('institution_type'); 
                                })
                                .then(console.log('table created'))
                            }
                            else{
                                console.log('table already exists')
                            }
                        })
                    }
                )
                .then(
                    () => {
                        db.schema.hasTable('returning_overseas_filipino')
                        .then((e) => {
                            if(!e){
                                db.schema.createTable('returning_overseas_filipino', (t) => {
                                    t.integer('patient_id').unsigned().primary();
                                    t.foreign('patient_id').references('patient.id');
                                    t.string('country_origin');
                                    t.string('health_facility_address'); 
                                })
                                .then(console.log('table created'))
                            }
                            else{
                                console.log('table already exists')
                            }
                        })
                    }
                )
                .then(
                    () => {
                        db.schema.hasTable('cif')
                        .then((e) => {
                            if(!e){
                                db.schema.createTable('cif', (t) => {
                                    t.increments('id').primary()
                                    t.integer('patient_id').unsigned();
                                    t.foreign('patient_id').references('patient.id');
                                    t.integer('investigator_id').unsigned();
                                    t.foreign('investigator_id').references('investigator.id');
                                    t.date('date_interview');
                                    t.string('client_classification');
                                    t.string('testing_category');
                                    t.string('validation_status');
                                })
                                .then(console.log('created table'))
                            }
                            else{
                                console.log('table already exists')
                            }
                        })
                    }
                )
                .then(
                    () => {
                        db.schema.hasTable('cif_type')
                        .then((e) => {
                            if(!e){
                                db.schema.createTable('cif_type', (t) => {
                                    t.integer('cif_id').unsigned().primary();
                                    t.foreign('cif_id').references('cif.id');
                                    t.boolean('is_new_case');
                                    t.boolean('is_unknown');
                                    t.string('other');
                                })
                                .then(console.log('created table'))
                            }
                            else{
                                console.log('table already exists')
                            }
                        })
                    }
                )
                .then(
                    () => {
                        db.schema.hasTable('for_update')
                        .then((e) => {
                            if(!e){
                                db.schema.createTable('for_update', (t) => {
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
                            }
                            else{
                                console.log('table already exists')
                            }
                        })
                    }
                )
                .then(
                    () => {
                        db.schema.hasTable('case_investigation_details')
                        .then((e) => {
                            if(!e){
                                db.schema.createTable('case_investigation_details', (t) => {
                                    t.integer('cif_id').unsigned().primary();
                                    t.foreign('cif_id').references('cif.id');
                                    t.string('health_status_at_consult');
                                    t.string('case_classification_at_consult');
                                })
                                .then(console.log('created table'))
                            }
                            else{
                                console.log('table already exists')
                            }
                        })
                    }
                )
                .then(
                    () => {
                        db.schema.hasTable('have_prev_consultation')
                        .then((e) => {
                            if(!e){
                                db.schema.createTable('have_prev_consultation', (t) => {
                                    t.integer('cid_id').unsigned().primary();
                                    t.foreign('cid_id').references('case_investigation_details.cif_id');
                                    t.date('date_of_consultation');
                                    t.string('consultation_facility_name');
                                })
                                .then(console.log('created table'))
                            }
                            else{
                                console.log('table already exists')
                            }
                        })
                    }
                )
                .then(
                    () => {
                        db.schema.hasTable('disposition')
                        .then((e) => {
                            if(!e){
                                db.schema.createTable('disposition', (t) => {
                                    t.integer('cid_id').unsigned().primary();
                                    t.foreign('cid_id').references('case_investigation_details.cif_id');
                                    t.string('admitted_in');
                                    t.string('name_of_facility');
                                    t.time('datetime_admission_isolation');
                                    t.string('other');
                                })
                                .then(console.log('created table'))
                            }
                            else{
                                console.log('table already exists')
                            }
                        })
                    }
                )
                .then(
                    () => {
                        db.schema.hasTable('vaccination_info')
                        .then((e) => {
                            if(!e){
                                db.schema.createTable('vaccination_info', (t) => {
                                    t.integer('cid_id').unsigned();
                                    t.foreign('cid_id').references('case_investigation_details.cif_id');
                                    t.string('name_of_vaccine');
                                    t.date('vaccination_date');
                                    t.integer('dose_number').unsigned();
                                    t.string('vaccination_facility_name');
                                    t.string('vaccination_facility_region');
                                    t.string('adverse_effect');
                                })
                                .then(console.log('created table'))
                            }
                            else{
                                console.log('table already exists')
                            }
                        })
                    } 
                )
                .then(
                    () => {
                        db.schema.hasTable('clinical_information')
                        .then((e) => {
                            if(!e){
                                db.schema.createTable('clinical_information', (t) => {
                                    t.integer('cid_id').unsigned().primary();
                                    t.foreign('cid_id').references('case_investigation_details.cif_id');
                                    t.date('date_of_onset_illness');
                                    t.boolean('is_pregnant');
                                    t.date('date_of_last_mensperiod');
                                    t.boolean('is_diagnosed_to_sari');
                                })
                                .then(console.log('created table'))
                            }
                            else {
                                console.log('table already exists')
                            }
                        })
                    }
                )
                .then(
                    () => {
                        db.schema.hasTable('symptoms')
                        .then((e) => {
                            if(!e){
                                db.schema.createTable('symptoms', (t) => {
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
                                .then(console.log('created table'))
                            }
                            else {
                                console.log('table already exists')
                            }
                        })
                    }
                )
                .then(
                    () => {
                        db.schema.hasTable('comorbidities')
                        .then((e) => {
                            if(!e){
                                db.schema.createTable('comorbidities', (t) => {
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
                                .then(console.log('created table'))
                            }
                            else {
                                console.log('table already exists')
                            }
                        })
                    }
                )
                .then(
                    () => {
                        db.schema.hasTable('chest_imaging')
                        .then((e) => {
                            if(!e){
                                db.schema.createTable('chest_imaging', (t) => {
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
                                .then(console.log('created table'))
                            }
                            else {
                                console.log('table already exists')
                            }
                        })
                    }
                )
                .then(
                    () => {
                        db.schema.hasTable('lab_test')
                        .then((e) => {
                            if(!e){
                                db.schema.createTable('lab_test', (t) => {
                                    t.integer('cli_info_id').unsigned().primary();
                                    t.foreign('cli_info_id').references('clinical_information.cid_id');
                                    t.boolean('test_positive_before');
                                    t.date('date_specimen_collection');
                                    t.string('lab_name');
                                    t.integer('test_count').unsigned();
                                })
                                .then(console.log('created table'))
                            }
                            else {
                                console.log('table already exists')
                            }
                        })
                    }
                )
                .then(
                    () => {
                        db.schema.hasTable('tests')
                        .then((e) => {
                            if(!e){
                                db.schema.createTable('tests', (t) => {
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
                                    t.string('other_test')
                                })
                                .then(console.log('created table'))
                            }
                            else {
                                console.log('table already exists')
                            }
                        })
                    }
                )
                .then(
                    () => {
                        db.schema.hasTable('outcome')
                        .then((e) => {
                            if(!e){
                                db.schema.createTable('outcome', (t) => {
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
                                .then(console.log('created table'))
                            }
                            else {
                                console.log('table already exists')
                            }
                        })
                    }
                )
                .then(
                    () => {
                        db.schema.hasTable('contact_tracing')
                        .then((e) => {
                            if(!e){
                                db.schema.createTable('contact_tracing', (t) => {
                                    t.integer('cif_id').unsigned().primary();
                                    t.foreign('cif_id').references('cif.id');
                                    t.boolean('has_exposure_people');
                                    t.date('date_of_contact');
                                    t.boolean('has_exposure_place');
                                })
                                .then(console.log('created table'))
                            }
                            else {
                                console.log('table already exists')
                            }
                        })
                    }
                )
                .then(
                    () => {
                        db.schema.hasTable('international_contact')
                        .then((e) => {
                            if(!e){
                                db.schema.createTable('international_contact', (t) => {
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
                                .then(console.log('created table'))
                            }
                            else {
                                console.log('table already exists')
                            }
                        })
                    }
                )
                .then(
                    () => {
                        db.schema.hasTable('close_contact')
                        .then((e) => {
                            if(!e){
                                db.schema.createTable('close_contact', (t) => {
                                    t.integer('tracing_id').unsigned();
                                    t.foreign('tracing_id').references('contact_tracing.cif_id');
                                    t.string('name');
                                    t.string('contact_number');
                                })
                                .then(console.log('created table'))
                            }
                            else {
                                console.log('table already exists')
                            }
                        })
                    }
                )
                .then(
                    () => {
                        db.schema.hasTable('local_contact')
                        .then((e) => {
                            if(!e){
                                db.schema.createTable('local_contact', (t) => {
                                    t.integer('tracing_id').unsigned();
                                    t.foreign('tracing_id').references('contact_tracing.cif_id');
                                    t.string('place_type');
                                    t.string('place_name');
                                    t.string('address');
                                    t.date('travel_date_from');
                                    t.date('travel_date_to');
                                    t.boolean('have_ongoing_transmission');
                                })
                                .then(console.log('created table'))
                            }
                            else {
                                console.log('table already exists')
                            }
                        })
                    }
                )
                .then(
                    () => {
                        db.schema.hasTable('local_transport')
                        .then((e) => {
                            if(!e){
                                db.schema.createTable('local_transport', (t) => {
                                    t.integer('local_contact_id').unsigned();
                                    t.foreign('local_contact_id').references('local_contact.tracing_id');
                                    t.string('transport_type');
                                    t.string('transport_number');
                                    t.string('origin');
                                    t.date('departure_date');
                                    t.string('destination');
                                    t.date('arrival_date');
                                })
                                .then(console.log('created table'))
                            }
                            else {
                                console.log('table already exists')
                            }
                        })
                    }
                )
                .then(
                    () => {
                        db.schema.hasTable('dru_queue')
                        .then((e) => {
                            if(!e){
                                db.schema.createTable('dru_queue', (t) => {
                                    t.integer('dru_id').unsigned();
                                    t.foreign('dru_id').references('dru.id');
                                    t.integer('entry_count').unsigned();
                                    t.time('submission_from');
                                    t.time('submission_to');
                                })
                                .then(console.log('created table'))
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