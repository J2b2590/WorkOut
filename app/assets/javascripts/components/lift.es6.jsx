
class Lift extends React.Component{

	render(){
		return(
		<table>
			<tbody>
				<tr>
					
						<td key={this.props.lifts.date}>{this.props.lifts.date}</td>
						<td key={this.props.lifts.liftname}>{this.props.lifts.liftname}</td>
						<td key={this.props.lifts.ismetric}>{this.props.lifts.ismetric}</td>
						<td key={this.props.lifts.weightlifted}>{this.props.lifts.weightlifted}</td>
						<td key={this.props.lifts.repsperformed}>{this.props.lifts.repsperformed}</td>
						<td key={this.props.lifts.onrm}>{this.props.lifts.onrm}</td>
			    </tr>
			</tbody>
		</table>
			)
	}
}