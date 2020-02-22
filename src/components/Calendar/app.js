// import RNCalendarEvents from 'react-native-calendar-events'

// export default class App extends Componemnt {
//   constructor() {
//     super();
//     this.state = {
//       cal_auth: ''
//     }
//   }

//   componentWillMount ()
//     // iOS
//     RNCalendarEvents.authorizationStatus()
//      then(status => {
//        // if the status was previous accepted, set the authorized status to state
//        this.setState({ cal_auth: status })
//        if(status === 'undetermined') {
//          // if we made it this far, we need to ask the user for access 
//          RNCalendarEvents.authorizeEventStore()
//          .then((out) => {
//            if(out == 'authorized') {
//              // set the new status to the auth state
//              this.setState({ cal_auth: out })
//            }
//          })
//         }
//       })
// }

// RNCalendarEvents.saveEvent(`Example Event`, {
//   location:'Our Awesome Place City, State',
//   notes: `${this.props.title}`,
//   description: `${this.props.title}`,
//   startDate: firstTime.toISOString(),
//   endDate: lastTime.toISOString(),
//   calendar: ['Calendar'],
//   alarm: [{
//     date:-1
//   }],
// })
// .then(id => {
//   // we can get the event ID here if we need it
//   Linking.URL(`cal:${firstTime.getTime()}`);
// }).catch(error => console.log('Save Event Error: ', error));