# a simple parser for python. use get_number() and get_word() to read
def parser():
    while 1:
        data = list(input().split(' '))
        for number in data:
            if len(number) > 0:
                yield(number)   

input_parser = parser()

def get_word():
    global input_parser
    return next(input_parser)

def get_number():
    data = get_word()
    try:
        return int(data)
    except ValueError:
        return float(data)


# numpy and scipy are available for use
import numpy
import scipy
import string







def getOutPut(n,input1,input2):
    combinations = generate_combinations(n)
    # for c1 in string.ascii_lowercase:
    #     for c2 in string.ascii_lowercase:
    #         for c3 in string.ascii_lowercase:
    #             combination = c1 + c2 + c3
    #             combinations.append(combination)
    abba = []
    none = []
    abnba = []
    for combination in combinations:
        
            
        if(input1 in combination or input2 in combination):
            if(input1 in combination and input2 in combination):
                    abnba.append(combination)
            else: abba.append(combination)
        else:
            none.append(combination)
        
    first = len(none) * 1
    second = len(abba) * 2
    third = len(abnba) * 4
    return (first + second + third)%998244353


def generate_combinations(n, prefix=""):
    if n == 0:
        return [prefix]

    combinations = []
    for c in string.ascii_lowercase:
        combinations.extend(generate_combinations(n - 1, prefix + c))

    return combinations



a = get_number()
b = get_number() 
str1 = get_word()
str2 = get_word()
print(getOutPut(a,str1,str2))


# numpy and scipy are available for use
# import numpy
# import scipy
# import string









# def generate_combinations(n, prefix=""):
#     if n == 0:
#         return [prefix]

#     combinations = []
#     for c in string.ascii_lowercase:
#         combinations.extend(generate_combinations(n - 1, prefix + c))
#     print(combinations)

#     return combinations



# MOD = 998244353


# def get_power(n, m, s):
#     if(n > 20):
#         n = 20
#     # Generate all possible strings of length n
#     combinations = generate_combinations(n)

#     # Count the number of occurrences of each string in s in each combination
#     count = {}
#     for combination in combinations:
#         count[combination] = sum(combination.count(string) for string in s)

#     # Compute the power of each combination
#     power = sum(pow(2, count[combination], MOD) for combination in combinations)

#     return power % MOD

# # Read input from standard input
# n, m = map(int, input().split())
# s = [input().strip() for _ in range(m)]

# # Compute the power of all strings of length n
# power = get_power(n, m, s)

# # Print the result
# print(power)