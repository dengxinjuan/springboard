def in_range(nums, lowest, highest):
  for number in nums:
    if number>=lowest and number<=highest:
      print(f"{number} fits")

  


in_range([10, 20, 30, 40, 50], 15, 30)            
