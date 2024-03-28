import random

import string


pass_length=int(input("Enter the lenth of the password:"))

charValues=string.ascii_letters+string.digits+string.punctuation

password="".join([random.choice(charValues) for i in range (pass_length)])

print("Our random password is",password)
