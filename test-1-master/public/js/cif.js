const investigator = document.querySelector('.investigator');

const philhealthNo = document.querySelector('.philhealth-no');
const testingCategory = document.querySelector('.testing-category');

const fname = document.querySelector('.first-name');
const mname = document.querySelector('.middle-name');
const lname = document.querySelector('.last-name') || null;

const age = document.querySelector('.age');
const sex = document.querySelector('.sex');
const birthday = document.querySelector('.birthday');
const occupation = document.querySelector('.occupation');
const civil_status = document.querySelector('.civil-status');
const nationality = document.querySelector('.nationality');

const perm_house = document.querySelector('.permanent-house');
const perm_barangay = document.querySelector('.perm-brgy');
const perm_municipality = document.querySelector('.perm-municipality');
const perm_province = document.querySelector('.perm-province');
const perm_region = document.querySelector('.perm-region');
const perm_home_phone_number = document.querySelector('.perm-phone-no');
const perm_cellphone_number = document.querySelector('.perm-cellphone-no')
const perm_email = document.querySelector('.perm-email');

const curr_house = document.querySelector('.curr-house');
const curr_barangay = document.querySelector('.curr-brgy');
const curr_municipality = document.querySelector('.curr-municipality');
const curr_province = document.querySelector('.curr-province');
const curr_region = document.querySelector('.curr-region');
const curr_home_phone_number = document.querySelector('.curr-phone-no');
const curr_cellphone_number = document.querySelector('.curr-cellphone-no')
const curr_email = document.querySelector('.curr-email');

//Employer

//added part in server.js
const employer_name = document.querySelector('.employer-name');
const employer_occupation = document.querySelector('.employer-occupation');
//end added part
const place_of_work = document.querySelector('.place-of-work'); //workplace_name in server
const building_name = document.querySelector('.employer-house'); //workplace_hn_bl_lot_buildno in server
const employer_street = document.querySelector('.employer-street'); //workplace_barangay in server
const employer_city = document.querySelector('.employer-city'); //workplace_muni_city
const employer_province = document.querySelector('.employer-province'); //workplace_province
const employer_country = document.querySelector('.employer-country'); //workplace_region
const office_phone_number = document.querySelector('.office-phone-no'); //workplace_home_no
const office_cellphone_number = document.querySelector('.office-cellphone-no'); //workplace_cell_no
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
const airline_or_seavessel = document.querySelector('.airline-seavessel');
const flight_or_vessel_no = document.querySelector('.flight-vessel-no');
const dop = document.querySelector('.departure-date');
const doa = document.querySelector('.arrival-date');

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
const close_contact_name = document.querySelector('.close-contact-name1');
const close_contact_number = document.querySelector('.close-contact-no1');
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

const illness_date = document.querySelector('.illness-date');
const admission_date = document.querySelector('.admission-date');
const temperature = document.querySelector('.fever-celsius');

//sign symptoms
//checkbox
const asymptomatic = document.querySelector('.asymptomatic');
const fever = document.querySelector('.fever');
const cough = document.querySelector('.cough');
const weakness = document.querySelector('.weakness');
const fatigue = document.querySelector('.fatigue');
const headache = document.querySelector('.headache');
const myalgia = document.querySelector('.myalgia');
const sorethroat = document.querySelector('.sorethroat');
const coryza = document.querySelector('.coryza')
//const cough = document.querySelect - DOUBLE CHECK 
const dyspnea = document.querySelector('.dyspnea');
const anorexia = document.querySelector('.anorexia');
const nausea = document.querySelector('.nausea');
const vomiting = document.querySelector('.vomiting');
const diarrhea = document.querySelector('.diarrhea');
const altered = document.querySelector('.altered');
const anosmia = document.querySelector('.anosmia');
const ageusia = document.querySelector('.ageusia');

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
var chest_xray_selected = null
function select_chest_xray(){
    for (var i = 0, iLen=chest_xray_radio_btns.length; i < iLen; i++) {
        if (chest_xray_radio_btns[i].checked) {
            chest_xray_radio_btns[i].value;
            break;
        }
    }
    console.log(chest_xray_radio_btns[i].value)
    // return travel_radio_btns[i].id;
    chest_xray_selected = chest_xray_radio_btns[i].value
}

//const xray_yes = document.querySelector('.xray-yes');
//const xray_no = document.querySelector('.xray-no');
const xray_date = document.querySelector('.xray-date');

//CXR results - radio
// const pneumonia_selected = document.querySelector('input[name = "travel-history"]:checked').id

const pneumonia_radio_btns = document.getElementsByName('pneumonia');
var pneumonia_selected = null
function select_pneumonia(){
    for (var i = 0, iLen=pneumonia_radio_btns.length; i < iLen; i++) {
        if (pneumonia_radio_btns[i].checked) {
            pneumonia_radio_btns[i].value;
            break;
        }
    }
    console.log(pneumonia_radio_btns[i].value)
    // return travel_radio_btns[i].id;
    pneumonia_selected = pneumonia_radio_btns[i].value
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
const serum_pcr = document.querySelector('.serum-pcr')

const naso_hr_collected = document.querySelector('.naso-hr-collected')
const naso_min_collected = document.querySelector('.naso-min-collected')
const naso_hr_sent = document.querySelector('.naso-hr-sent')
const naso_min_sent = document.querySelector('.naso-min-sent')
const naso_hr_received = document.querySelector('.naso-hr-received')
const naso_min_received = document.querySelector('.naso-min-received')
const naso_virus_isolation = document.querySelector('.naso-virus-isolation')
const naso_pcr = document.querySelector('.naso-pcr')

const oro_hr_collected = document.querySelector('.oro-hr-collected')
const oro_min_collected = document.querySelector('.oro-min-collected')
const oro_hr_sent = document.querySelector('.oro-hr-sent')
const oro_min_sent = document.querySelector('.oro-min-sent')
const oro_hr_received = document.querySelector('.oro-hr-received')
const oro_min_received = document.querySelector('.oro-min-received')
const oro_virus_isolation = document.querySelector('.oro-virus-isolation')
const oro_pcr = document.querySelector('.oro-pcr')

const other_hr_collected = document.querySelector('.other-hr-collected')
const other_min_collected = document.querySelector('.other-min-collected')
const other_hr_sent = document.querySelector('.other-hr-sent')
const other_min_sent = document.querySelector('.other-min-sent')
const other_hr_received = document.querySelector('.other-hr-received')
const other_min_received = document.querySelector('.other-min-received')
const other_virus_isolation = document.querySelector('.other-virus-isolation')
const other_pcr = document.querySelector('.other-pcr')

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

const informant_name = document.querySelector('.informant-name');
const relationship = document.querySelector('.relationship');
const informant_phone_number = document.querySelector('.informant-phone-number')

//Final Classification

//const close_contact_number = document.querySelector('.close-contact-no1');

const email = document.querySelector('.email');

const password = document.querySelector('.password');
const usertype = document.querySelector('.usertype');
const druselect = document.querySelector('.dru');
const saveBtn = document.querySelector('.save-button');

function saveRec() {
    var inv_surname = investigator.value.split(",")[0]
    // console.log(inv_surname)
    // console.log(travel_selected);

    fetch('/insert-cif', {
        mode: 'no-cors',
        method: 'post',
        headers: new Headers({ 'Content-Type' : 'application/json'}),
        body: JSON.stringify({
            investigator: inv_surname, //surname for test only, add first name here
            philhealthNo: philhealthNo.value,
            testingCategory: testingCategory.value, //ilalim pa 
            fname: fname.value,
            mname: mname.value,
            lname: lname.value,
            age: age.value,
            sex: sex.value,
            birthday: birthday.value,            
            occupation: occupation.value,
            civil_status: civil_status.value,
            nationality: nationality.value,

            perm_house: perm_house.value,
            perm_barangay: perm_barangay.value,
            perm_municipality: perm_municipality.value,
            perm_province: perm_province.value,
            perm_region: perm_region.value,
            perm_home_phone_number: perm_home_phone_number.value,
            perm_cellphone_number: perm_cellphone_number.value,
            perm_email: perm_email.value,
            curr_house: curr_house.value,
            curr_barangay: curr_barangay.value,
            curr_municipality: curr_municipality.value,
            curr_province: curr_province.value,
            curr_region: curr_region.value,
            curr_home_phone_number: curr_home_phone_number.value,
            curr_cellphone_number: curr_cellphone_number.value,
            curr_email: curr_email.value,


            employer_name: employer_name.value,
            employer_occupation: employer_occupation.value,
            place_of_work: place_of_work.value,
            building_name: building_name.value,
            employer_street: employer_street.value,
            employer_city: employer_city.value,
            employer_province: employer_province.value,
            employer_country: employer_country.value,
            office_phone_number: office_phone_number.value,
            office_cellphone_number: office_cellphone_number.value,

            //not in server
            //psTOD: psTOD.value,
            //psPriority: psPriority.value,
            //labNo: labNo.value,
            //dru: dru.value,
            //investigator: investigator.value,
            //other_investigator: other_investigator.value,
            //interviewDate: interviewDate.value,
            //testingCategory: testingCategory.value,

            //passport_no: passport_no.value,
            //gross_income: gross_income.value,
            //end not in server
            
            //radio buttons
            //has exposure place element in req.body
            //travel_yes: travel_yes.value,
            //travel_no: travel_no.value,
            have_ongoing_transmission: (travel_selected == 'yes')? true: false,
            port_of_exit: port_of_exit.value,
            airline_or_seavessel: airline_or_seavessel.value,
            flight_or_vessel_no: flight_or_vessel_no.value,
            dop: dop.value,
            doa: doa.value,
            has_exposure_people: (exposure_selected == 'yes')? 'yes' : ((exposure_selected == 'no')? 'no' : 'unknown' ),
            //expo_yes: expo_yes.value,
            //expo_no: expo_no.value,
            //expo_unknown: expo_unknown.value,
            date_of_contact: date_of_contact.value,
            has_exposure_place: (place_selected == 'yes')? 'yes' : ((place_selected == 'no')? 'no': 'unknown'),
            //place_yes: place_yes.value,
            //place_no: place_no.value,
            //place_unknown: place_unknown.value,
            //
            place_visited: place_visited.value,
            name_of_place: name_of_place.value, 
            date_visited: date_visited.value, 
            //
            close_contact_name: close_contact_name.value,
            close_contact_number: close_contact_number.value,
            close_contact_name2: close_contact_name2.value,
            close_contact_number2: close_contact_number2.value,

            is_disposition_selected: (disposition_selected == 'yes')? 'inpatient' : ((disposition_selected == 'outpatient')? 'outpatient': ((disposition_selected == 'died')? 'died': ((disposition_selected == 'discharged')? 'discharged' : 'unknown')) ),
            //disposition_inpatient: disposition_inpatient.value,
            //disposition_outpatient: disposition_outpatient.value,
            //disposition_died: disposition_died.value,
            //disposition_discharged: disposition_charged.value,
            //disposition_unknown: disposition_died.value,
            illness_date: illness_date.value,
            admission_date: admission_date.value,
            temperature: temperature.value,

            asymptomatic: asymptomatic.value,
            fever: fever.value,
            cough: cough.value,
            weakness: weakness.value,
            fatigue: fatigue.value,
            headache: headache.value,
            myalgia: myalgia.value,
            sorethroat: sorethroat.value,
            coryza: coryza.value,
            //cough again
            dyspnea: dyspnea.value,
            anorexia: anorexia.value,
            nausea: nausea.value,
            vomiting: vomiting.value,
            diarrhea: diarrhea.value,
            altered: altered.value,
            anomia: anosmia.value,
            ageusia: ageusia.value,
            
            is_history_of_illness_selected: (history_illness_selected == 'yes')? true: false,
            //history_yes: history_yes.value,
            //history_no: history_no.value,
            other_illness_date: other_illness_date.value,
            is_xray_selected: (chest_xray_selected == 'yes')? true: false,
            //xray_yes: xray_yes.value,
            //xray_no: xray_no.value,
            xray_date: xray_date.value,
            is_pneumonia_selected: (pneumonia_selected == 'yes')? 'pneumonia': ((pneumonia_selected == 'no')? 'normal': ((pneumonia_selected == 'pending')? 'pending':'n/a')),
            //pneumonia_yes: pneumonia_yes.value,
            //pneumonia_no: pneumonia_no.value,
            //pneumonia_pending: pneumonia_pending.value,
            //pneumonia_na: pneumonia_na.value,
            other_findings: other_findings.value,
            is_pregnant_selected: (pregnant_selected == 'yes')? true: false,
            //pregnant_yes: pregnant_yes.value,
            //pregnant_na: pregnant_na.value,
            is_high_yes_selected: (high_selected == 'yes')? 'yes': ((high_selected == 'no')? 'no': 'n/a'),
            //high_yes: high_yes.value,
            //high_no: high_no.value,
            //high_na: high_na.value,

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
            naso_pcr: naso_pcr.value,

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

            is_final_selected: (final_classification_selected == 'suspect')? 'suspect': ((final_classification_selected == 'probable')? 'probable': ((final_classification_selected == 'confirmed')? 'confirmed': ((final_classification_selected == 'discharged')? 'discharged' : 'unknown'))),
            //final_suspect: final_suspect.value,
            //final_probable: final_probable.value,
            //final_confirmed: final_confirmed.value,
            //final_discharged: final_discharged.value,
            //final_unknown: final_unknown.value,

            is_outcome_selected: (condition_on_discharge_selected == 'improved')? 'improved': ((condition_on_discharge_selected == 'recovered')? 'recovered': ((condition_on_discharge_selected == 'transferred')? 'transferred': ((condition_on_discharge_selected == 'absconded')? 'absconded': 'died'))),
        
        })
    })
}

// saveBtn.addEventListener('click', () => {
//     //console.log(fname.value)
//     var inv_surname = investigator.value.split(",")[0]
//     console.log(inv_surname)
//     console.log(travel_selected)
//     // fetch('/insert-cif', {
//     //     method: 'post',
//     //     headers: new Headers({ 'Content-Type' : 'application/json'}),
//     //     body: JSON.stringify({
//     //         investigator: inv_surname, //surname for test only, add first name here
//     //         philhealthNo: philhealthNo.value,
//     //         testingCategory: testingCategory.value, //ilalim pa 
//     //         fname: fname.value,
//     //         mname: mname.value,
//     //         lname: lname.value,
//     //         age: age.value,
//     //         sex: sex.value,
//     //         birthday: birthday.value,            
//     //         occupation: occupation.value,
//     //         civil_status: civil_status.value,
//     //         nationality: nationality.value,

//     //         perm_house: perm_house.value,
//     //         perm_barangay: perm_barangay.value,
//     //         perm_municipality: perm_municipality.value,
//     //         perm_province: perm_province.value,
//     //         perm_region: perm_region.value,
//     //         perm_home_phone_number: perm_home_phone_number.value,
//     //         perm_cellphone_number: perm_cellphone_number.value,
//     //         perm_email: perm_email.value,
//     //         curr_house: curr_house.value,
//     //         curr_barangay: curr_barangay.value,
//     //         curr_municipality: curr_municipality.value,
//     //         curr_province: curr_province.value,
//     //         curr_region: curr_region.value,
//     //         curr_home_phone_number: curr_home_phone_number.value,
//     //         curr_cellphone_number: curr_cellphone_number.value,
//     //         curr_cellphone_number: curr_cellphone_number.value,
//     //         curr_email: curr_email.value,


//     //         employer_name: employer_name.value,
//     //         employer_occupation: employer_occupation.value,
//     //         place_of_work: place_of_work.value,
//     //         building_name: building_name.value,
//     //         employer_street: employer_street.value,
//     //         employer_city: employer_city.value,
//     //         employer_province: employer_province.value,
//     //         employer_country: employer_country.value,
//     //         office_phone_number: office_phone_number.value,
//     //         office_cellphone_number: office_cellphone_number.value,

//     //         //not in server
//     //         //psTOD: psTOD.value,
//     //         //psPriority: psPriority.value,
//     //         //labNo: labNo.value,
//     //         //dru: dru.value,
//     //         //investigator: investigator.value,
//     //         //other_investigator: other_investigator.value,
//     //         //interviewDate: interviewDate.value,
//     //         //testingCategory: testingCategory.value,

//     //         //passport_no: passport_no.value,
//     //         //gross_income: gross_income.value,
//     //         //end not in server
            
//     //         //radio buttons
//     //         //has exposure place element in req.body
//     //         //travel_yes: travel_yes.value,
//     //         //travel_no: travel_no.value,
//     //         have_ongoing_transmission: (travel_selected == 'yes')? true: false,
//     //         port_of_exit: port_of_exit.value,
//     //         airline_or_seavessel: airline_or_seavessel.value,
//     //         flight_or_vessel_no: flight_or_vessel_no.value,
//     //         dop: dop.value,
//     //         doa: doa.value,
//     //         has_exposure_people: (exposure_selected == 'yes')? 'yes' : ((exposure_selected == 'no')? 'no' : 'unknown' ),
//     //         //expo_yes: expo_yes.value,
//     //         //expo_no: expo_no.value,
//     //         //expo_unknown: expo_unknown.value,
//     //         date_of_contact: date_of_contact.value,
//     //         has_exposure_place: (place_selected == 'yes')? 'yes' : ((place_selected == 'no')? 'no': 'unknown'),
//     //         //place_yes: place_yes.value,
//     //         //place_no: place_no.value,
//     //         //place_unknown: place_unknown.value,
//     //         //
//     //         place_visited: place_visited.value,
//     //         name_of_place: name_of_place.value, 
//     //         date_visited: date_visited.value, 
//     //         //
//     //         close_contact_name: close_contact_name.value,
//     //         close_contact_number: close_contact_number.value,
//     //         close_contact_name2: close_contact_name2.value,
//     //         close_contact_number2: close_contact_number2.value,

//     //         is_disposition_selected: (disposition_selected == 'yes')? 'inpatient' : ((disposition_selected == 'outpatient')? 'outpatient': ((disposition_selected == 'died')? 'died': ((disposition_selected == 'discharged')? 'discharged' : 'unknown')) ),
//     //         //disposition_inpatient: disposition_inpatient.value,
//     //         //disposition_outpatient: disposition_outpatient.value,
//     //         //disposition_died: disposition_died.value,
//     //         //disposition_discharged: disposition_charged.value,
//     //         //disposition_unknown: disposition_died.value,
//     //         illness_date: illness_date.value,
//     //         admission_date: admission_date.value,
//     //         temperature: temperature.value,

//     //         asymptomatic: asymptomatic.value,
//     //         fever: fever.value,
//     //         cough: cough.value,
//     //         weakness: weakness.value,
//     //         fatigue: fatigue.value,
//     //         headache: headache.value,
//     //         myalgia: myalgia.value,
//     //         sorethroat: sorethroat.value,
//     //         coryza: coryza.value,
//     //         //cough again
//     //         dyspnea: dyspnea.value,
//     //         anorexia: anorexia.value,
//     //         nausea: nausea.value,
//     //         vomiting: vomiting.value,
//     //         diarrhea: diarrhea.value,
//     //         altered: altered.value,
//     //         anomia: anosmia.value,
//     //         ageusia: ageusia.value,
            
//     //         is_history_of_illness_selected: (history_of_illness_selected == 'yes')? true: false,
//     //         //history_yes: history_yes.value,
//     //         //history_no: history_no.value,
//     //         other_illness_date: other_illness_date.value,
//     //         is_xray_selected: (chest_xray_selected == 'yes')? true: false,
//     //         //xray_yes: xray_yes.value,
//     //         //xray_no: xray_no.value,
//     //         xray_date: xray_date.value,
//     //         is_pneumonia_selected: (pneumonia_selected == 'yes')? 'pneumonia': ((pneumonia_selected == 'no')? 'normal': ((pneumonia_selected == 'pending')? 'pending':'n/a')),
//     //         //pneumonia_yes: pneumonia_yes.value,
//     //         //pneumonia_no: pneumonia_no.value,
//     //         //pneumonia_pending: pneumonia_pending.value,
//     //         //pneumonia_na: pneumonia_na.value,
//     //         other_findings: other_findings.value,
//     //         is_pregnant_selected: (pregnant_selected == 'yes')? true: false,
//     //         //pregnant_yes: pregnant_yes.value,
//     //         //pregnant_na: pregnant_na.value,
//     //         is_high_yes_selected: (high_selected == 'yes')? 'yes': ((high_selected == 'no')? 'no': 'n/a'),
//     //         //high_yes: high_yes.value,
//     //         //high_no: high_no.value,
//     //         //high_na: high_na.value,

//     //         serum_hr_collected: serum_hr_collected.value,
//     //         serum_min_collected: serum_min_collected.value,
//     //         serum_hr_sent: serum_hr_sent.value,
//     //         serum_min_sent: serum_min_sent.value,
//     //         serum_hr_received: serum_hr_received.value,
//     //         serum_min_received: serum_min_received.value,
//     //         serum_virus_isolation: serum_virus_isolation.value,
//     //         serum_pcr: serum_pcr.value,

//     //         naso_hr_collected: naso_hr_collected.value,
//     //         naso_min_collected: naso_min_collected.value,
//     //         naso_hr_sent: naso_hr_sent.value,
//     //         naso_min_sent: naso_min_sent.value,
//     //         naso_hr_received: naso_hr_received.value,
//     //         naso_min_received: naso_min_received.value,
//     //         naso_virus_isolation: naso_virus_isolation.value,
//     //         naso_pcr: naso_pcr.value,

//     //         oro_hr_collected: oro_hr_collected.value,
//     //         oro_hr_received: oro_hr_received.value,
//     //         oro_hr_sent: oro_hr_sent.value,
//     //         oro_min_sent: oro_min_sent.value,
//     //         oro_hr_received: oro_hr_received.value,
//     //         oro_min_received: oro_min_received.value,
//     //         oro_virus_isolation: oro_virus_isolation.value,
//     //         oro_pcr: oro_pcr.value,

//     //         other_hr_collected: other_hr_collected.value,
//     //         other_min_collected: other_min_collected.value,
//     //         other_hr_sent: other_hr_sent.value,
//     //         other_min_sent: other_min_sent.value,
//     //         other_hr_received: other_hr_received.value,
//     //         other_min_received: other_min_received.value,
//     //         other_virus_isolation: other_virus_isolation.value,
//     //         other_pcr: other_pcr.value,

//     //         is_final_selected: (final_classification_selected == 'suspect')? 'suspect': ((final_classification_selected == 'probable')? 'probable': ((final_classification_selected == 'confirmed')? 'confirmed': ((final_classification_selected == 'discharged')? 'discharged' : 'unknown'))),
//     //         //final_suspect: final_suspect.value,
//     //         //final_probable: final_probable.value,
//     //         //final_confirmed: final_confirmed.value,
//     //         //final_discharged: final_discharged.value,
//     //         //final_unknown: final_unknown.value,

//     //         is_outcome_selected: (outcome_selected == 'improved')? 'improved': ((outcome_selected == 'recovered')? 'recovered': ((outcome_selected == 'transferred')? 'transferred': ((outcome_selected == 'absconded')? 'absconded': 'died'))),
        
//     //     })
//     // })
// })



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
    place_of_work.value = "N/A"
    building_name.value = "N/A"
    employer_street.value = "N/A"
    employer_city.value = "N/A"
    employer_province.value = "N/A"
    employer_country.value = "N/A"
    office_phone_number.value = "N/A"
    office_cellphone_number.value = "N/A"
})

function fillNA () {
    port_of_exit.value = "N/A"
    airline_or_seavessel.value = "N/A"
    flight_or_vessel_no.value = "N/A"
    dop.value = "N/A"
    doa.value = "N/A"
}

function clear_employer_details() {
    employer_name.value = ""
    employer_occupation.value = ""
    place_of_work.value = ""
    building_name.value = ""
    employer_street.value = ""
    employer_city.value = ""
    employer_province.value = ""
    employer_country.value = ""
    office_phone_number.value = ""
    office_cellphone_number.value = ""
}

function clear_travel_history() {
    port_of_exit.value = ""
    airline_or_seavessel.value = ""
    flight_or_vessel_no.value = ""
    dop.value = ""
    doa.value = ""
}

// const investigator = document.querySelector('.investigator');

// const philhealthNo = document.querySelector('.philhealth-no');

// const fname = document.querySelector('.first-name');
// const mname = document.querySelector('.middle-name');
// const lname = document.querySelector('.last-name') || null;

// const age = document.querySelector('.age');
// const sex = document.querySelector('.sex');
// const birthday = document.querySelector('.birthday');
// const occupation = document.querySelector('.occupation');
// const civil_status = document.querySelector('.civil-status');
// const nationality = document.querySelector('.nationality');

// const perm_house = document.querySelector('.permanent-house');
// const perm_barangay = document.querySelector('.perm-brgy');
// const perm_municipality = document.querySelector('.perm-municipality');
// const perm_province = document.querySelector('.perm-province');
// const perm_region = document.querySelector('.perm-region');
// const perm_home_phone_number = document.querySelector('.perm-phone-no');
// const perm_cellphone_number = document.querySelector('.perm-cellphone-no')
// const perm_email = document.querySelector('.email');

// const curr_house = document.querySelector('.curr-house');
// const curr_barangay = document.querySelector('.curr-brgy');
// const curr_municipality = document.querySelector('.curr-municipality');
// const curr_province = document.querySelector('.curr-province');
// const curr_region = document.querySelector('.curr-region');
// const curr_home_phone_number = document.querySelector('.curr-phone-no');
// const curr_cellphone_number = document.querySelector('curr-cellphone-no')
// const curr_email = document.querySelector('.curr-email');

// //Employer

// //added part in server.js
// const employer_name = document.querySelector('.employer-name');
// const employer_occupation = document.querySelector('.employer-occupation');
// //end added part
// const place_of_work = document.querySelector('.place-of-work'); //workplace_name in server
// const building_name = document.querySelector('.employer-house'); //workplace_hn_bl_lot_buildno in server
// const employer_street = document.querySelector('.employer-street'); //workplace_barangay in server
// const employer_city = document.querySelector('.employer-city'); //workplace_muni_city
// const employer_province = document.querySelector('.employer-province'); //workplace_province
// const employer_country = document.querySelector('.employer-country'); //workplace_region
// const office_phone_number = document.querySelector('.office-phone-no'); //workplace_home_no
// const office_cellphone_number = document.querySelector('.office-cellphone-no'); //workplace_cell_no
// //missing for employer part in server.js
// //workplace_email 
// //works_in_closed_settings
// //end missing

// //wala sa cif pero nasa server
// //---------missing----------
// //health_facility_name
// //health_facility_address
// //---------end missing-------


// //---------missing----------
// // city_mun_origin, 
// //province_origin, 
// //is_lsi, 
// //is_apor_localtraveler,
// // institution_name, 
// // institution_type,
// // country_origin, 
// // returning_overseas_filipino_health_facility_address,
// const interviewDate = document.querySelector('.interview-date'); // date_interview, 
// // client_classification, 
// //testing_category, 
// //validation_status, 
// //cif_patient_id, 
// //cif_investigator_id,
// //is_new_case, 
// //is_unknown, 
// //other,
// //symptoms,
// //health_status, 
// //case_classification, 
// //vaccination, 
// //lab_result, 
// //chest_image_findings, 
// //disposition, 
// //exposure,
// //health_status_at_consult, 
// //case_classification_at_consult,
// //date_of_consultation, 
// //consultation_facility_name,
// //admitted_in, 
// //name_of_facility, 
// //datetime_admission_isolation
// //name_of_vaccine, 
// //vaccination_date, 
// //dose_number, 
// //vaccination_facility_name, 
// //vaccination_facility_region, 
// //adverse_effect,
// /* not found in server.js
// const psTOD = document.querySelector('.tod-patient');
// const psPriority = document.querySelector('.priority-patient');
// const labNo = document.querySelector('.lab-no');
// const dru = document.querySelector('.dru_hospital');
// const other_investigator = document.querySelector('.other-investigator'); //added
// const testingCategory = document.querySelector('.testing-category');
// const passport_no = document.querySelector('.passport-no');
// const gross_income = document.querySelector('.gross-income');
// */
// //to add buttons 

// //buttons

// //travel history
// //to add radio buttons
// const travel_selected = document.querySelector('input[name = "travel-history"]:checked').id; //have_ongoing_transmission
// const port_of_exit = document.querySelector('.exit-port');
// const airline_or_seavessel = document.querySelector('.airline-seavessel');
// const flight_or_vessel_no = document.querySelector('.flight-vessel-no');
// const dop = document.querySelector('.departure-date');
// const doa = document.querySelector('.arrival-date');

// //buttons
// //exposure history

// //to add radio buttons
// const exposure_selected = document.querySelector('input[name="exposure"]:checked').id; //has_exposure_people
// // const expo_yes = document.querySelector('.expo-yes');
// // const expo_no = document.querySelector('.expo-no');
// // const expo_unknown = document.querySelector('.expose-unknown');
// const date_of_contact = document.querySelector('.date-of-contact');
// const place_selected = document.querySelector('input[name="place_exposed"]:checked').id; //has_exposure_place
// // const place_yes = document.querySelector('.place-yes');
// // const place_no = document.querySelector('.place-no');
// // const place_unknown = document.querySelector('.place-unknown');

// const place_visited = document.querySelector('.visited-place');
// const name_of_place = document.querySelector('.place-name');
// const date_visited = document.querySelector('.date-visited'); //iisang value lang 


// //add more rows
// //close contact details
// const close_contact_name = document.querySelector('.close-contact-name1');
// const close_contact_number = document.querySelector('.close-contact-no1');
// const close_contact_name2 = document.querySelector('.close-contact-name2');
// const close_contact_number2 = document.querySelector('.close-contact-no2');

// //add more rows button

// //clinical information
// //to add radio buttons
// //added
// const disposition_selected = document.querySelector('input[name = "disposition"]:checked').id;
// /*const disposition_inpatient = document.querySelector('.disposition-inpatient');
// const disposition_outpatient = document.querySelector('.disposition-outpatient');
// const disposition_died = document.querySelector('.disposition-died');
// const disposition_discharged = document.querySelector('.disposition-discharged');
// const disposition_unknown = document.querySelector('.disposition-unknown');*/

// const illness_date = document.querySelector('.illness-date');
// const admission_date = document.querySelector('.admission-date');
// const temperature = document.querySelector('.fever-celsius');

// //sign symptoms
// //checkbox
// const asymptomatic = document.querySelector('.asymptomatic');
// const fever = document.querySelector('.fever');
// const cough = document.querySelector('.cough');
// const weakness = document.querySelector('.weakness');
// const fatigue = document.querySelector('.fatigue');
// const headache = document.querySelector('.headache');
// const myalgia = document.querySelector('.myalgia');
// const sorethroat = document.querySelector('.sorethroat');
// const coryza = document.querySelector('.coryza')
// //const cough = document.querySelect - DOUBLE CHECK 
// const dyspnea = document.querySelector('.dyspnea');
// const anorexia = document.querySelector('.anorexia');
// const nausea = document.querySelector('.nausea');
// const vomiting = document.querySelector('.vomiting');
// const diarrhea = document.querySelector('.diarrhea');
// const altered = document.querySelector('.altered');
// const anosmia = document.querySelector('.anosmia');
// const ageusia = document.querySelector('.ageusia');

// //is there any history of other illness options - radio

// const history_illness_selected = document.querySelector('input[name="history_of_illness"]:checked').id;
// // const history_yes = document.querySelector('.history-yes');
// // const history_no = document.querySelector('.history-no');
// const other_illness_date = document.querySelector('.other-illness-date');

// //chest XRAY - radio
// const chest_xray_selected = document.querySelector('input[name = "chest_xray"]:checked').id 
// //const xray_yes = document.querySelector('.xray-yes');
// //const xray_no = document.querySelector('.xray-no');
// const xray_date = document.querySelector('.xray-date');

// //CXR results - radio
// const pneumonia_selected = document.querySelector('input[name = "travel-history"]:checked').id
// /*const pneumonia_yes = document.querySelector('.pneumonia-yes');
// const pneumonia_no = document.querySelector('.pneumonia-no');
// const pneumonia_pending = document.querySelector('.pneumonia-pending');
// const pneumonia_na = document.querySelector('.pneumonia-na');*/

// //Other radiological findings - radio
// const other_findings = document.querySelector('.other_findings');

// //assessed as high risk pregnancy - radio
// const pregnant_selected = document.querySelector('input[name="pregnant"]:checked').id;
// // const pregnant_yes = document.querySelector('.pregnant-yes');
// // const pregnant_no = document.querySelector('.pregnant-no');
// // const pregnant_na = document.querySelector('.pregnant-na');
// const high_selected = document.querySelector('input[name="high_risk_pregnancy"]:checked').id
// /*const high_yes = document.querySelector('.high-yes');
// const high_no = document.querySelector('.high-no');
// const high_na = document.querySelector('.high-na');*/

// //specimen information

// //const serum = document.querySelector('.')
// const serum_hr_collected = document.querySelector('.serum-hr-collected')
// const serum_min_collected = document.querySelector('.serum-min-collected')
// const serum_hr_sent = document.querySelector('.serum-hr-sent')
// const serum_min_sent = document.querySelector('.serum-min-sent')
// const serum_hr_received = document.querySelector('.serum-hr-received')
// const serum_min_received = document.querySelector('.serum-min-received')
// const serum_virus_isolation = document.querySelector('serum-virus-isolation')
// const serum_pcr = document.querySelector('serum-pcr')

// const naso_hr_collected = document.querySelector('.naso-hr-collected')
// const naso_min_collected = document.querySelector('.naso-min-collected')
// const naso_hr_sent = document.querySelector('.naso-hr-sent')
// const naso_min_sent = document.querySelector('.naso-min-sent')
// const naso_hr_received = document.querySelector('.naso-hr-received')
// const naso_min_received = document.querySelector('.naso-min-received')
// const naso_virus_isolation = document.querySelector('naso-virus-isolation')
// const naso_pcr = document.querySelector('naso-pcr')

// const oro_hr_collected = document.querySelector('.oro-hr-collected')
// const oro_min_collected = document.querySelector('.oro-min-collected')
// const oro_hr_sent = document.querySelector('.oro-sent')
// const oro_min_sent = document.querySelector('.oro-min-sent')
// const oro_hr_received = document.querySelector('.oro-hr-received')
// const oro_min_received = document.querySelector('.oro-min-received')
// const oro_virus_isolation = document.querySelector('oro-virus-isolation')
// const oro_pcr = document.querySelector('oro-pcr')

// const other_hr_collected = document.querySelector('.other-hr-collected')
// const other_min_collected = document.querySelector('.other-min-collected')
// const other_hr_sent = document.querySelector('.other-hr-sent')
// const other_min_sent = document.querySelector('.other-min-sent')
// const other_hr_received = document.querySelector('.other-hr-received')
// const other_min_received = document.querySelector('.other-min-received')
// const other_virus_isolation = document.querySelector('other-virus-isolation')
// const other_pcr = document.querySelector('other-pcr')

// const final_classification_selected = document.querySelector('input[name = "final_classification"]:checked').id
// /*const final_suspect = document.querySelector('.final-suspect')
// const final_probable = document.querySelector('.final-probable')
// const final_confirmed = document.querySelector('.final-confirmed')
// const final_discharged = document.querySelector('.final-discharged')
// const final_unknown = document.querySelector('.final-unknown')*/

// const outcome_selected = document.querySelector('input[name = "condition_on_discharge"]:checked').id
// const informant_name = document.querySelector('.informant-name');
// const relationship = document.querySelector('.relationship');
// const informant_phone_number = document.querySelector('.informant-phone-number')

// //Final Classification

// //const close_contact_number = document.querySelector('.close-contact-no1');

// const email = document.querySelector('.email');

// const password = document.querySelector('.password');
// const usertype = document.querySelector('.usertype');
// const druselect = document.querySelector('.dru');
// const submitBtn = document.querySelector('.save-button');

// submitBtn.addEventListener('click', () => {
//     //console.log(fname.value)
//     var inv_surname = investigator.value.split(",")[0]
//     console.log(inv_surname)
    
//     fetch('/insert-cif', {
//         method: 'post',
//         headers: new Headers({ 'Content-Type' : 'application/json'}),
//         body: JSON.stringify({
//             investigator: inv_surname, //surname for test only, add first name here
//             philhealthNo: philhealthNo.value,
//             testingCategory: testingCategory.value, //ilalim pa 
//             fname: fname.value,
//             mname: mname.value,
//             lname: lname.value,
//             age: age.value,
//             sex: sex.value,
//             birthday: birthday.value,            
//             occupation: occupation.value,
//             civil_status: civil_status.value,
//             nationality: nationality.value,

//             perm_house: perm_house.value,
//             perm_barangay: perm_barangay.value,
//             perm_municipality: perm_municipality.value,
//             perm_province: perm_province.value,
//             perm_region: perm_region.value,
//             perm_home_phone_number: perm_home_phone_number.value,
//             perm_cellphone_number: perm_cellphone_number.value,
//             perm_email: perm_email.value,
//             curr_house: curr_house.value,
//             curr_barangay: curr_barangay.value,
//             curr_municipality: curr_municipality.value,
//             curr_province: curr_province.value,
//             curr_region: curr_region.value,
//             curr_home_phone_number: curr_home_phone_number.value,
//             curr_cellphone_number: curr_cellphone_number.value,
//             curr_cellphone_number: curr_cellphone_number.value,
//             curr_email: curr_email.value,


//             employer_name: employer_name.value,
//             employer_occupation: employer_occupation.value,
//             place_of_work: place_of_work.value,
//             building_name: building_name.value,
//             employer_street: employer_street.value,
//             employer_city: employer_city.value,
//             employer_province: employer_province.value,
//             employer_country: employer_country.value,
//             office_phone_number: office_phone_number.value,
//             office_cellphone_number: office_cellphone_number.value,

//             //not in server
//             //psTOD: psTOD.value,
//             //psPriority: psPriority.value,
//             //labNo: labNo.value,
//             //dru: dru.value,
//             //investigator: investigator.value,
//             //other_investigator: other_investigator.value,
//             //interviewDate: interviewDate.value,
//             //testingCategory: testingCategory.value,

//             //passport_no: passport_no.value,
//             //gross_income: gross_income.value,
//             //end not in server
            
//             //radio buttons
//             //has exposure place element in req.body
//             //travel_yes: travel_yes.value,
//             //travel_no: travel_no.value,
//             have_ongoing_transmission: (travel_selected == 'yes')? true: false,
//             port_of_exit: port_of_exit.value,
//             airline_or_seavessel: airline_or_seavessel.value,
//             flight_or_vessel_no: flight_or_vessel_no.value,
//             dop: dop.value,
//             doa: doa.value,
//             has_exposure_people: (exposure_selected == 'yes')? 'yes' : ((exposure_selected == 'no')? 'no' : 'unknown' ),
//             //expo_yes: expo_yes.value,
//             //expo_no: expo_no.value,
//             //expo_unknown: expo_unknown.value,
//             date_of_contact: date_of_contact.value,
//             has_exposure_place: (place_selected == 'yes')? 'yes' : ((place_selected == 'no')? 'no': 'unknown'),
//             //place_yes: place_yes.value,
//             //place_no: place_no.value,
//             //place_unknown: place_unknown.value,
//             //
//             place_visited: place_visited.value,
//             name_of_place: name_of_place.value, 
//             date_visited: date_visited.value, 
//             //
//             close_contact_name: close_contact_name.value,
//             close_contact_number: close_contact_number.value,
//             close_contact_name2: close_contact_name2.value,
//             close_contact_number2: close_contact_number2.value,

//             is_disposition_selected: (disposition_selected == 'yes')? 'inpatient' : ((disposition_selected == 'outpatient')? 'outpatient': ((disposition_selected == 'died')? 'died': ((disposition_selected == 'discharged')? 'discharged' : 'unknown')) ),
//             //disposition_inpatient: disposition_inpatient.value,
//             //disposition_outpatient: disposition_outpatient.value,
//             //disposition_died: disposition_died.value,
//             //disposition_discharged: disposition_charged.value,
//             //disposition_unknown: disposition_died.value,
//             illness_date: illness_date.value,
//             admission_date: admission_date.value,
//             temperature: temperature.value,

//             asymptomatic: asymptomatic.value,
//             fever: fever.value,
//             cough: cough.value,
//             weakness: weakness.value,
//             fatigue: fatigue.value,
//             headache: headache.value,
//             myalgia: myalgia.value,
//             sorethroat: sorethroat.value,
//             coryza: coryza.value,
//             //cough again
//             dyspnea: dyspnea.value,
//             anorexia: anorexia.value,
//             nausea: nausea.value,
//             vomiting: vomiting.value,
//             diarrhea: diarrhea.value,
//             altered: altered.value,
//             anomia: anosmia.value,
//             ageusia: ageusia.value,
            
//             is_history_of_illness_selected: (history_of_illness_selected == 'yes')? true: false,
//             //history_yes: history_yes.value,
//             //history_no: history_no.value,
//             other_illness_date: other_illness_date.value,
//             is_xray_selected: (chest_xray_selected == 'yes')? true: false,
//             //xray_yes: xray_yes.value,
//             //xray_no: xray_no.value,
//             xray_date: xray_date.value,
//             is_pneumonia_selected: (pneumonia_selected == 'yes')? 'pneumonia': ((pneumonia_selected == 'no')? 'normal': ((pneumonia_selected == 'pending')? 'pending':'n/a')),
//             //pneumonia_yes: pneumonia_yes.value,
//             //pneumonia_no: pneumonia_no.value,
//             //pneumonia_pending: pneumonia_pending.value,
//             //pneumonia_na: pneumonia_na.value,
//             other_findings: other_findings.value,
//             is_pregnant_selected: (pregnant_selected == 'yes')? true: false,
//             //pregnant_yes: pregnant_yes.value,
//             //pregnant_na: pregnant_na.value,
//             is_high_yes_selected: (high_selected == 'yes')? 'yes': ((high_selected == 'no')? 'no': 'n/a'),
//             //high_yes: high_yes.value,
//             //high_no: high_no.value,
//             //high_na: high_na.value,

//             serum_hr_collected: serum_hr_collected.value,
//             serum_min_collected: serum_min_collected.value,
//             serum_hr_sent: serum_hr_sent.value,
//             serum_min_sent: serum_min_sent.value,
//             serum_hr_received: serum_hr_received.value,
//             serum_min_received: serum_min_received.value,
//             serum_virus_isolation: serum_virus_isolation.value,
//             serum_pcr: serum_pcr.value,

//             naso_hr_collected: naso_hr_collected.value,
//             naso_min_collected: naso_min_collected.value,
//             naso_hr_sent: naso_hr_sent.value,
//             naso_min_sent: naso_min_sent.value,
//             naso_hr_received: naso_hr_received.value,
//             naso_min_received: naso_min_received.value,
//             naso_virus_isolation: naso_virus_isolation.value,
//             naso_pcr: naso_pcr.value,

//             oro_hr_collected: oro_hr_collected.value,
//             oro_hr_received: oro_hr_received.value,
//             oro_hr_sent: oro_hr_sent.value,
//             oro_min_sent: oro_min_sent.value,
//             oro_hr_received: oro_hr_received.value,
//             oro_min_received: oro_min_received.value,
//             oro_virus_isolation: oro_virus_isolation.value,
//             oro_pcr: oro_pcr.value,

//             other_hr_collected: other_hr_collected.value,
//             other_min_collected: other_min_collected.value,
//             other_hr_sent: other_hr_sent.value,
//             other_min_sent: other_min_sent.value,
//             other_hr_received: other_hr_received.value,
//             other_min_received: other_min_received.value,
//             other_virus_isolation: other_virus_isolation.value,
//             other_pcr: other_pcr.value,

//             is_final_selected: (final_classification_selected == 'suspect')? 'suspect': ((final_classification_selected == 'probable')? 'probable': ((final_classification_selected == 'confirmed')? 'confirmed': ((final_classification_selected == 'discharged')? 'discharged' : 'unknown'))),
//             //final_suspect: final_suspect.value,
//             //final_probable: final_probable.value,
//             //final_confirmed: final_confirmed.value,
//             //final_discharged: final_discharged.value,
//             //final_unknown: final_unknown.value,

//             is_outcome_selected: (outcome_selected == 'improved')? 'improved': ((outcome_selected == 'recovered')? 'recovered': ((outcome_selected == 'transferred')? 'transferred': ((outcome_selected == 'absconded')? 'absconded': 'died'))),
        
//         })
//     })
// })



// // Minimize sidebar
// document.getElementById('close-nav').addEventListener('click', () => {
//     document.getElementById('nav').style.width = '100px';
//     document.getElementById('open-nav').style.display = 'inline';

//     const toggleElements = document.querySelectorAll('.nav-component-toggle');
//     toggleElements.forEach(el => {
//         el.style.display = 'none';
//     });

//     document.querySelector('hr').style.width = '37px';
//     document.querySelector('.btn-collapse').style.display = 'none';
//     document.querySelector('.btn-expand').style.display = 'block';

//     const navItem = document.querySelectorAll('.nav-item');
//     navItem.forEach(el => {
//         el.style.textAlign = 'center';
//         // el.style.backgroundColor = 'transparent';
//         el.style.display = 'block';
//         el.style.width = '65%';
//         el.style.marginLeft = '10px';
//     });

//     const navItemImg = document.querySelectorAll('.nav-item > img');
//     navItemImg.forEach(el => {
//         el.style.paddingLeft = '0px';
//     });

//     document.getElementById('main-content').style.width = '100%';
// });

// // Maximize sidebar
// document.getElementById('open-nav').addEventListener('click', () => {
//     document.getElementById('nav').style.width = '325px';
//     document.getElementById('open-nav').style.display = 'none';

//     const toggleElements = document.querySelectorAll('.nav-component-toggle');
//     toggleElements.forEach(el => {
//         el.style.display = 'inline';
//     });

//     document.querySelector('hr').style.width = '121.48px';
//     document.querySelector('.btn-expand').style.display = 'none';
//     document.querySelector('.btn-collapse').style.display = 'block';

//     const navItem = document.querySelectorAll('.nav-item');
//     navItem.forEach(el => {
//         el.style.textAlign = 'none';
//         // el.style.backgroundColor = 'rgba(255,255,255, 0.3)';
//         el.style.display = 'flex';
//         el.style.width = '95%';
//         el.style.marginLeft = '0px';
//     });

//     const navItemImg = document.querySelectorAll('.nav-item > img');
//     navItemImg.forEach(el => {
//         el.style.paddingLeft = '5px';
//     });


//     document.getElementById('main-content').style.width = '80%';
// });

// // Toggle Dropdown
// function toggleDropdown() {
//     var element = document.getElementById('dropdown');
//     element.classList.toggle("show");
// }

// //fill input fields with n/a

// const naBtn = document.querySelector('.na-button');

// naBtn.addEventListener('click', () => { 
//     employer_name.value = "N/A"
//     employer_occupation.value = "N/A"
//     place_of_work.value = "N/A"
//     building_name.value = "N/A"
//     employer_street.value = "N/A"
//     employer_city.value = "N/A"
//     employer_province.value = "N/A"
//     employer_country.value = "N/A"
//     office_phone_number.value = "N/A"
//     office_cellphone_number.value = "N/A"
// })

// function fillNA () {
//     port_of_exit.value = "N/A"
//     airline_or_seavessel.value = "N/A"
//     flight_or_vessel_no.value = "N/A"
//     dop.value = "N/A"
//     doa.value = "N/A"
// }

// function clear_employer_details() {
//     employer_name.value = ""
//     employer_occupation.value = ""
//     place_of_work.value = ""
//     building_name.value = ""
//     employer_street.value = ""
//     employer_city.value = ""
//     employer_province.value = ""
//     employer_country.value = ""
//     office_phone_number.value = ""
//     office_cellphone_number.value = ""
// }

// function clear_travel_history() {
//     port_of_exit.value = ""
//     airline_or_seavessel.value = ""
//     flight_or_vessel_no.value = ""
//     dop.value = ""
//     doa.value = ""
// }