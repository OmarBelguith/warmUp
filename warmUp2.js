// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
<<<<<<< HEAD
//you can only add one at each summetion, you'll need to use recursion in this.

function gcd(a, b){
	var divisor = Math.min (a, b);
	var find = false;
		while (find == false) {
			if (((a % divisor) == 0) && ((b % divisor) == 0)){
				return divisor;
				find = true;
			}
			else {
				divisor -= 1;
	 }
	}
}
=======
//you can only add one at each summetion, you'll need to use recursion in this.
>>>>>>> 5351c491bef905428a1af3ea57f32fb6874d8e38
