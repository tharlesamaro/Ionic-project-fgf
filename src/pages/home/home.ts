import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DBMeter } from '@ionic-native/db-meter';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	public subscription;

  constructor(
  	public navCtrl: NavController,
  	private dbMeter : DBMeter
  ) {

  }

  startDBMeter(){
  	// Start listening
	  this.subscription = this.dbMeter.start().subscribe(
  		data => console.log(data)
	);

  }

  stopDBMeter(){
    // Stop listening
    this.subscription.unsubscribe();
  }

  listingDBMeter(){
    // Check if we are listening
    this.dbMeter.isListening().then(
      (isListening: boolean) => console.log(isListening)
    );
  }

  deleteDBMeter(){
    // Delete DBMeter instance from memory
    this.dbMeter.delete().then(
      () => console.log('Deleted DB Meter instance'),
      error => console.log('Error occurred while deleting DB Meter instance')
    );
  }



}
