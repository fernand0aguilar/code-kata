# Given a string of words, you need to find the highest scoring word.

# Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3 etc.

# You need to return the highest scoring word as a string.

# If two words score the same, return the word that appears earliest in the original string.

# All letters will be lowercase and all inputs will be valid.


def high(sentence):
    listOfWords = sentence.lower().split()
    dict_words = {k: calcValue(k) for k in listOfWords}
    return max(dict_words, key=dict_words.get)

def calcValue(word):
    return sum((ord(c) - 96) for c in word)

def high_optimized(sentence):
    return max(sentence.split(), key=lambda word: sum((ord(c) - 96) for c in word))