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
        const possibleFields = Array.from({ length: 200}, (_, i) => i);
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

          const HomePhoneNoAreaCodeRow1 = form.getTextField('Home Phone No Area CodeRow1')

          const CellphoneNoRow1Field = form.getTextField('Cellphone NoRow1')

          const EmailAddressRow1Field = form.getTextField('Email AddressRow1')

          const HouseNoLotBldgRow1_2Field = form.getTextField('House NoLotBldgRow1_2')

          const StreetPurokSitioRow1_2Field = form.getTextField('StreePurokSitioRow1_2')

          const BarangayRow1_2Field = form.getTextField('BarangayRow1_2')

          const MunicipalityCityRow1_2Field = form.getTextField('MunicipalityCityRow1_2')

          const ProvinceRow1_2Field = form.getTextField('ProvinceRow1_2')

          const HomePhoneNoAreaCodeRow1_2 = form.getTextField('Home Phone No Area CodeRow1_2')

          const CellphoneNoRow1_2Field = form.getTextField('Cellphone NoRow1_2')

          const EmailAddressRow1_2Field = form.getTextField('Email AddressRow1_2')

          const HouseNoLotBldgRow1_3Field = form.getTextField('House NoLotBldgRow1_3')

          const StreetPurokSitioRow1_3Field = form.getTextField('StreePurokSitioRow1_3')

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

          const doseNumberField = form.getTextField('Dose number eg 1st 2ndRow1')

          const vaccinationCenterField = form.getTextField('Vaccination centerfacilityRow1')

          const regionofHealthFacilityRow1Field = form.getTextField('Region of health facilityRow1')

          const nameofVaccineRow2Field = form.getTextField('Name of VaccineRow2')

          const doseNumberField2 = form.getTextField('Dose number eg 1st 2ndRow2')

          const vaccinationCenterField2 = form.getTextField('Vaccination centerfacilityRow2')

          const regionofHealthFacilityRow2Field = form.getTextField('Region of health facilityRow2') 

          const ifInternationalTravelCountryofOriginField = form.getTextField('If International Travel country of origin')
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

  createPdf('CIF_unlocked.pdf', 'output.pdf');