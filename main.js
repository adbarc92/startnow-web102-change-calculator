// Write your JavaScript here

    // var change = {
    //     quarters: 0,
    //     dimes: 0,
    //     nickels: 0,
    //     pennies: 0
    // };


function convertToChange( amt, change ){
    console.log( 'Converting Change...' );
    while( amt != 0 ){
        if( amt > 1 ){
            console.log( '+1 dollar' );
            amt -= 1;
            change.dollars++;
            continue;
        }
        else if( amt >= 0.25 ){
            console.log( '+1 quarter' );
            amt -= 0.25;
            change.quarters++;
            continue;
        }
        else if( amt >= 0.10 ){
            console.log( '+1 dime' );
            amt -= 0.10;
            change.dimes++;
            continue;
        }
        else if( amt >= 0.05 ){
            console.log( '+1 nickel' );
            amt -= 0.05;
            change.nickels++;
            continue;
        }
        else if( amt >= 0.01 ) {
            console.log( '+1 penny' );
            amt -= 0.01;
            change.pennies++;
            continue
        }
        else if( amt < 0.01 && amt >= 0.005 ){
            amt = 0;
            change.pennies++;
            continue;
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
    difference = adjustFloat( difference );
    console.log( 'Adjusted Difference: ' + difference );
    
    if( difference > 0 ){
        convertToChange( difference, change );
        postChange( change );
    }
}

function adjustFloat( num ){
    console.log( 'OG: ', num );
    num = num * 100;
    console.log( 'x100: ', num );
    num = Math.round( num );
    console.log( 'Rounded: ', num );
    num = num / 100;
    console.log( 'Fixed: ',num );
    return num;
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
        manageChange( amtDue, amtPaid );
    });
});
