def valid_parentheses(string):
    stack = []

    for c in string:
        if c == "(":
            stack.append(c)
        elif not stack and c == ")":
            return False
        elif c == ")":
            stack.pop()

    return not stack