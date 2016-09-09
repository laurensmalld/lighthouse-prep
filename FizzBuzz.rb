for i in 1..100 do |i|
	if i % 3 == 0
		print "Fizz"
	elsif i % 5 == 0 
		print "Buzz"
	elsif i % 5 == 0 && i % 3 == 0
		print "FizzBuzz"
	else print i
	end
end