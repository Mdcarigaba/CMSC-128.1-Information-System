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