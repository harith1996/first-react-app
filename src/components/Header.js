import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
    const onClick = (e) => {
        console.log(e);
    };
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button title="Add" buttonColor="red" onClick={onClick}></Button>
            <Button
                title="Remove"
                buttonColor="green"
                onClick={onClick}
            ></Button>
            <Button title="Edit" buttonColor="blue" onClick={onClick}></Button>
        </header>
    );
};

Header.defaultProps = {
    title: "Frank",
};

Header.propTypes = {
    title: PropTypes.string,
};

// const headingStyle = {
//     color: 'red'
// }

export default Header;
