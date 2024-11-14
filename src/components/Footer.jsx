// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'

class Footer extends Component {
    render() {
        const currentYear = new Date().getFullYear();
        return (
            <footer className="bg-zenblue py-3 text-center dark:bg-gray-800 dark:text-white">
                Copyright &copy; 2023 - {currentYear}
            </footer>
        )
    }
}

export default Footer;
