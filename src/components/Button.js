import PropTypes from "prop-types";

const Button = ({ title, buttonColor, fontColor, onClick }) => {
    const buttonStyle = {
        backgroundColor: buttonColor,
        color: fontColor,
    };

    return (
        <button className="btn" style={buttonStyle} onClick={onClick}>
            {title}
        </button>
    );
};

Button.defaultProps = {
    title: "Insert Title",
    buttonColor: "black",
    fontColor: "white",
};

Button.propTypes = {
    title: PropTypes.string,
    buttonColor: PropTypes.string,
    fontColor: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
