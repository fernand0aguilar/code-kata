import string


def is_pangram(s):
    aplhaset = set(string.ascii_lowercase)
    return aplhaset <= set(s.lower())