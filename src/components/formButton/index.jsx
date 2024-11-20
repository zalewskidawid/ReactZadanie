import "./index.css";

const FormButton = ({btnText, ...props}) => {
	return (
		<button className="form-submit__btn" {...props}>
			{btnText}
		</button>
	);
};

export default FormButton;
