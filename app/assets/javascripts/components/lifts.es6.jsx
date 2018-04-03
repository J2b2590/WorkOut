
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

    		<table>

    			<tbody>

    				<tr>

    					<td key={this.state.lifts.date}> Date </td>
    					<td key={this.state.lifts.liftname}> Lift Name </td>
    					<td key={this.state.lifts.weightlifted}>  Weight Lifted </td>
    					<td key={this.state.lifts.repsperformed}>  Reps Performed </td>
    					<td key={this.state.lifts.onrm}>  1 Rep </td>

    				</tr>

    			</tbody>
    			
    		</table>

    		<Lift lifts={this.state.lifts}/>

    	</div>

    );
  }
}


