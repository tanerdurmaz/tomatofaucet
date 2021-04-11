#start test:
npm test

#start Tomato Faucet:
npm start

implementation details:

-Icon sizes 192 and 512 not exist like in example Matic Faucet

-Using '@material-ui/core/Paper' for white containers, I think matic faucet using the same one

-For button and text input, @material-ui is not used

-Validation is only done for length (when 26< and >35)

-TomatoFaucet class holds input in the state

-Removed webvitals

-I wrote some css by myself since I am not proficient on it bad practises may exist

-I am not sure about html indentation 

-Implemented only 1 trivial test case for checking is title redering or not
