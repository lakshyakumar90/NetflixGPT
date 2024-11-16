const emailRegex = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

export const checkValidSignUpData = (name, email, password) => {

  if(name === "") {
    return "Please enter your name"
  }

  if(email === "") {
    return "Please enter your email address"
  }

  if(password === "") {
    return "Please enter the password "
  }

  const isEmailVaild =
    emailRegex.test(
      email
    );

  const isPasswordVaild =
    passwordRegex.test(
      password
    );

  const isNameVaild = /^[a-zA-Z0-9._-]{3,16}$/.test(name);

  if (!isNameVaild) return "Name is Invalid";
  if (!isEmailVaild) return "Invalid email address";
  if (!isPasswordVaild) return "Password is Invalid";

  return null;
};

export const checkValidLoginData = (email, password) => {

  if(email === "") {
    return "Please enter your email address"
  }

  if(password === "") {
    return "Please enter the password "
  }

  const isEmailVaild = 
    emailRegex.test(
      email
    );

  const isPasswordVaild =
    passwordRegex.test(
      password
    );

  if (!isEmailVaild) return "Invalid email address";
  if (!isPasswordVaild) return "Password is Invalid";

  return null;
}