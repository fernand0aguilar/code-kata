class Memoize:
    def __init__(self, fn):
        self.fn = fn
        self.memo = {}

    def __call__(self, arg):
        if arg not in self.memo:
            self.memo[arg] = self.fn(arg)
            return self.memo[arg]


@Memoize
def fibonacci(n):
    a, b = 1, 1
    for i in range(n - 1):
        a, b = b, a + b
    return a


# Optmized, hilarious simple and lazy
#
# from functools import lru_cache
#
# @lru_cache(None)
# def fibonacci(n):
#     if n in [0, 1]:
#         return n
#     return fibonacci(n - 1) + fibonacci(n - 2)