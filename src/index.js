import React, { useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './seasonDisplay';
import Spinner from './Spinner';
import useLocation from './useLocation';

const App = () => { 
    const [lat, errorMessage] = useLocation();


    let content;
    if (errorMessage) {
        content = <div>Error: {errorMessage}</div>;
    } else if (lat) {
        content = <SeasonDisplay lat={lat}/>;
    } else {
        content = <Spinner message="Please click!"/>
    }

   
        return(
        <div className="border red">
        {content}
        </div>
        )
};
/*class App extends React.Component {
    
        state= { lat: null, errorMessage: ''};

        

    

    componentDidMount(){
        console.log('wtf just happened?');
        window.navigator.geolocation.getCurrentPosition(
            position => 
                //setstate to for state
                this.setState({ lat: position.coords.latitude }),

            err =>{ this.setState ({ errorMessage: err.message}); } );
    }
    componentDidUpdate(){
        console.log ('thats the fuck pdate');
    }

    renderContent () {
        {
        
            if ( this.state.errorMessage && !this.state.lat) {
                return <div> Error: {this.state.errorMessage} </div>
            } 
            
            if (!this.state.errorMessage && this.state.lat) {
     
             return <SeasonDisplay lat={this.state.lat}/>
            }
     
            return <div><Spinner message="Please click the Damn thing!"/></div>
         }
    }
    render() {
        return(
        <div className="border red">
        {this.renderContent()}
        </div>
        )}
}; */

ReactDOM.render(
<App/>,
document.querySelector('#root'));