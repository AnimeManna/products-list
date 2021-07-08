import { FormTextFieldInput } from "../../components/Form/interface";

export default class FormService {
  static convertFormFieldArrayToObject(formFieldsArray: any) {
    const objectFormFields = Object.assign(
      {},
      ...formFieldsArray.map((formField: FormTextFieldInput) => ({
        [formField.name]: formField.value,
      }))
    );
    return objectFormFields;
  }
}
