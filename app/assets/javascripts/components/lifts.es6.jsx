class Lifts extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			data: this.props.data,
			lift: []

			
		};
	}
  render () {
  	// debugger;
    return (
    	<div className="lifts">
    		<h1 className="title">Lift</h1>
    	</div>
    	
    );
  }
}


