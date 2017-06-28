import React from 'react';

const Header = ({ message }) => {
	return (
		<h2 className="text-center">
			{message}
		</h2>
	);
};

Header.propTypes = {
	message : React.PropTypes.string.isRequired
};

export default Header;