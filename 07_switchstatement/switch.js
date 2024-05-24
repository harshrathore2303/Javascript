const day = 'friday';

switch(day){
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record video');
        break;
    case 'saturaday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('No a valid day!');
}