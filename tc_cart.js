"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Nicholas Le
   Date: 02/27/19  
   
   Filename: tc_cart.js
	
*/
//Displays default cart order cost
var orderTotal = 0;

//HTML code for the contents of the shopping cart in table form
var cartHTML = "<table> <tr> <th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th></tr>";

//Displays the price, item, description and quantity for the cart
for (var i = 0; i <= 3; i++) {
    cartHTML += "<tr> <td><img src='tc_" + item[i] + ".png' alt='" + item[i] + "' /></td>";
    cartHTML += "<td>" + itemDescription[i] + "</td> <td>$" + itemPrice[i] + "</td> <td>" + itemQty[i] + "</td>";

    //Multiplys the quantity to display the correct total.
    var itemCost = itemPrice[i] * itemQty[i];
    cartHTML += "<td>$" + itemCost + "</td></tr>";
    orderTotal = orderTotal + itemCost;
}
cartHTML += "<tr> <td colspan='4'>Subtotal</td> <td>" + orderTotal + "</td> </tr> </table>";
//Displays the cart
document.getElementById("cart").innerHTML = cartHTML;