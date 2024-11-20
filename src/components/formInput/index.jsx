import "./index.css";

const FormInput = ({ error, inputStyle, labelStyle, ...props }) => {
  const formClasses = inputStyle === 'full' ? 'formInput formInput-full' : 'formInput formInput-half';
	const labelClasses = labelStyle === "full" ? "label-full" : "label-half";

	return (
		<div className="input-control">
			<input className={formClasses} {...props} />
			<div className={`input-control__error ${labelClasses}`}>
				{error && <p>{error}</p>}
			</div>
		</div>
	);
};

export default FormInput;
