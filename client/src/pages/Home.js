import React, { Component } from 'react';
import { Input, Button } from '@material-ui/core';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: ''
        }
    }

    /**
     * Function to handle the input button change event
     * @param {Event} e 
     * @returns 
     */
    handleChange = (e) => this.setState({ url: e.target.value })

    /**
     * Function to handle the button click event
     */
    join = () => {
        if (this.state.url !== "") {
            var url = this.state.url.split("/")
            window.location.href = `/${url[url.length - 1]}`
        } else {
            var url = Math.random().toString(36).substring(2, 7)
            window.location.href = `/${url}`
        }
    }

    /**
     * Render function 
     * @returns - React Elements
     */
    render() {
        return (
            <div className="container-fluid">
                <div className="row" style={{ padding: "10vh 0" }}>
                    <div className="col-6">
                        <div className="home-left-container">
                            <div className="content">
                                <h1>Microsoft Meeting</h1>
                                <p>Meet, chat, call, and collaborate in just one place.</p>
                            </div>
                            <div className="home-right-container">
                                <p>Start or join a Room</p>
                                <div>
                                    <Input placeholder="Create Room" style={{ minWidth: "225px" }} onChange={e => this.handleChange(e)} />
                                    <Button variant="contained" color="primary" onClick={this.join} style={{ margin: "20px", minWidth: "100px" }}>Create</Button>
                                </div>
                                <p style={{marginLeft: "125px", fontSize: "20px" }}>or</p>
                                <div>
                                    <Input placeholder="Join Room" style={{ minWidth: "225px" }} onChange={e => this.handleChange(e)} />
                                    <Button variant="contained" color="primary" onClick={this.join} style={{ margin: "20px", minWidth: "100px" }}>Join</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <picture>
                            <img style={{ width: '100%' }} alt="A family video call on Teams and the chat screen in Teams showing many conversations." title="A family video call on Teams and the chat screen in Teams showing many conversations." src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWDeEK?ver=e1e6&amp;q=90&amp;m=2&amp;h=768&amp;w=1024&amp;b=%23FFFFFFFF&amp;aim=true" srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWDeEK?ver=e1e6&amp;q=90&amp;m=2&amp;h=768&amp;w=1024&amp;b=%23FFFFFFFF&amp;aim=true, https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWDeEK?ver=e1e6&amp;q=90&amp;m=2&amp;h=1536&amp;w=2048&amp;b=%23FFFFFFFF&amp;aim=true 2x" />
                        </picture>
                    </div>
                </div>


            </div>
        )
    }
}

export default Home;