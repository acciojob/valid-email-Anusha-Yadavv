function validEmail(email) {
  //your JS code here.
	if (!email) {
    return false;
  }

  // Split the email into local part and domain part
  const [localPart, domainPart] = email.split('@');

  // Check if there is a local part and a domain part after the @ symbol
  if (!localPart || !domainPart) {
    return false;
  }

  // Check if there is at least one dot in the domain part
  if (!domainPart.includes('.')) {
    return false;
  }

  // Check if the local part and domain part do not start or end with a dot
  if (localPart.startsWith('.') || localPart.endsWith('.') || domainPart.startsWith('.') || domainPart.endsWith('.')) {
    return false;
  }

  // Check if there are no consecutive dots in the local part or domain part
  if (localPart.includes('..') || domainPart.includes('..')) {
    return false;
  }

  // Check if the length of the domain part is at least 2 characters
  if (domainPart.length < 2) {
    return false;
  }

  return true;
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
