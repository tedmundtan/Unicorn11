import React, { Component } from 'react'

export class Chat extends Component {
    render() {
        return (
            <div className="container">
                <br />
                <div className="contianer" style={{ backgroundColor: "#f4f4f4" }}>
                    <br />
                    <h1>Chat</h1>
                    <h5>Latest Messages</h5>
                    <br />
                </div>
                <br />
                <div style={{ backgroundColor: "#f4f4f4" }}>
                    <br />
                    <p><strong>John</strong>: "Hi, I would like to check if there are any recommendation for me to earn more interest? Regards, Lim Ze Yang"</p>
                    <p><strong>Roboadvisor</strong>: "Dear Mr Lim, we will be assigning a RM to get in touch with you for actions that you can take. Thank you for banking with DBS and we hope to hear from you again!"</p>
                    <br />
                </div>
            </div>
        )
    }
}

export default Chat;
