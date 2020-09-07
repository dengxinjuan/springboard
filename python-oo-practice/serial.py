"""Python serial number generator."""

class SerialGenerator:
    """Machine to create unique incrementing serial numbers.
    
    >>> serial = SerialGenerator(start=100)

    >>> serial.generate()
    100

    >>> serial.generate()
    101

    >>> serial.generate()
    102

    >>> serial.reset()

    >>> serial.generate()
    100
    """
    def __init__(self,start=0):
        """make the start point"""
        self.start = self.next = start
    
    def __repr__(self):
        """describtion """
        return f"start is {self.start}, next is {self.next}"

    def reset(self):
        """reset"""
        self.start = self.next



    def generate(self):
        """create number"""
        self.next+=1
        return self.next

