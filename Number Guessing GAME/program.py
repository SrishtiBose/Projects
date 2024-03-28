import random
target=random.randint(1,100)
while True:
    userChoice=input("Enter the target :")
    if (userChoice=="Quit"):
        break
    userChoice=int(userChoice)
    if (userChoice==target):
        print("You have succesfully guessed the number!")
        break
    elif (userChoice<target):
        print("The number you have guessed is smaller than the actual number.Try again or Quit!")
    else :
        print("The number you have guessed is bigger than the actual number.Try again or Quit!")



print("----Game Over----")