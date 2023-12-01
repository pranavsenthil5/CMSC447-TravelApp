import React from 'react'
 
function Header() {
    return (
      <div>
        <nav className="nav">
          <div className="nav-left">
            <a className="brand" href="#">
                WPWeb Tasks
            </a>
          </div>
          <div className="nav-right">
            <div className="tabs">
              <a href="https://wpwebinfotech.com">Task Management App by WPWeb Infotech</a>
            </div>
          </div>
        </nav>
      </div>
    );
}
 
export default Header;