const { PDFDocument } = require('pdf-lib');
const { readFile, writeFile } = require('fs/promises');

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
        const possibleFields = Array.from({ lenght: 111}, (_, i) => i);
        possibleFields.forEach((possibleField) => {
            try{
                form
                .getTextField('Text${possibleField}')
                .setText(possibleField.toString());
            } catch(error){
                //console.error(error);
            }
        });

        form.getTextField('Name of Informant').setText('John Smith');

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