function displayData() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const genderRadios = document.getElementsByName('gender');
    const image = document.getElementById("imagelink").value;
    const website = document.getElementById("websitelink").value;
    let selectedGender;

    for (const radio of genderRadios) {
      if (radio.checked) {
        selectedGender = radio.value;
        break;
      }
    }

    const interestsCheckboxes = document.getElementsByName('skill');
      const selectedInterests = [];

      for (const checkbox of interestsCheckboxes) {
        if (checkbox.checked) {
          selectedInterests.push(checkbox.value);
        }
      }

      const outputDiv = document.getElementById('output');
      outputDiv.innerHTML = `
        <div class='border'><h2>Registration Details:</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Website:</strong> ${website}</p>

        <p><strong>Gender:</strong> ${selectedGender}</p>
        <p><strong>skills:</strong> ${selectedInterests.join(', ')}</p>
        <img src="${image}" alt="user Image"></div>
      `;
  }