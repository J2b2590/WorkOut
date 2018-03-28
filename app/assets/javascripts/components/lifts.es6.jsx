
class Lifts extends React.Component {


	
	static defaultProps () {
		lifts: []
}
	
	constructor(props, defaultProp){
		super(props, defaultProp)
		this.state = {
			lifts: this.props.data
			

		};
	};


 
  render () {
  	debugger;
    return (
    	<div className="lifts">
    		<h1 className="title">Lift</h1>
    	</div>

    );
  }
}


