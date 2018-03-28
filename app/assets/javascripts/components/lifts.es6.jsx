class Lifts extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			clicked: false
		}
	}
  render () {
  	// debugger;
    return (

      <React.Fragment>
      	<h2>this is data from Lifts</h2>
      	<h3>{this.props.data[0].liftname}</h3>	      
      </React.Fragment>
    );
  }
}


