import React, { Component } from 'react';
import Header from './Header';
export class Layout extends Component {
    render() {
        return  (
            <div>
                <div id="preloder">
                    <div className="loader" > </div> 
                </div>
                <Header/>
            </div>
        )
    }
}
export default Layout;