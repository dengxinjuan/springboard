"""Word Finder: finds random words from a dictionary."""

import random

class WordFinder:
    
      """Machine for finding random words from dictionary.
    
    >>> wf = WordFinder("simple.txt")
    3 words read

    >>> wf.random() in ["cat", "dog", "porcupine"]
    True

    >>> wf.random() in ["cat", "dog", "porcupine"]
    True

    >>> wf.random() in ["cat", "dog", "porcupine"]
    True
    """
    
    def __init__(self, path):
        """print how many words read"""
        file =open(path)
        self.words = self.parse(file)
  
        print(f"{len(self.words)}words read")
    

    def parse(self,file):
        """change file to how many words"""
        return [w.strip()for w in file]
       

    def random(self):
        """random choice of words"""
        return random.choice(self.words)
    


class SpecialWordFinder(WordFinder):
    """Specialized WordFinder that excludes blank lines/comments.
    
    >>> swf = SpecialWordFinder("complex.txt")
    3 words read

    >>> swf.random() in ["pear", "carrot", "kale"]
    True

    >>> swf.random() in ["pear", "carrot", "kale"]
    True

    >>> swf.random() in ["pear", "carrot", "kale"]
    True
    """

    def parse(self, dict_file):
        """Parse dict_file -> list of words, skipping blanks/comments."""

        return [w.strip() for w in dict_file
                if w.strip() and not w.startswith("#")]
                