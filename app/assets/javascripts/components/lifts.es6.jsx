class Lifts extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			lifts: [],

			clicked: false
		}
	}
  render () {
  	debugger;
    return (

      <React.Fragment>
      	<h2>this is data from Lifts</h2>
      	<td>{this.props.data[0]}</td>	      
      </React.Fragment>
    );
  }
}


