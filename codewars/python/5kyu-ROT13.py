import string
from codecs import encode as _dont_use_this_

def rot13(message):
    rot13 = string.maketrans(
        "ABCDEFGHIJKLMabcdefghijklmNOPQRSTUVWXYZnopqrstuvwxyz",
        "NOPQRSTUVWXYZnopqrstuvwxyzABCDEFGHIJKLMabcdefghijklm")
    return string.translate(message, rot13)

def rot13_optimized(message):
    return message.encode(rot13)