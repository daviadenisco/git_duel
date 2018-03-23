import React from 'react';

class CompareAccounts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <label for="username-1">Username</label>
                <input className="form-control" type="text" id="username-1" placeholder="Enter a GitHub username" />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label for="username-1">Username</label>
                <input className="form-control" type="text" id="username-2" placeholder="Enter another GitHub username" />
              </div>
            </div>
          </div>

          <div className="row justify-content-center mt-2 mb-4">
            <div className="col-4">
              <button id="compare" className="btn btn-large btn-block btn-warning">Compare Accounts</button>
            </div>
          </div>
      </React.Fragment>
    )
  }

}

export default CompareAccounts
