const { PDFDocument } = PDFLib

async function fillForm() {
    // Fetch the PDF with form fields
  //const formUrl = "CIF.pdf"//'https://pdf-lib.js.org/assets/dod_character.pdf'
  //const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer())
  const formPdfBytes = await fetch("CIF.pdf").then(res => res.arrayBuffer())
        // Fetch the Mario image
  /*const marioUrl = 'https://pdf-lib.js.org/assets/small_mario.png'
  const marioImageBytes = await fetch(marioUrl).then(res => res.arrayBuffer())

        // Fetch the emblem image
  const emblemUrl = 'https://pdf-lib.js.org/assets/mario_emblem.png'
  const emblemImageBytes = await fetch(emblemUrl).then(res => res.arrayBuffer())*/

  // Load a PDF with form fields
  const pdfDoc = await PDFDocument.load(formPdfBytes)
  //const pdfDoc = await PDFDocument.load(await readFile('CIF.pdf'));

  //console.log({fieldNames});

  // Embed the Mario and emblem images
  /*const marioImage = await pdfDoc.embedPng(marioImageBytes)
  const emblemImage = await pdfDoc.embedPng(emblemImageBytes)*/

  // Get the form containing all the fields
  const form = pdfDoc.getForm()

  // Get all fields in the PDF by their names
  const ageField = form.getTextField('Age')
  //const birthdayField = form.getTextField('Birthday')
  const sexField = form.getTextField('Sex')

  ageField.setText(document.getElementById("age").value)
  sexField.setText(document.getElementById("sex").value)
  /*
  const nameField = form.getTextField('CharacterName 2')
  const ageField = form.getTextField('Age')
  const heightField = form.getTextField('Height')
  const weightField = form.getTextField('Weight')
  const eyesField = form.getTextField('Eyes')
  const skinField = form.getTextField('Skin')
  const hairField = form.getTextField('Hair')

  const alliesField = form.getTextField('Allies')
  const factionField = form.getTextField('FactionName')
  const backstoryField = form.getTextField('Backstory')
  const traitsField = form.getTextField('Feat+Traits')
  const treasureField = form.getTextField('Treasure')

  const characterImageField = form.getButton('CHARACTER IMAGE')
  const factionImageField = form.getButton('Faction Symbol Image')*/

  /*
  // Fill in the basic info fields
  //nameField.setText('Mario')
  nameField.setText(document.getElementById("name").value)
  ageField.setText(document.getElementById("age").value)
  //ageField.setText('24 years')
  heightField.setText(`5' 1"`)
  weightField.setText('196 lbs')
  eyesField.setText('blue')
  skinField.setText('white')
  hairField.setText('brown')

  // Fill the character image field with our Mario image
  characterImageField.setImage(marioImage)

  // Fill in the allies field
  alliesField.setText(
    [
      `Allies:`,
      `  • Princess Daisy`,
      `  • Princess Peach`,
      `  • Rosalina`,
      `  • Geno`,
      `  • Luigi`,
      `  • Donkey Kong`,
      `  • Yoshi`,
      `  • Diddy Kong`,
      ``,
      `Organizations:`,
      `  • Italian Plumbers Association`,
    ].join('\n'),
  )

  // Fill in the faction name field
  factionField.setText(`Mario's Emblem`)

  // Fill the faction image field with our emblem image
  factionImageField.setImage(emblemImage)

  // Fill in the backstory field
  backstoryField.setText(
    `Mario is a fictional character in the Mario video game franchise, owned by Nintendo and created by Japanese video game designer Shigeru Miyamoto. Serving as the company's mascot and the eponymous protagonist of the series, Mario has appeared in over 200 video games since his creation. Depicted as a short, pudgy, Italian plumber who resides in the Mushroom Kingdom, his adventures generally center upon rescuing Princess Peach from the Koopa villain Bowser. His younger brother and sidekick is Luigi.`,
  )

  // Fill in the traits field
  traitsField.setText(
    [
      `Mario can use three basic three power-ups:`,
      `  • the Super Mushroom, which causes Mario to grow larger`,
      `  • the Fire Flower, which allows Mario to throw fireballs`,
      `  • the Starman, which gives Mario temporary invincibility`,
    ].join('\n'),
  )

  // Fill in the treasure field
  treasureField.setText(['• Gold coins', '• Treasure chests'].join('\n'))
  */

  // Serialize the PDFDocument to bytes (a Uint8Array)
  const pdfBytes = await pdfDoc.save()

        // Trigger the browser to download the PDF document
  download(pdfBytes, "pdf-lib_form_creation_example.pdf", "application/pdf");
}