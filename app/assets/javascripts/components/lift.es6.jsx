
class Lift extends React.Component{

	render(){
		return(
			<div>
				<form className="ReactModal_Content">
							<h1 className="title">This is the Lift component</h1>

							<input className="one" name="date"			type="text"    placeholder="whats the date?" value={this.props.lifts.date}/>
							<input className="one" name="liftname" 		type="text"    placeholder="Whats the lift?" value={this.props.lifts.liftname}/>
							<input className="one" name="ismetric"		type="boolean" placeholder="Is metric" 		 value={this.props.lifts.ismetric}/>
							<input className="one" name="weightlifted" 	type="integer" placeholder="how much was it?"value={this.props.lifts.weightlifted}/>
							<input className="one" name="repsperformed" type="integer" placeholder="How many reps" 	 value={this.props.lifts.repsperformed}/>
							<input className="one" name="ismetric" 		type="integer" placeholder="Not sure" 		 value={this.props.lifts.onrm}/>
							// eventually creating an onChange handler
				</form>

			</div>
			)
	}
}
