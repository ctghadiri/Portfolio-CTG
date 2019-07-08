import React from 'react';

const Contact = () => {
    return (
        <div className="row section">
            <div className="col s12 l5">
                <h6>Reach Out!</h6>
                <p>Feel free to contact me if you have any questions or suggestions for current or future projects.</p>
            </div>
            <div className="col s12 l7">
                <form>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">email</i>
                            <input type="email" id="email "></input>
                            <label for="email">your_email@email.com</label>
                        </div>
                    </div>
                    <div className="input-field row">
                        <div className="col s12 l6">
                        <i class="material-icons prefix">account_circle</i>
                            <input placeholder="John" id="first_name" type="text" className="validate"></input>
                            <label for="first_name">First Name</label>
                        </div>
                        <div className="col s12 l6">
                            <input placeholder="Smith" id="last_name" type="text" className="validate"></input>
                            <label for="last_name">Last Name</label>
                        </div>
                    </div>
                    <div className="input-field row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">message</i>
                            <textarea id="textarea" className="materialize-textarea"></textarea>
                            <label for="textarea">Message</label>
                        </div>
                    </div>
                    <div className="input-field center">
                        <button className="btn white grey-text text-darken-1">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Contact;