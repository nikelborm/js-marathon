function getFormattedPhone( phone ) {
  let newPhone = '';
  for ( let i = 0; i < phone.length; i++ ) {
    if ( i === 2 ) {
      newPhone += ' (';
    } else if ( i === 5 ) {
      newPhone += ') ';
    } else if ( i === 8 ) {
      newPhone += '-';
    } else if ( i === 10 ) {
      newPhone += '-';
    }
    newPhone += phone.charAt( i );
  }
  return newPhone;
}
let testPhone = prompt( "Введите номер телефона: " );
console.log( getFormattedPhone( testPhone ) );
alert( getFormattedPhone( testPhone ) );
