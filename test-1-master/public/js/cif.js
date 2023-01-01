const investigator = document.querySelector('.investigator');
const lab_name = document.querySelector('.lab-no');
const philhealthNo = document.querySelector('.philhealth-no');
const testing_category = document.querySelector('.testing-category');

const firstname = document.querySelector('.first-name');
const middlename = document.querySelector('.middle-name');
const lastname = document.querySelector('.last-name') || null;
const date_interview = document.querySelector('.interview-date');
const age = document.querySelector('.age');
const sex = document.querySelector('.sex');
const birthday = document.querySelector('.birthday');
const occupation = document.querySelector('.occupation');
const civil_status = document.querySelector('.civil-status');
const nationality = document.querySelector('.nationality');

const permanent_hn_bl_lot_buildno = document.querySelector('.permanent-house');
const permanent_barangay = document.querySelector('.perm-brgy');
const permanent_municipality = document.querySelector('.perm-municipality');
const permanent_province = document.querySelector('.perm-province');
const permanent_region = document.querySelector('.perm-region');
const permanent_home_no = document.querySelector('.perm-phone-no');
const perm_cellphone_no = document.querySelector('.perm-cellphone-no')
const permanent_email = document.querySelector('.perm-email');

const current_hn_bl_lot_buildno = document.querySelector('.curr-house');
const current_barangay = document.querySelector('.curr-brgy');
const current_municipality = document.querySelector('.curr-municipality');
const current_province = document.querySelector('.curr-province');
const current_region = document.querySelector('.curr-region');
const current_home_no = document.querySelector('.curr-phone-no');
const current_cell_no = document.querySelector('.curr-cellphone-no')
const current_email = document.querySelector('.curr-email');

//Employer

//added part in server.js
const employer_name = document.querySelector('.employer-name');
const employer_occupation = document.querySelector('.employer-occupation');
//end added part
const workplace_name = document.querySelector('.place-of-work'); //workplace_name in server
const workplace_hn_bl_lot_buildno = document.querySelector('.employer-house'); //workplace_hn_bl_lot_buildno in server
const employer_street = document.querySelector('.employer-street'); //workplace_barangay in server
const workplace_muni_city = document.querySelector('.employer-city'); //workplace_muni_city
const workplace_province = document.querySelector('.employer-province'); //workplace_province
const employer_country = document.querySelector('.employer-country'); //workplace_region
const workplace_home_no = document.querySelector('.office-phone-no'); //workplace_home_no
const workplace_cell_no = document.querySelector('.office-cellphone-no'); //workplace_cell_no
//missing for employer part in server.js
//workplace_email 
//works_in_closed_settings
//end missing

//wala sa cif pero nasa server
//---------missing----------
//health_facility_name
//health_facility_address
//---------end missing-------


//---------missing----------
// city_mun_origin, 
//province_origin, 
//is_lsi, 
//is_apor_localtraveler,
// institution_name, 
// institution_type,
// country_origin, 
// returning_overseas_filipino_health_facility_address,
const interviewDate = document.querySelector('.interview-date'); // date_interview, 
// client_classification, 
//testing_category, 
//validation_status, 
//cif_patient_id, 
//cif_investigator_id,
//is_new_case, 
//is_unknown, 
//other,
//symptoms,
//health_status, 
//case_classification, 
//vaccination, 
//lab_result, 
//chest_image_findings, 
//disposition, 
//exposure,
//health_status_at_consult, 
//case_classification_at_consult,
//date_of_consultation, 
//consultation_facility_name,
//admitted_in, 
//name_of_facility, 
//datetime_admission_isolation
//name_of_vaccine, 
//vaccination_date, 
//dose_number, 
//vaccination_facility_name, 
//vaccination_facility_region, 
//adverse_effect,
/* not found in server.js
const psTOD = document.querySelector('.tod-patient');
const psPriority = document.querySelector('.priority-patient');
const labNo = document.querySelector('.lab-no');
const dru = document.querySelector('.dru_hospital');
const other_investigator = document.querySelector('.other-investigator'); //added
const testingCategory = document.querySelector('.testing-category');
const passport_no = document.querySelector('.passport-no');
const gross_income = document.querySelector('.gross-income');
*/
//to add buttons 

//buttons

//travel history
//to add radio buttons
// const travel_selected = document.querySelector('input[name = "travel_history"]:checked').value; //have_ongoing_transmission
// console.log(travel_selected)

const travel_radio_btns = document.getElementsByName('travel_history');
var travel_selected = null
function select_travel(){
    for (var i = 0, iLen=travel_radio_btns.length; i < iLen; i++) {
        if (travel_radio_btns[i].checked) {
            travel_radio_btns[i].value;
            break;
        }
    }
    console.log(travel_radio_btns[i].value)
    travel_selected = travel_radio_btns[i].value
}


const port_of_exit = document.querySelector('.exit-port');
const airline_vessel_name = document.querySelector('.airline-seavessel');
const airline_vessel_number = document.querySelector('.flight-vessel-no');
const departure_date = document.querySelector('.departure-date');
const arrival_date = document.querySelector('.arrival-date');

//buttons
//exposure history

//to add radio buttons
// const exposure_selected = document.querySelector('input[name="exposure"]:checked').id; //has_exposure_people

const exposure_radio_btns = document.getElementsByName('exposure');
var exposure_selected = null
function select_exposure(){
    for (var i = 0, iLen=exposure_radio_btns.length; i < iLen; i++) {
        if (exposure_radio_btns[i].checked) {
            exposure_radio_btns[i].value;
            break;
        }
    }
    console.log(exposure_radio_btns[i].value)
    // return travel_radio_btns[i].id;
    exposure_selected = exposure_radio_btns[i].value
}

// const expo_yes = document.querySelector('.expo-yes');
// const expo_no = document.querySelector('.expo-no');
// const expo_unknown = document.querySelector('.expose-unknown');
const date_of_contact = document.querySelector('.date-of-contact');
// const place_selected = document.querySelector('input[name="place_exposed"]:checked').id; //has_exposure_place

const place_radio_btns = document.getElementsByName('place_exposed');
var place_selected = null
function select_place(){
    for (var i = 0, iLen=place_radio_btns.length; i < iLen; i++) {
        if (place_radio_btns[i].checked) {
            place_radio_btns[i].value;
            break;
        }
    }
    console.log(place_radio_btns[i].value)
    // return travel_radio_btns[i].id;
    place_selected = place_radio_btns[i].value
}

// const place_yes = document.querySelector('.place-yes');
// const place_no = document.querySelector('.place-no');
// const place_unknown = document.querySelector('.place-unknown');

const place_visited = document.querySelector('.visited-place').value;

// var output = place_visited.value
// var place_visited_selected = 

const name_of_place = document.querySelector('.place-name');
const date_visited = document.querySelector('.date-visited'); //iisang value lang 


//add more rows
//close contact details
const name = document.querySelector('.close-contact-name1');
const contact_number = document.querySelector('.close-contact-no1');
const close_contact_name2 = document.querySelector('.close-contact-name2');
const close_contact_number2 = document.querySelector('.close-contact-no2');

//add more rows button

//clinical information
//to add radio buttons
//added
// const disposition_selected = document.querySelector('input[name = "disposition"]:checked').id;

const disposition_radio_btns = document.getElementsByName('disposition');
var disposition_selected = null
function select_disposition(){
    for (var i = 0, iLen=disposition_radio_btns.length; i < iLen; i++) {
        if (disposition_radio_btns[i].checked) {
            disposition_radio_btns[i].value;
            break;
        }
    }
    console.log(disposition_radio_btns[i].value)
    disposition_selected = disposition_radio_btns[i].value
}


/*const disposition_inpatient = document.querySelector('.disposition-inpatient');
const disposition_outpatient = document.querySelector('.disposition-outpatient');
const disposition_died = document.querySelector('.disposition-died');
const disposition_discharged = document.querySelector('.disposition-discharged');
const disposition_unknown = document.querySelector('.disposition-unknown');*/

const date_of_onset_illness = document.querySelector('.illness-date');
const datetime_admission_isolation = document.querySelector('.admission-date');
const temperature = document.querySelector('.fever-celsius');

//sign symptoms
//checkbox
const is_asymptomatic = document.querySelector('.asymptomatic');
const have_fever = document.querySelector('.fever');
const have_cough = document.querySelector('.cough');
const have_general_weakness = document.querySelector('.weakness');
const experiences_fatigue = document.querySelector('.fatigue');
const have_headache = document.querySelector('.headache');
const have_myalgia = document.querySelector('.myalgia');
const have_sore_throat = document.querySelector('.sorethroat');
const have_coryza = document.querySelector('.coryza')
//const cough = document.querySelect - DOUBLE CHECK 
const have_dyspnea = document.querySelector('.dyspnea');
const anorexia = document.querySelector('.anorexia');
const experiences_nausea = document.querySelector('.nausea');
const vomiting = document.querySelector('.vomiting');
const diarrhea = document.querySelector('.diarrhea');
const exp_altered_mental_status = document.querySelector('.altered');
const exp_anosmia = document.querySelector('.anosmia');
const exp_ageusia = document.querySelector('.ageusia');

//is there any history of other illness options - radio

// const history_illness_selected = document.querySelector('input[name="history_of_illness"]:checked').id;

const history_illness_radio_btns = document.getElementsByName('history_of_illness');
var history_illness_selected = null
function select_history_illness(){
    for (var i = 0, iLen=history_illness_radio_btns.length; i < iLen; i++) {
        if (history_illness_radio_btns[i].checked) {
            history_illness_radio_btns[i].value;
            break;
        }
    }
    console.log(history_illness_radio_btns[i].value)
    // return travel_radio_btns[i].id;
    history_illness_selected = history_illness_radio_btns[i].value
}

// const history_yes = document.querySelector('.history-yes');
// const history_no = document.querySelector('.history-no');
const other_illness_date = document.querySelector('.other-illness-date');

//chest XRAY - radio
// const chest_xray_selected = document.querySelector('input[name = "chest_xray"]:checked').id 

const chest_xray_radio_btns = document.getElementsByName('chest_xray');
var done_chest_radiography = null
function select_chest_xray(){
    for (var i = 0, iLen=chest_xray_radio_btns.length; i < iLen; i++) {
        if (chest_xray_radio_btns[i].checked) {
            chest_xray_radio_btns[i].value;
            break;
        }
    }
    console.log(chest_xray_radio_btns[i].value)
    // return travel_radio_btns[i].id;
    done_chest_radiography = chest_xray_radio_btns[i].value
}

//const xray_yes = document.querySelector('.xray-yes');
//const xray_no = document.querySelector('.xray-no');
const xray_date = document.querySelector('.xray-date');

//CXR results - radio
// const pneumonia_selected = document.querySelector('input[name = "travel-history"]:checked').id

const pneumonia_radio_btns = document.getElementsByName('pneumonia');
var result_chest_radiography = null
function select_pneumonia(){
    for (var i = 0, iLen=pneumonia_radio_btns.length; i < iLen; i++) {
        if (pneumonia_radio_btns[i].checked) {
            pneumonia_radio_btns[i].value;
            break;
        }
    }
    console.log(pneumonia_radio_btns[i].value)
    // return travel_radio_btns[i].id;
    result_chest_radiography = pneumonia_radio_btns[i].value
}

/*const pneumonia_yes = document.querySelector('.pneumonia-yes');
const pneumonia_no = document.querySelector('.pneumonia-no');
const pneumonia_pending = document.querySelector('.pneumonia-pending');
const pneumonia_na = document.querySelector('.pneumonia-na');*/

//Other radiological findings - radio
const other_findings = document.querySelector('.other-findings');

//assessed as high risk pregnancy - radio
// const pregnant_selected = document.querySelector('input[name="pregnant"]:checked').id;

const pregnant_radio_btns = document.getElementsByName('pregnant');
var pregnant_selected = null
function select_pregnant(){
    for (var i = 0, iLen=pregnant_radio_btns.length; i < iLen; i++) {
        if (pregnant_radio_btns[i].checked) {
            pregnant_radio_btns[i].value;
            break;
        }
    }
    console.log(pregnant_radio_btns[i].value)
    // return travel_radio_btns[i].id;
    pregnant_selected = pregnant_radio_btns[i].value
}

// const pregnant_yes = document.querySelector('.pregnant-yes');
// const pregnant_no = document.querySelector('.pregnant-no');
// const pregnant_na = document.querySelector('.pregnant-na');
// const high_selected = document.querySelector('input[name="high_risk_pregnancy"]:checked').id

const high_radio_btns = document.getElementsByName('high_risk_pregnancy');
var high_selected = null
function select_high(){
    for (var i = 0, iLen=high_radio_btns.length; i < iLen; i++) {
        if (high_radio_btns[i].checked) {
            high_radio_btns[i].value;
            break;
        }
    }
    console.log(high_radio_btns[i].value)
    // return travel_radio_btns[i].id;
    high_selected = high_radio_btns[i].value
}

/*const high_yes = document.querySelector('.high-yes');
const high_no = document.querySelector('.high-no');
const high_na = document.querySelector('.high-na');*/

//specimen information

//const serum = document.querySelector('.')
const serum_hr_collected = document.querySelector('.serum-hr-collected')
const serum_min_collected = document.querySelector('.serum-min-collected')
const serum_hr_sent = document.querySelector('.serum-hr-sent')
const serum_min_sent = document.querySelector('.serum-min-sent')
const serum_hr_received = document.querySelector('.serum-hr-received')
const serum_min_received = document.querySelector('.serum-min-received')
const serum_virus_isolation = document.querySelector('.serum-virus-isolation')
const serum_pcr = document.querySelector('.serum_pcr')

const naso_hr_collected = document.querySelector('.naso-hr-collected')
const naso_min_collected = document.querySelector('.naso-min-collected')
const naso_hr_sent = document.querySelector('.naso-hr-sent')
const naso_min_sent = document.querySelector('.naso-min-sent')
const naso_hr_received = document.querySelector('.naso-hr-received')
const naso_min_received = document.querySelector('.naso-min-received')
const naso_virus_isolation = document.querySelector('.naso-virus-isolation')
const result = document.querySelector('.naso_pcr')

const oro_hr_collected = document.querySelector('.oro-hr-collected')
const oro_min_collected = document.querySelector('.oro-min-collected')
const oro_hr_sent = document.querySelector('.oro-hr-sent')
const oro_min_sent = document.querySelector('.oro-min-sent')
const oro_hr_received = document.querySelector('.oro-hr-received')
const oro_min_received = document.querySelector('.oro-min-received')
const oro_virus_isolation = document.querySelector('.oro-virus-isolation')
const oro_pcr = document.querySelector('.oro_pcr')

const other_hr_collected = document.querySelector('.other-hr-collected')
const other_min_collected = document.querySelector('.other-min-collected')
const other_hr_sent = document.querySelector('.other-hr-sent')
const other_min_sent = document.querySelector('.other-min-sent')
const other_hr_received = document.querySelector('.other-hr-received')
const other_min_received = document.querySelector('.other-min-received')
const other_virus_isolation = document.querySelector('.other-virus-isolation')
const other_pcr = document.querySelector('.other_pcr')

// const final_classification_selected = document.querySelector('input[name = "final_classification"]:checked').id

const final_classification_radio_btns = document.getElementsByName('final_classification');
var final_classification_selected = null
function select_final_classification(){
    for (var i = 0, iLen=final_classification_radio_btns.length; i < iLen; i++) {
        if (final_classification_radio_btns[i].checked) {
            final_classification_radio_btns[i].value;
            break;
        }
    }
    console.log(final_classification_radio_btns[i].value)
    // return travel_radio_btns[i].id;
    final_classification_selected = final_classification_radio_btns[i].value
}

/*const final_suspect = document.querySelector('.final-suspect')
const final_probable = document.querySelector('.final-probable')
const final_confirmed = document.querySelector('.final-confirmed')
const final_discharged = document.querySelector('.final-discharged')
const final_unknown = document.querySelector('.final-unknown')*/

// const outcome_selected = document.querySelector('input[name = "condition_on_discharge"]:checked').id

const condition_on_discharge_radio_btns = document.getElementsByName('condition_on_discharge');
var condition_on_discharge_selected = null
function select_condition_on_discharge(){
    for (var i = 0, iLen=condition_on_discharge_radio_btns.length; i < iLen; i++) {
        if (condition_on_discharge_radio_btns[i].checked) {
            condition_on_discharge_radio_btns[i].value;
            break;
        }
    }
    console.log(condition_on_discharge_radio_btns[i].value)
    // return travel_radio_btns[i].id;
    condition_on_discharge_selected = condition_on_discharge_radio_btns[i].value
}

const date_of_last_mensperiod = document.querySelector('.lmp')
const informant_name = document.querySelector('.informant-name');
const relation_to_patient = document.querySelector('.relationship');
const informant_contactno = document.querySelector('.informant-phone-no')

//Final Classification

//const close_contact_number = document.querySelector('.close-contact-no1');

const email = document.querySelector('.email');

const password = document.querySelector('.password');
const usertype = document.querySelector('.usertype');
const druselect = document.querySelector('.dru');
const saveBtn = document.querySelector('.save-button');

function saveRec() {
    var inv_surname = investigator.value.split(",")[0]
    console.log(age.value)
    // console.log(travel_selected);

    fetch('/insert-cif', {
       // mode: 'no-cors',
        method: 'post',
        headers: new Headers({ 'Content-Type' : 'application/json'}),
        body: JSON.stringify({
            investigator: inv_surname, 
            lab_name: lab_name.value,
            philhealth_no: philhealthNo.value,
            testing_category: testing_category.value,
            date_interview: (date_interview.value == '')?null:date_interview.value,
            validation_status: 'Not Validated',
            firstname: firstname.value,
            middlename: middlename.value,
            lastname: lastname.value,
            age: age.value,
            sex: sex.value,
            birthday: (birthday.value == '')?null: birthday.value,            
            occupation: occupation.value,
            civil_status: civil_status.value,
            nationality: nationality.value,

            permanent_hn_bl_lot_buildno: permanent_hn_bl_lot_buildno.value,
            permanent_barangay: permanent_barangay.value,
            permanent_muni_city: permanent_municipality.value,
            permanent_province: permanent_province.value,
            permanent_region: permanent_region.value,
            permanent_home_no: permanent_home_no.value,
            permanent_cell_no: perm_cellphone_no.value,
            permanent_email: permanent_email.value,
            current_hn_bl_lot_buildno: current_hn_bl_lot_buildno.value,
            current_barangay: current_barangay.value,
            current_muni_city: current_municipality.value,
            current_province: current_province.value,
            current_region: current_region.value,
            current_home_no: current_home_no.value,
            current_cell_no: current_cell_no.value,
            current_email: current_email.value,


            employer_name: employer_name.value,
            employer_occupation: employer_occupation.value,
            workplace_name: workplace_name.value,
            workplace_hn_bl_lot_buildno: workplace_name.value,
            employer_street: employer_street.value,
            workplace_muni_city: workplace_muni_city.value,
            workplace_province: workplace_province.value,
            employer_country: employer_country.value,
            workplace_home_no: workplace_home_no.value,
            workplace_cell_no: workplace_cell_no.value,

            date_of_last_mensperiod: (date_of_last_mensperiod.value == '')? null:date_of_last_mensperiod.value,
            
            have_ongoing_transmission: (travel_selected == 'yes')? true: false,
            port_of_exit: port_of_exit.value,
            airline_vessel_name: airline_vessel_name.value,
            airline_vessel_number: airline_vessel_number.value,
            departure_date: (departure_date.value === 'N/A' || '') ? null: departure_date.value,
            arrival_date: (arrival_date.value === 'N/A' || '') ? null: departure_date.value,
            has_exposure_people: (exposure_selected == 'yes')? true : ((exposure_selected == 'no')? false : null ),
            
            date_of_contact: (!date_of_contact.value.length)? null : date_of_contact.value,
            has_exposure_place: (place_selected == 'yes')? true : ((place_selected == 'no')? false: null),
            
            place_visited: place_visited.value,
            name_of_place: name_of_place.value, 
            date_visited: date_visited.value, 
            
            name: name.value,
            contact_number: contact_number.value,
            close_contact_name2: close_contact_name2.value,
            close_contact_number2: close_contact_number2.value,

            disposition: (disposition_selected == 'yes')? 'inpatient' : ((disposition_selected == 'outpatient')? 'outpatient': ((disposition_selected == 'died')? 'died': ((disposition_selected == 'discharged')? 'discharged' : 'unknown')) ),
            
            date_of_onset_illness: ( date_of_onset_illness.value == '') ? null: date_of_onset_illness.value,
            datetime_admission_isolation: (datetime_admission_isolation.value == '') ? null:datetime_admission_isolation.value,
            temperature: temperature.value,

            is_asymptomatic: is_asymptomatic.checked,
            have_fever: have_fever.checked,
            have_cough: have_cough.checked,
            have_general_weakness: have_general_weakness.checked,
            experiences_fatigue: experiences_fatigue.checked,
            have_headache: have_headache.checked,
            have_myalgia: have_myalgia.checked,
            have_sore_throat: have_sore_throat.checked,
            have_coryza: have_coryza.checked,
        
            have_dyspnea: have_dyspnea.checked,
            anorexia: anorexia.checked,
            experiences_nausea: experiences_nausea.checked,
            vomiting: vomiting.checked,
            diarrhea: diarrhea.checked,
            exp_altered_mental_status: exp_altered_mental_status.checked,
            exp_anosmia: exp_anosmia.checked,
            exp_ageusia: exp_ageusia.checked,
            
            is_history_of_illness_selected: (history_illness_selected == 'yes')? true: false,
            
            other_illness_date: other_illness_date.value,
            done_chest_radiography: (done_chest_radiography == 'yes')? true: false,
            
            xray_date: xray_date.value,
            result_chest_radiography: (result_chest_radiography == 'yes')? 'pneumonia': ((result_chest_radiography == 'no')? 'normal': ((result_chest_radiography == 'pending')? 'pending':'n/a')),
           
            other_findings: other_findings.value,
            is_pregnant_selected: (pregnant_selected == 'yes')? true: ((pregnant_selected == 'no')? false: null),
            
            is_high_risk_pregnant: (high_selected == 'yes')? true: ((high_selected == 'no')? false: null),
            

            serum_hr_collected: serum_hr_collected.value,
            serum_min_collected: serum_min_collected.value,
            serum_hr_sent: serum_hr_sent.value,
            serum_min_sent: serum_min_sent.value,
            serum_hr_received: serum_hr_received.value,
            serum_min_received: serum_min_received.value,
            serum_virus_isolation: serum_virus_isolation.value,
            serum_pcr: serum_pcr.value,

            naso_hr_collected: naso_hr_collected.value,
            naso_min_collected: naso_min_collected.value,
            naso_hr_sent: naso_hr_sent.value,
            naso_min_sent: naso_min_sent.value,
            naso_hr_received: naso_hr_received.value,
            naso_min_received: naso_min_received.value,
            naso_virus_isolation: naso_virus_isolation.value,
            result: result.value,

            oro_hr_collected: oro_hr_collected.value,
            oro_hr_received: oro_hr_received.value,
            oro_hr_sent: oro_hr_sent.value,
            oro_min_sent: oro_min_sent.value,
            oro_hr_received: oro_hr_received.value,
            oro_min_received: oro_min_received.value,
            oro_virus_isolation: oro_virus_isolation.value,
            oro_pcr: oro_pcr.value,

            other_hr_collected: other_hr_collected.value,
            other_min_collected: other_min_collected.value,
            other_hr_sent: other_hr_sent.value,
            other_min_sent: other_min_sent.value,
            other_hr_received: other_hr_received.value,
            other_min_received: other_min_received.value,
            other_virus_isolation: other_virus_isolation.value,
            other_pcr: other_pcr.value,

            client_classification: (final_classification_selected == 'suspect')? 'suspect': ((final_classification_selected == 'probable')? 'probable': ((final_classification_selected == 'confirmed')? 'confirmed': ((final_classification_selected == 'discharged')? 'discharged' : 'unknown'))),
            
            is_active: (condition_on_discharge_selected == 'improved' || 'transferred' || 'absconded')? true:false,
            is_recovered: (condition_on_discharge_selected == 'recovered')? true:false,
            is_dead: (condition_on_discharge_selected == 'died')? true:false,
            // is_outcome_selected: (condition_on_discharge_selected == 'improved')? 'improved': ((condition_on_discharge_selected == 'recovered')? 'recovered': ((condition_on_discharge_selected == 'transferred')? 'transferred': ((condition_on_discharge_selected == 'absconded')? 'absconded': 'died'))),
            informant_name: informant_name.value,
            informant_contactno: informant_contactno.value,
            relation_to_patient: relation_to_patient.value
        })
    })

    location.href = '/'
}
// Minimize sidebar
document.getElementById('close-nav').addEventListener('click', () => {
    document.getElementById('nav').style.width = '100px';
    document.getElementById('open-nav').style.display = 'inline';

    const toggleElements = document.querySelectorAll('.nav-component-toggle');
    toggleElements.forEach(el => {
        el.style.display = 'none';
    });

    document.querySelector('hr').style.width = '37px';
    document.querySelector('.btn-collapse').style.display = 'none';
    document.querySelector('.btn-expand').style.display = 'block';

    const navItem = document.querySelectorAll('.nav-item');
    navItem.forEach(el => {
        el.style.textAlign = 'center';
        // el.style.backgroundColor = 'transparent';
        el.style.display = 'block';
        el.style.width = '65%';
        el.style.marginLeft = '10px';
    });

    const navItemImg = document.querySelectorAll('.nav-item > img');
    navItemImg.forEach(el => {
        el.style.paddingLeft = '0px';
    });

    document.getElementById('main-content').style.width = '100%';
});

// Maximize sidebar
document.getElementById('open-nav').addEventListener('click', () => {
    document.getElementById('nav').style.width = '325px';
    document.getElementById('open-nav').style.display = 'none';

    const toggleElements = document.querySelectorAll('.nav-component-toggle');
    toggleElements.forEach(el => {
        el.style.display = 'inline';
    });

    document.querySelector('hr').style.width = '121.48px';
    document.querySelector('.btn-expand').style.display = 'none';
    document.querySelector('.btn-collapse').style.display = 'block';

    const navItem = document.querySelectorAll('.nav-item');
    navItem.forEach(el => {
        el.style.textAlign = 'none';
        // el.style.backgroundColor = 'rgba(255,255,255, 0.3)';
        el.style.display = 'flex';
        el.style.width = '95%';
        el.style.marginLeft = '0px';
    });

    const navItemImg = document.querySelectorAll('.nav-item > img');
    navItemImg.forEach(el => {
        el.style.paddingLeft = '5px';
    });


    document.getElementById('main-content').style.width = '80%';
});

// Toggle Dropdown
function toggleDropdown() {
    var element = document.getElementById('dropdown');
    element.classList.toggle("show");
}

//fill input fields with n/a

const naBtn = document.querySelector('.na-button');

naBtn.addEventListener('click', () => { 
    employer_name.value = "N/A"
    employer_occupation.value = "N/A"
    workplace_name.value = "N/A"
    workplace_name.value = "N/A"
    employer_street.value = "N/A"
    workplace_muni_city.value = "N/A"
    workplace_province.value = "N/A"
    employer_country.value = "N/A"
    workplace_home_no.value = "N/A"
    workplace_cell_no.value = "N/A"
})

function fillNA () {
    port_of_exit.value = "N/A"
    airline_vessel_name.value = "N/A"
    airline_vessel_number.value = "N/A"
    departure_date.value = "N/A"
    arrival_date.value = "N/A"
}

function clear_employer_details() {
    employer_name.value = ""
    employer_occupation.value = ""
    workplace_name.value = ""
    workplace_name.value = ""
    employer_street.value = ""
    workplace_muni_city.value = ""
    workplace_province.value = ""
    employer_country.value = ""
    workplace_home_no.value = ""
    workplace_cell_no.value = ""
}

function clear_travel_history() {
    port_of_exit.value = ""
    airline_vessel_name.value = ""
    airline_vessel_number.value = ""
    departure_date.value = ""
    arrival_date.value = ""
}

function same_as_perm_add() {
    current_hn_bl_lot_buildno.value = permanent_hn_bl_lot_buildno.value
    current_barangay.value = permanent_barangay.value
    current_municipality.value = permanent_municipality.value
    current_province.value = permanent_province.value
    current_region.value = permanent_region.value
    current_home_no.value = permanent_home_no.value
    current_cell_no.value = perm_cellphone_no.value
    current_email.value = permanent_email.value
}

function clear_curr_add() {
    current_hn_bl_lot_buildno.value = ""
    current_barangay.value = ""
    current_municipality.value = ""
    current_province.value = ""
    current_region.value = ""
    current_home_no.value = ""
    current_cell_no.value = ""
    current_email.value = ""
}

