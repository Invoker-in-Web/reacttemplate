import React from 'react'

export class Header extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div style={{
                color: 'white', backgroundColor: 'black', display: 'flex',
                justifyContent: 'center', height: '6em', alignItems: 'center'
            }}>
                <h1>TodoList</h1>
            </div>
        )
    }
}

export default Header
