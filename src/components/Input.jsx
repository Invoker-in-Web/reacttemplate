import React from 'react'

export class Input extends React.Component {
    
    render() {
        let btnStyles = { color: 'white', backgroundColor: '#42454a', border: 'none' };
        return (
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <input style={{ width: '100%' }} type="text" placeholder="Add TodoItem..." onChange={this.props.valueChange} />
                <button style={btnStyles} onClick={this.props.addNewRecord}>Submit</button>
            </div>
        )
    }
}

export default Input
