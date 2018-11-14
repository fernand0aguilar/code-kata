def expanded_form(num):
    numArray = str(num)
    result = ""
    length = len(numArray)

    for index in range(0, length):
        n = numArray[index]
        if (int(n) > 0):
            if (result != ""):
                result += " + "
            result += str(n).ljust(length - index, '0')
    return result
   