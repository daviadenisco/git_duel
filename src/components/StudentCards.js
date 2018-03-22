import React from 'react';

class StudentCards extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
        <div className="row mt-4 StudentCards">
          <div id="user-1" className="col">
            <div className="row">
              <div className="col-4">
                <img className="avatar rounded img-fluid" src="http://placehold.it/276x276?text=User+1" alt="" />
              </div>
              <div className="col">
                <h1 className="username">Username</h1>
                <p className="name">
                  <strong>Name: </strong>
                  <span>Unknown</span>
                </p>
                <p className="public-repos">
                  <strong>Public Repos: </strong>
                  <span>Unknown</span>
                </p>
                <p className="followers">
                  <strong>Followers: </strong>
                  <span>Unknown</span>
                </p>
              </div>
            </div>
          </div>

          <div id="user-2" className="col">
            <div className="row text-right">
              <div className="col">
                <h1 className="username">Username</h1>
                <p className="name">
                  <strong>Name: </strong>
                  <span>Unknown</span>
                </p>
                <p className="public-repos">
                  <strong>Public Repos: </strong>
                  <span>Unknown</span>
                </p>
                <p className="followers">
                  <strong>Followers: </strong>
                  <span>Unknown</span>
                </p>
              </div>
              <div className="col-4">
                <img className="avatar rounded img-fluid" src="http://placehold.it/276x276?text=User+2" alt="" />
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default StudentCards
