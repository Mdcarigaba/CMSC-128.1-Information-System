const { PDFDocument } = require('pdf-lib');
const { readFile, writeFile } = require('fs/promises');

//const name = document.querySelector('.name');
//let age = 12;
//let ageField = 0;



async function createPdf(input, output) {
    try {
        const pdfDoc = await PDFDocument.load(await readFile(input));

        //Modify doc, fill out the form...
        //const fields = pdfDoc.getForm().getFields();
        const fieldNames = pdfDoc.getForm().getFields().map((f) => f.getName());

        //console.log({fields});
        console.log({fieldNames});

        const form = pdfDoc.getForm();

        //form.getTextField('Name of Informant').setText('John Smith');
        //for labelling purposes
        const possibleFields = Array.from({ length: 300}, (_, i) => i); //modify length
        possibleFields.forEach((possibleField) => {
            try{
                form
                .getTextField('Text${possibleField}')
                .setText(possibleField.toString());
            } catch(error){
                //console.error(error);
            }
        });
        
        /*
        possibleFields.forEach(field => {
            const type = possibleFields.constructor.name
            const name = possibleFields.getName()
            console.log(`${type}: ${name}`)
          })
        */

        //added line of codes
          //form.text(document.getElementById("name").value, 10,10);
        //end
        
        //added line of code part 2
        //form.getTextField('Name of Informant').getText();
        //end

        //added line of code part 3
       // var name = $('#name').val();
       // form.getTextField('Name of Informant').setText(document.getElementById("name"));
        //end

        //start
        const age = 'twelve'; 
        const ageField = form.getTextField('Age')
        //ageField.setText(document.getElementById("age").value)
        ageField.setText(age)

        //form.getTextField('Age').setText(document.getElementById("age").value);
        //end
          
        //start
          const house = 'Cavite';
          const houseField = form.getTextField('House NoLotBldgRow1')
          houseField.setText(house);

          //const 
          const streetField = form.getTextField('StreetPurokSitioRow1')

          const BarangayRow1Field = form.getTextField('BarangayRow1')

          const MunicipalityCityRow1Field = form.getTextField('MunicipalityCityRow1')

          const ProvinceRow1Field = form.getTextField('ProvinceRow1')

          const HomePhoneNoAreaCodeRow1Field = form.getTextField('Home Phone No  Area CodeRow1')

          const CellphoneNoRow1Field = form.getTextField('Cellphone NoRow1')

          const EmailAddressRow1Field = form.getTextField('Email AddressRow1')

          const HouseNoLotBldgRow1_2Field = form.getTextField('House NoLotBldgRow1_2')

          const StreetPurokSitioRow1_2Field = form.getTextField('StreetPurokSitioRow1_2')

          const BarangayRow1_2Field = form.getTextField('BarangayRow1_2')

          const MunicipalityCityRow1_2Field = form.getTextField('MunicipalityCityRow1_2')

          const ProvinceRow1_2Field = form.getTextField('ProvinceRow1_2')

          const HomePhoneNoAreaCodeRow1_2 = form.getTextField('Home Phone No  Area CodeRow1_2')

          const CellphoneNoRow1_2Field = form.getTextField('Cellphone NoRow1_2')

          const EmailAddressRow1_2Field = form.getTextField('Email AddressRow1_2')

          //const HouseNoLotBldgRow1_3Field = form.getTextField('House NoLotBldgRow1_3')

          //const StreetPurokSitioRow1_3Field = form.getTextField('StreePurokSitioRow1_3')

          const BarangayRow1_3Field = form.getTextField('BarangayRow1_3')

          const MunicipalityCityRow1_3Field = form.getTextField('MunicipalityCityRow1_3')

          const ProvinceRow1_3Field = form.getTextField('ProvinceRow1_3')

          /*const HomePhoneNoAreaCodeRow1_3 = form.getTextField('Home Phone No Area CodeRow1_3')

          const CellphoneNoRow1_3Field = form.getTextField('Cellphone NoRow1_3') //    'Phone NoCellphone NoRow1',

          const EmailAddressRow1_3Field = form.getTextField('Email AddressRow1_3')*/

          const NameofWorkplaceRow1Field = form.getTextField('Name of WorkplaceRow1')

          const PhoneNoCellphoneNoRow1 = form.getTextField('Phone NoCellphone NoRow1')

          const EmailAddressRow1_3Field = form.getTextField('Email AddressRow1_3')
        
          const nameofVaccineRow1Field = form.getTextField('Name of VaccineRow1')

          const doseNumber1Field = form.getTextField('Dose number eg 1st  2ndRow1')

          const vaccinationCenterField = form.getTextField('Vaccination centerfacilityRow1')

          const regionofHealthFacilityRow1Field = form.getTextField('Region of health facilityRow1')

          const nameofVaccineRow2Field = form.getTextField('Name of VaccineRow2')

          const doseNumberField2 = form.getTextField('Dose number eg 1st  2ndRow2')

          const vaccinationCenterField2 = form.getTextField('Vaccination centerfacilityRow2')

          const regionofHealthFacilityRow2Field = form.getTextField('Region of health facilityRow2') 

          const ifInternationalTravelCountryofOriginField = form.getTextField('If International Travel country of origin')

          const flightVesselNumberRow1Field = form.getTextField('FlightVessel NumberRow1')

          const nameofPlaceHealthFacilityField = form.getTextField('Name of PlaceHealth Facility')

          const addressRegionProvinceMunicipalityCityHealthFacilityField = form.getTextField('Address Region Province MunicipalityCityHealth Facility')

          const addressRegionProvinceMunicipalityCityClosedSettingsField = form.getTextField('Address Region Province MunicipalityCityClosed Settings')

          const nameofPlaceSchoolField = form.getTextField('Name of PlaceSchool')

          const addressRegionProvinceMunicipalityCitySchoolField = form.getTextField('Address Region Province MunicipalityCitySchool')

          const placeWorkplaceField = form.getTextField('Name of PlaceWorkplace')

          const addressRegionProvinceMunicipalityCityWorkplaceField = form.getTextField('Address Region Province MunicipalityCityWorkplace')

          const nameofPlaceMarketField = form.getTextField('Name of PlaceMarket')

          const addressRegionProvinceMunicipalityCityMarketField = form.getTextField('Address Region Province MunicipalityCityMarket')

          const nameofPlaceSocialGatheringFields = form.getTextField('Name of PlaceSocial Gathering')

          const addressRegionProvinceMunicipalityCitySocialGatheringField = form.getTextField('Address Region Province MunicipalityCitySocial Gathering')

          const nameofPlaceOthers = form.getTextField('Name of PlaceOthers')

          const addressRegionProvinceMunicipalityCityOthersField = form.getTextField('Address Region Province MunicipalityCityOthers')

          const airlineSeavesselBuslineTrainRow1Field = form.getTextField('Airline  Sea vessel  Bus line  TrainRow1')

          const flightVesselBusNoRow1Field = form.getTextField('Flight  Vessel  Bus NoRow1')

          const placeofOriginRow1Field = form.getTextField('Place of OriginRow1')

          const destinationRow1Field = form.getTextField('DestinationRow1')

          const airlineSeavesselBuslineTrainRow2Field = form.getTextField('Airline  Sea vessel  Bus line  TrainRow2')

          const flightVesselBusNoRow2Field = form.getTextField('Flight  Vessel  Bus NoRow2')

          const placeofOriginRow2Field = form.getTextField('Place of OriginRow2')

          const destinationRow2Field = form.getTextField('DestinationRow2')

          const diseaseReportingUnitField = form.getTextField('Disease Reporting Unit')

          /*
              'Existing: Not applicable (New case).0.0',
              'Existing: Not applicable (Unknown)',
              'Existing: Update symptoms',
              'Existing: Update health status / outcome',
              'Existing: Update case classification',
              'Existing: Update lab result',
              'Existing: Update chest imaging findings',
              'Existing: Update vaccination',
              'Existing: Update disposition',
              'Existing: Update exposure / travel history',
              'Clear All Fields' 
          */

          const DRURegionandProvinceField = form.getTextField('DRU Region and Province')

          const philhealthNoField = form.getTextField('PhilHealth No')

          const nameofInterviewerField = form.getTextField('Name of Interviewer')

          const contactNumberofInterviewerField = form.getTextField('Contact Number of Interviewer')

          const nameofInformantField = form.getTextField('Name of Informant')

          const relationshipField = form.getTextField('Relationship')

          const contactNumberofInformantField = form.getTextField('Contact Number of Informant')

          /** 
          'Existing: Others',
          'Existing: Others field',
          'Type of Client',
          'Testing Category: A',
          'Testing Category: C',
          'Testing Category: D',
          'Testing Category: E',
          'Testing Category: F',
          'Testing Category: G',
          'Testing Category: H',
          'Testing Category: I',
          'Testing Category: J',
          'Testing Category: B',           
          */

          const lastnameField = form.getTextField('Last Name')

          const firstNameField = form.getTextField('First Name and Suffix')

          const middleNameField = form.getTextField('Middle Name')

          const birthdayField = form.getTextField('Birthday')

          //const Age

          //radio group
          const sexField = form.getRadioGroup('Sex')

          //dropdown
          const civilStatusField = form.getDropdown('Civil Status')

          const nationalityField = form.getTextField('Nationality')

          const occupationField = form.getTextField('Occupation')

          //radio group
          const worksInClosedSettingField = form.getRadioGroup('Works in Closed Setting')

          const healthCareWorkerField = form.getRadioGroup('Health Care Worker')

          const returningOverseasFilipino = form.getRadioGroup('Returning Overseas Filipino')

          const OFWField = form.getRadioGroup('OFW')

        //end
        form.getTextField('Name of Informant').setText('John Smith');

        form.getTextField('Name of Informant').getText();

        form.getCheckBox('Testing Category: A').check();

        const pdfBytes = await pdfDoc.save();

        await writeFile(output, pdfBytes);
        console.log('PDF created!');
    }
    catch (err){
        console.log(err);
    }
  }

  createPdf('../test-1-master/public/pdfgenerator/CIF_unlocked.pdf', 'output.pdf');