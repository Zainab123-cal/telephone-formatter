const phoneInput = document.getElementById('phone-input');
const formatBtn = document.getElementById('format-btn');
const formattedPhone = document.getElementById('formatted-phone');

formatBtn.addEventListener('click', formatPhoneNumber);

function formatPhoneNumber() {
  const phoneNumber = phoneInput.value;
  const formattedNumber = formatPhoneNumberUtil(phoneNumber);
  formattedPhone.textContent = formattedNumber;
}

function formatPhoneNumberUtil(phoneNumber) {
  const cleanedPhoneNumber = phoneNumber.replace(/\D+/g, '');
  const match = cleanedPhoneNumber.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
  if (match) {
    const intlCode = match[1];
    const areaCode = match[2];
    const lineNumber = match[3];
    return `(${intlCode}) ${areaCode}-${lineNumber}`;
  }
  return phoneNumber;
}