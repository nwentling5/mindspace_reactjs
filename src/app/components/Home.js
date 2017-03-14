import React from 'react';

export class Home extends React.Component {
    
    constructor(props){
        super();
        this.state =  {
            age: props.initalAge,
            status: 0,
            homeLink: props.initalLinkName
        };
        setTimeout(()=> {
                this.setState({
                    status: 1   
                });
            
        }, 3000);
        console.log("Constructor");
    }

    componentWillMount(){
        console.log("Component will mount");
    }

    componentDidMount(){
        console.log("Component did mount");
    }

    componentWillReceiveProps(nextProps){
        console.log("Component will receive props", nextProps)
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("Should component update", nextProps, nextState);
        // if (nextState.status === 1) {
        //     return false;
        // }
        return true;
    }

    componentWillUpdate(nextProps, nextState){
        console.log("Component will update", nextProps, nextState)
    }

    componentDidUpdate(prevProps, prevState){
        console.log("Component did update", prevProps, prevState);
    }

    componentWillUnmount(){
        console.log("Component will unmount");
    }

    onMakeOlder() {
        // Will review to see if it needs to rerender component
        this.setState({
            age: this.state.age + 3
        });
    } 

    onChangeLink(){
        this.props.changeLink(this.state.homeLink);
    }

    onHandleChange(event){
        this.setState({
            homeLink: event.target.value
        });
    }
    
    render(){
        return (
            <div>
                <p>Home Yo!</p>
                <p>Im a new Component!</p>
                <p>Your name is {this.props.name}, your age is {this.state.age}</p>
                <p>Status: {this.state.status}</p>
                <hr/>
                <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make me older!</button>
                {/*
                ES6 Version
                <button onClick={() this.onMakeOlder()} className="btn btn-primary">Make me older!</button>*/}
                <hr/>
                <button onClick={this.props.greet} className="btn btn-primary">Greet</button>
                <hr/>
                <input type="text" value={this.state.homeLink} onChange={(event)=> this.onHandleChange(event)}/>
                <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change Header Link</button>
            </div>
        );
    }
}

Home.propsTypes = {
    name: React.PropTypes.string,
    initalAge: React.PropTypes.number,
    greet: React.PropTypes.func,
    initalLinkName: React.PropTypes.string
};