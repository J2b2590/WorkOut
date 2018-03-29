
class Lift extends React.Component{

	render(){
		return(
		<table>
			<tbody>
				<tr>
					
						<td key={this.props.lifts.date}>{this.props.lifts.date}</td>
					
			    </tr>
			</tbody>
		</table>
			)
	}
}