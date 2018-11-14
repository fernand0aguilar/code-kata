# My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

# In honor of my grandfather's memory we will write a function using his formula!

#     Take a list of ages when each of your great-grandparent died.
#     Multiply each number by itself.
#     Add them all together.
#     Take the square root of the result.
#     Divide by two.
# ####################

def predict_age(age_1, age_2, age_3, age_4, age_5, age_6, age_7, age_8):
    saved_args = list(locals().values())

    sum_values = sum(age*age for age in saved_args)

    return int(sum_values**(1.0/2) / 2)


def predict_age_optimized(*saved_args):
    return sum(age * age for age in saved_args)**(.5) // 2
