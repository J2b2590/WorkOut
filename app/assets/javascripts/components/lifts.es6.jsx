
class Lifts extends React.Component {

	
	
	constructor(props, defaultProp){
		super(props, defaultProp)
		this.state = {
			lifts: this.props.data[0]
			

		};
	};

	static defaultProps () {
		lifts: []
}


 
  render () {
  	// debugger;
    return (
    	<div className="lifts">
    		<h1 className="title">Lift</h1>
    		<Lift lifts={this.state.lifts}/>	
    	</div>

    );
  }
}


