import React from 'react';

const Contact = () => {
    return (
        <div className="row section">
            <div className="col s12 l5">
                <h6>Contact</h6>
                <p>Reach out if you have any questions</p>
            </div>
            <div className="col s12 l7">
                <form>
                    <div className="input-field row">
                        <input type="email" id="email "></input>
                        <label for="email">your_email@email.com</label>
                    </div>
                    <div className="input-field row">
                        <div className="col s12 l6">
                            <input placeholder="John" id="first_name" type="text" className="validate"></input>
                            <label for="first_name">First Name</label>
                        </div>
                        <div className="col s12 l6"></div>
                            <input placeholder="Smith" id="last_name" type="text" className="validate"></input>
                            <label for="last_name">Last Name</label>
                        </div>
                    <div className="input-field row">
                        <textarea id="textarea" className="materialize-textarea"></textarea>
                        <label for="textarea">Message</label>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Contact;