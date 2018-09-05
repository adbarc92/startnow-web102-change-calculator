// Write your JavaScript here

    // var change = {
    //     quarters: 0,
    //     dimes: 0,
    //     nickels: 0,
    //     pennies: 0
    // };

    // document.getElementById('dollars-output').innerText = ('Dollar(s): ' + change.dollars );
    // document.getElementById('quarters-output').innerText = ('Quarter(s): ' + change.quarters );
    // document.getElementById('dimes-output').innerText = ('Dime(s): ' + change.dimes );
    // document.getElementById('nickels-output').innerText = ('Nickel(s): $' + change.nickels );
    // document.getElementById('pennies-output').innerText = ('Penny(s): $' + change.pennies );

function convertToChange( amt, change ){
    console.log( 'Converting Change...' );
    while( amt != 0 ){
        if( amt > 100 ){
            console.log( '+1 dollar' );
            amt -= 100;
            change.dollars++;
            continue;
        }
        else if( amt >= 25 ){
            console.log( '+1 quarter' );
            amt -= 25;
            change.quarters++;
            continue;
        }
        else if( amt >= 10 ){
            console.log( '+1 dime' );
            amt -= 10;
            change.dimes++;
            continue;
        }
        else if( amt >= 5 ){
            console.log( '+1 nickel' );
            amt -= 5;
            change.nickels++;
            continue;
        }
        else if( amt >= 1 && amt > 0 ) {
            console.log( '+1 penny' );
            amt -= 1;
            change.pennies++;
            continue
        }
        else{
            console.log( 'Final Count:' );
            console.log( 'Dollars: ' + change.dollars );
            console.log( 'Quarters: ' + change.quarters );
            console.log( 'Dimes: ' + change.dimes );
            console.log( 'Nickels: ' + change.nickels );
            console.log( 'Pennies: ' + change.pennies );
            return;
        }
    }
}

function postChange( change ){
    document.getElementById('dollars-output').innerText = ( change.dollars );
    document.getElementById('quarters-output').innerText = ( change.quarters );
    document.getElementById('dimes-output').innerText = ( change.dimes );
    document.getElementById('nickels-output').innerText = ( change.nickels );
    document.getElementById('pennies-output').innerText = ( change.pennies );
}

function manageChange( amtDue, amtPaid ){
    console.log( 'Managing Change...' );
    var change = {
        dollars: 0,
        quarters: 0,
        dimes: 0,
        nickels: 0,
        pennies: 0
    };
    console.log( 'Calculating Difference...' );
    var difference = amtPaid - amtDue;
    console.log( 'Difference: ' + difference );
    
    if( difference > 0 ){
        convertToChange( difference, change );
        postChange( change );
    }
}

function fixChange( amt ){
    amt = amt * 100;
}

window.addEventListener( 'DOMContentLoaded', ( e ) => {
    var btn = document.getElementById( 'calculate-change' );
    btn.addEventListener( 'click', () => {
        var amtDue = document.getElementById( 'amount-due' ).value;
        console.log( 'Type of Amount Due: ', typeof( amtDune ));
        var amtPaid = document.getElementById( 'amount-received' ).value;
        console.log( 'Type of Amount Paid: ', typeof( amtPaid ));
        console.log( 'Amount Paid: ', amtPaid);
        console.log( 'Amount Due: ', amtDue);
        fixChange( amtPaid );
        fixChange( amtDue );
        manageChange( amtDue, amtPaid );
    });
});
