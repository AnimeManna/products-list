export default class ValidateService {
  static composeValidators(...validators: any) {
    return (value: string) => {
      return validators.reduce(
        (error: any, validator: any) => error || validator(value),
        undefined
      );
    };
  }

  static required(value: string) {
    return value ? undefined : "required";
  }

  static emailValidator(email: string) {
    const emailRegExp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegExp.test(email) ? undefined : "Email is incorrect";
  }

  static loginValidator(login: string) {
    const loginRegExp = /^[a-zA-Z0-9_]{5,}[a-zA-Z]+[0-9]*$/;
    return loginRegExp.test(login)
      ? undefined
      : "Login is incorrect. It must have min 6 chapters";
  }

  static passwordValidator(password: string) {
    const passwrodRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    return passwrodRegExp.test(password)
      ? undefined
      : "Password is incorrect. Is must have min 8 chapters and 1 number. Chaper camel and lower register";
  }

  static checkPasswordEqualsConfirmationPassword(
    password: string,
    confirmationPassword: string
  ) {
    return password === confirmationPassword;
  }
}
