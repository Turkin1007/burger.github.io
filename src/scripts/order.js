const myOrder = document.querySelector('#myOrder');
const send = document.querySelector('#send');

send.addEventListener('click', event => {
  event.preventDefault();


  if (validateForm(myOrder)) {

    let formData = new FormData(myOrder);

    const data = {
      name: myOrder.elements.name.value,
      phone: myOrder.elements.phone.value,
      comment: myOrder.elements.comment.value,
      to: myOrder.elements.to.value
    }

    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const element = data[key];

        formData.append(key, element);
      }
    }

    console.log(formData);
    
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail/fail');
    xhr.send(formData);
    xhr.addEventListener('load', () => {
          console.log(xhr.response);
      if (xhr.response.status == 1) {
        $("#success").addClass("popup--show");
      } else {
        $("#error").addClass("popup--show");
      };

    });
  }
});

function validateForm(form) {
  let valid = true;

  if (!validateField(form.elements.name)) {
    valid = false;
  }

  if (!validateField(form.elements.phone)) {
    valid = false;
  }

  if (!validateField(form.elements.to)) {
    valid = false;
  }

  if (!validateField(form.elements.comment)) {
    valid = false;
  }

  return valid;
}

function validateField(field) {
  field.nextElementSibling.textContent = field.validationMessage;
  return field.checkValidity();
}