def print_upper_words(words,must_start_with):
    for word in words:
        for any in must_start_with:
            if word.startswith(any):
                result = word.upper()
                print(result)

print_upper_words(["hello", "hey", "goodbye", "yo", "yes"],
                   must_start_with={"h", "y"})  