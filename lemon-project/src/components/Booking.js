import React from 'react'

const Booking =()=>{
	
	return(
	<div class="booking" id="Booking">
	
	<form class="form">
	<h2>Reservation Form</h2>
	<input type="text" placeholder="First" required/> <input type="text" placeholder="First" required/><br/>
	<input type="text" placeholder="Email" required/> <input type="text" placeholder="Phone" required/><br/>
	<textarea rows="4" cols="50">
	Notes
	</textarea>
   <input type="submit" value="submit" id="sm"/>	
	</form>
	</div>
	
	)
	
	
}
export default Booking