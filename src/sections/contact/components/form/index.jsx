import "./index.css";
import FormInput from "../../../../components/formInput";
import { isNotEmpty, doesNotContainNumbers } from "../../../../util/validation";
import { useInput } from "../../../../hooks/useInput";
import FormButton from "../../../../components/formButton";

const Form = () => {
	const {
		value: firstNameValue,
		handleInputChange: handleFirstNameChange,
		handleInputBlur: handleFirstNameBlur,
		hasError: firstNameHasError,
	} = useInput(
		"",
		(value) => isNotEmpty(value) && doesNotContainNumbers(value)
	);
	const {
		value: lastNameValue,
		handleInputChange: handleLastNameChange,
		handleInputBlur: handleLastNameBlur,
		hasError: lastNameHasError,
	} = useInput(
		"",
		(value) => isNotEmpty(value) && doesNotContainNumbers(value)
	);
	const {
		value: phoneValue,
		handleInputChange: handlePhoneChange,
		handleInputBlur: handlePhoneBlur,
		hasError: phoneHasError,
	} = useInput(
		"",
		isNotEmpty
	);
	const {
		value: servicesValue,
		handleInputChange: handleServicesChange,
		handleInputBlur: handleServicesBlur,
		hasError: servicesHasError,
	} = useInput(
		"",
		isNotEmpty
	);

	function handleSubmit(event) {
		event.preventDefault();
		if (firstNameHasError || phoneHasError || lastNameHasError || servicesHasError) {
			return;
		}
		console.log("Form submitted");
	}
	return (
		<div className="contact__form-container">
			<form onSubmit={handleSubmit}>
				<FormInput
					id="firstName"
					name="firstName"
					type="text"
					placeholder="First Name"
					onBlur={handleFirstNameBlur}
					onChange={handleFirstNameChange}
					value={firstNameValue}
					error={
						firstNameHasError &&
						"The first name field must not contain numbers and must not be empty."
					}
					required
				></FormInput>
				<FormInput
					id="lastName"
					name="lastName"
					type="text"
					placeholder="Last Name"
					onBlur={handleLastNameBlur}
					onChange={handleLastNameChange}
					value={lastNameValue}
					error={
						lastNameHasError &&
						"The last name field must not contain numbers and must not be empty."
					}
					required
				></FormInput>
				<FormInput
					id="phoneNumber"
					name="phoneNumber"
					type="tel"
					placeholder="Phone Number"
					inputStyle="full"
					labelStyle="full"
					onBlur={handlePhoneBlur}
					onChange={handlePhoneChange}
					value={phoneValue}
					error={
						phoneHasError &&
						"The phone number field must not be empty."
					}
					required
				></FormInput>
				<FormInput
					id="services"
					name="services"
					type="text"
					placeholder="What Service are you interested in?"
					inputStyle="full"
					labelStyle="full"
					onBlur={handleServicesBlur}
					onChange={handleServicesChange}
					value={servicesValue}
					error={
						servicesHasError &&
						"The services field must not be empty."
					}
					required
				></FormInput>
				<div className="contact__form-actions">
					<FormButton btnText="SUBMIT NOW"></FormButton>
				</div>
			</form>
		</div>
	);
};

export default Form;
